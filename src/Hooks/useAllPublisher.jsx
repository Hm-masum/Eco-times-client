import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";


const useAllPublisher = () => {
    const axiosCommon=useAxiosCommon()

  const { data: publishers = [], isLoading } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/publisher`);
      return data;
    },
  });
  return [publishers,isLoading]
};

export default useAllPublisher;
