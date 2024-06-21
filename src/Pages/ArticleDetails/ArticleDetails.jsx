import { useParams } from "react-router-dom";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/LoadingSpinner";


const ArticleDetails = () => {
  const { id } = useParams()
  const axiosCommon = useAxiosCommon()

  const { data: article = {}, isLoading } = useQuery({
    queryKey: ['article', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/article/${id}`)
      return data
    },
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="space-y-4 mb-10">
      <h2 className="text-xl md:text-4xl font-semibold">{article.title}</h2>
      <div>
        <img className="h-[215px] md:h-[350px] w-full" src={article.image} alt="" />
      </div>
      <div>
        <h4 className=" font-semibold">{article.publisher}</h4>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
