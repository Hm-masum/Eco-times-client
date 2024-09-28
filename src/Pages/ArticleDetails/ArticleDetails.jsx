import { useParams } from "react-router-dom";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { Avatar } from "flowbite-react";


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
    <div className="space-y-3 mb-10">
      <figure className="space-y-2">
        <img className="h-[215px] md:h-[400px] w-full" src={article?.image} alt="" />
        <div className="lg:flex justify-between font-semibold">
          <p>Publisher : {article?.publisher}</p>
          <p className="flex items-center gap-2">Tags : {article?.tags?.map(tag => <div className="bg-purple-500 text-white rounded-xl p-2 text-center" key={article?._id}>#{tag}</div>)}</p>
        </div>
      </figure>
      <h4>Posted Date : {article?.postedDate}</h4>
      <h2 className="text-xl md:text-4xl font-semibold">{article?.title}</h2>
      <p>{article?.description}</p>

      <div className="border-t-2 border-purple-300 pt-3 flex gap-3 items-center">
          <img className="w-12 h-12 border-2 border-purple-500 p-1 rounded-full" src={article?.authorPhoto} />
          <div>
            <h4>Author Name : {article?.authorName}</h4>
            <h4>Author Email : {article?.authorEmail}</h4>
          </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
