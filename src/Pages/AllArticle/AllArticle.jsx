import { useQuery } from "@tanstack/react-query";
import ArticleCart from "../../Components/ArticleCart";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { useState } from "react";
import useRole from "../../Hooks/useRole";

const AllArticle = () => {
  const axiosCommon = useAxiosCommon();
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [role, ] = useRole()

  const { data: allArticles = [], isLoading,refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/all-articles?search=${search}`);
      return data;
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
    refetch()
  };

  const articles=allArticles.filter(item=>item.status==='approved' || item.status==='premium')



  if (isLoading) return <LoadingSpinner />;



  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="flex items-center justify-center my-4">
          <input
            className="rounded-lg"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            name="search"
            placeholder="Enter title Name"
            aria-label="Enter title Name"
          />
          <button className="text-white  bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm px-4 py-3 font-semibold text-center">
            Search
          </button>
        </div>
      </form>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCart key={article._id} article={article} role={role}></ArticleCart>
        ))}
      </div>
    </div>
  );
};

export default AllArticle;
