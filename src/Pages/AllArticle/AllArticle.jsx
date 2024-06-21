import { useQuery } from "@tanstack/react-query";
import ArticleCart from "../../Components/ArticleCart";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import LoadingSpinner from "../../Components/LoadingSpinner";

const AllArticle = () => {
  const axiosCommon=useAxiosCommon()

  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/article`);
      return data;
    },
  });
  
  if (isLoading) return <LoadingSpinner />


  return (
    <div>
      <h2>All Article</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         {
            articles.map(article => <ArticleCart key={article._id} article={article}></ArticleCart>)
         }
      </div>
    </div>
  );
};

export default AllArticle;
