import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import LoadingSpinner from "../../Components/LoadingSpinner";

const Publishers = () => {
    const axiosCommon=useAxiosCommon()

    const { data: publishers = [], isLoading } = useQuery({
      queryKey: ["publisher"],
      queryFn: async () => {
        const { data } = await axiosCommon.get(`/publisher`);
        return data;
      },
    });
    
    if (isLoading) return <LoadingSpinner />


    return (
        <div className="my-10">
            <h2 className="text-3xl mb-8 text-center font-semibold">Publishers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4">
                {
                    publishers.map(publisher => <div key={publisher.id}>
                        <div>
                          <div className="border p-3 rounded-xl"><img className="w-[200px] h-[200px]" src={publisher.image} alt="" /></div>
                          <h2 className="text-3xl font-semibold text-center">{publisher.publisher}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Publishers;