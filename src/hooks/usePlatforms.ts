import { useQuery } from "@tanstack/react-query";
import plarforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/list/parents")
        .then((res) => res.data),
    staleTime: 86_400_00, // 24h
    initialData: { count: plarforms.length, results: plarforms },
  });

export default usePlatforms;
