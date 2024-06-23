import { FaUsers } from "react-icons/fa";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import LoadingSpinner from "../../Components/LoadingSpinner";

const Statistics = () => {
    const axiosCommon=useAxiosCommon()
    const {
        data: users = [],
        isLoading,
      } = useQuery({
        queryKey: ["allUser"],
        queryFn: async () => {
          const { data } = await axiosCommon.get(`/users`);
          return data;
        },
    });

    let premiumUser=users.filter(item=>item?.role==='Premium user')
    let normalUser=users.filter(item=>item?.role==='normal user')

    if (isLoading) return <LoadingSpinner />;


    return (
        <div className="my-14">
          <h2 className="text-3xl mb-5 text-center font-semibold">Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 flex items-center justify-center gap-5">
                <div>
                    <p>Total user.</p>
                    <p className="text-5xl font-semibold">{users.length}</p>
                    <p>↗︎ 400 (22%)</p>
                </div>
                <div><FaUsers className="text-6xl text-orange-500"/></div>
            </div>
            <div className="border rounded-lg p-4 flex items-center justify-center gap-5">
                <div>
                    <p>Premium user.</p>
                    <p className="text-5xl font-semibold">{premiumUser.length}</p>
                    <p>↗︎ 400 (10%)</p>
                </div>
                <div><MdOutlineWorkspacePremium  className="text-6xl text-orange-500"/></div>
            </div>
            <div className="border rounded-lg p-4 flex items-center justify-center gap-5">
                <div>
                    <p>Normal user.</p>
                    <p className="text-5xl font-semibold">{normalUser.length}</p>
                    <p>↗︎ 400 (60%)</p>
                </div>
                <div><HiMiniUserGroup  className="text-6xl text-orange-500"/></div>
            </div>
            
          </div>
        </div>
    );
};

export default Statistics;