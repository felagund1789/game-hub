import plarforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: plarforms, isLoading: false, error: null });

export default usePlatforms;
