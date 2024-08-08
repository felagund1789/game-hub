import { useQuery } from "@tanstack/react-query";
import plarforms from "../data/platforms";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 86_400_00, // 24h
    initialData: { count: plarforms.length, next: null, results: plarforms },
  });

export default usePlatforms;
