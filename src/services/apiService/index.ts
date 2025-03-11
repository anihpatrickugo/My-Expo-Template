import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@/constants";
import axios from "axios";

const apiService = axios.create({ baseURL: BASE_URL });

// Set the AUTH token for any request

apiService.interceptors.request.use(
  // intercepting requests
  async (request) => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => response, // Directly return successful responses.

  // intercepting errors
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.

      try {
        // Retrieve the stored refresh token.
        const refresh = await AsyncStorage.getItem("refreshToken");

        // Make a request to your auth server to refresh the token.
        const response = await axios.post(`${BASE_URL}/user/auth/refresh-token/`, {
          refresh,
        });

        const { access } = response.data;
        // Store the new access and refresh tokens.

        await AsyncStorage.setItem("accessToken", access);

        // Update the authorization header with the new access token.
        apiService.defaults.headers.common["Authorization"] = `Bearer ${access}`;
        return apiService(originalRequest); // Retry the original request with the new access token.
      } catch (refreshError) {
        // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
        console.error("Token refresh failed:", refreshError);
        await AsyncStorage.removeItem("accessToken");

        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error); // For all other errors, return the error as is.
  }
);
export { apiService };

// export * from "./ApiRoute";
// export * from "./data-contracts";
