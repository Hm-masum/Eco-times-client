import { useQuery } from "@tanstack/react-query";
import ArticleCart from "../../Components/ArticleCart";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { useEffect, useState } from "react";
import useRole from "../../Hooks/useRole";
import useAllPublisher from "../../Hooks/useAllPublisher";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const AllArticle = () => {
  const axiosCommon = useAxiosCommon();
  const [searchText, setSearchText] = useState("");
  const [role,isLoading] = useRole();
  const [publishers, Loading] = useAllPublisher();
  const [selectedOption, setSelectedOption] = useState([]);
  const [publisherItem, setPublisherItem] = useState("all");
  const [allArticles, setAllArticles] = useState([]);


  useEffect(() => {
    let selectedTags=[];
    selectedOption.map(tag=> selectedTags.push(tag.value))

    const getData = async () => {
      const { data } = await axiosCommon(
        `/all-articles?search=${searchText}&publisher=${publisherItem}&tags=${selectedTags}`
      );
      setAllArticles(data);
    };
    getData();
  }, [publisherItem,searchText,selectedOption,axiosCommon]);


  const articles = allArticles.filter(
    (item) => item.status === "approved" || item.status === "premium"
  );

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
        <div className="md:w-[25%] w-full flex space-x-2 items-center">
          <input
            className="rounded-lg w-full"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            name="search"
            placeholder="Enter title Name"
            aria-label="Enter title Name"
          />
        </div>

        <div className="md:w-[40%] w-full flex flex-row items-center gap-3">
           <div className="w-full">
            <select
              onChange={(e) => setPublisherItem(e.target.value)}
              value={publisherItem}
              className="border w-full rounded-lg"
            >
              <option value={"all"}>All Publisher</option>
              {publishers?.map((item) => (
                <option value={item?.publisher} key={item?._id}>
                  {item?.publisher}
                </option>
              ))}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCart
            key={article._id}
            article={article}
            role={role}
          ></ArticleCart>
        ))}
      </div>
    </div>
  );
};

export default AllArticle;
