import {
  getDashboardStats,
} from "../../services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ["fetchDashboardStats"],
    queryFn: () => getDashboardStats(),
    select: (data) => data,
    onError: () => {},
  });
};