import { useQuery } from "@tanstack/react-query";
import ArticleCart from "../../Components/ArticleCart";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { useState } from "react";
import useRole from "../../Hooks/useRole";
import useAllPublisher from "../../Hooks/useAllPublisher";
import Select from "react-select";
import makeAnimated from 'react-select/animated';

const AllArticle = () => {
  const axiosCommon = useAxiosCommon();
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [role, ] = useRole();
  const [publishers, Loading] = useAllPublisher();
  const [selectedOption, setSelectedOption] = useState([]);

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

  const animatedComponents = makeAnimated();
  const options = [
    { value: "sports", label: "Sports" },
    { value: "entertainment", label: "Entertainment" },
    { value: "Science", label: "Science" },
    { value: "politics", label: "Politics" },
    { value: "education", label: "Education" },
    { value: "international", label: "International" },
  ];

  if (isLoading || Loading) return <LoadingSpinner />;



  return (
    <div>
      <div className="my-5 gap-3 flex flex-col md:flex-row items-center justify-between">
        <form onSubmit={handleSearch} className="md:w-[25%] w-full flex space-x-2 items-center">
           <input
              className="rounded-lg w-[70%]"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="search"
              placeholder="Enter title Name"
              aria-label="Enter title Name"
            />
            <button type="submit" className="text-white w-[30%] bg-gradient-to-r from-purple-500     via-purple-600 to-purple-800 hover:bg-gradient-to-br focus:ring-4     focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800     rounded-lg text-sm px-4 py-3 font-semibold text-center">
                Search
            </button>
        </form>


        <div className="md:w-[40%] w-full flex flex-row items-center gap-3">
          <div className="w-full">
            <select className="border w-full rounded-lg">
              <option value={""}>All Publisher</option>
              {
                publishers?.map(item =>
                 <option value={item?.publisher} key={item?._id}>{item?.publisher}</option>
                )
              }
            </select>
          </div>

          <div className="w-full">
            <Select
              className="w-full"
              components={animatedComponents}
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            />
          </div>
        </div>

      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCart key={article._id} article={article} role={role}></ArticleCart>
        ))}
      </div>
    </div>
  );
};

export default AllArticle;
