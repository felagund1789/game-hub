import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import plarforms from "../data/platforms";
import Platform from "../entities/Platform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: plarforms,
  });

export default usePlatforms;
