import * as React from "react";
import { NetworkError, RestrictedError, ServerError } from "@/components/errors";
import { useToast } from "./useToast";
import { logger } from "@/utils";
import { AxiosError } from "axios";
import { useAuth } from "./useAuth";

type ErrorData = {
  code: string;
  message: string;
  statusCode: number;
  timestamp: string;
  urlPath: string;
};

type useErrorType = () => {
  handleError: (error: AxiosError<ErrorData>, callback?: (error?: ErrorData) => void) => void;
};

const useError: useErrorType = () => {
  const toast = useToast();
  const { logout } = useAuth();

  const handleError = (error: AxiosError<ErrorData>, callback?: (error?: ErrorData) => void) => {
    logger.log("Request Error =============>> ", error.response?.data);

    if (error.message.includes("Network error")) {
      toast.error(<NetworkError />);
    }

    switch (error.response?.data?.code) {
      case "RESTRICTED":
        toast.error(<RestrictedError />);
        break;
      case "UNAUTHORIZED":
        toast.error("You're not authorized to access this, please login and try again.");
        logout();
        break;
      case "UNAUTHENTICATED":
        toast.error("Your session have expired. Please login and try again.");
        logout();
        break;
      case "INTERNAL_SERVER_ERROR":
        toast.error(<ServerError />);
        break;
      default:
        if (error.response && error.response.status.toString().match(/5\d\d/)) {
          toast.error(<ServerError />);
        } else {
          toast.error(error.response?.data?.message || error.message);
        }
        break;
    }

    return callback?.(error.response?.data);
  };

  return { handleError };
};

export { useError };
