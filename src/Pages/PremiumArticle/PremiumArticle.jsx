import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ArticleCart from "../../Components/ArticleCart";
import LoadingSpinner from "../../Components/LoadingSpinner";
import useRole from "../../Hooks/useRole";

const PremiumArticle = () => {
  const axiosSecure = useAxiosSecure();
  const [role, ] = useRole()

  const {
    data: articles = [],
    isLoading,
  } = useQuery({
    queryKey: ["premium-articles"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/article`);
      return data;
    },
  });

  const premiumArticle=articles.filter(item=>item.isPremium==='yes')
  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {premiumArticle.map((article) => (
          <ArticleCart key={article._id} article={article} role={role}></ArticleCart>
        ))}
      </div>
    </div>
  );
};

export default PremiumArticle;
