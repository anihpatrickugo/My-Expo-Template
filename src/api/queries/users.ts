import { useApiQuery } from "@/hooks/useApiQuery";
import { apiService } from "@/services";

export const USER_KEY = {
  USERS: "users",
  WALLETS: "wallets",
};

export const useGetWalletsQuery = () =>
  useApiQuery({
    queryKey: [USER_KEY.WALLETS],
    queryFn: () => apiService.getUserWallets(),
  });
