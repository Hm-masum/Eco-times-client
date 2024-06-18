import ArticleCart from "../../Components/ArticleCart";

const AllArticle = () => {
    return (
        <div>
            <h2>All Article</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ArticleCart></ArticleCart>
                <ArticleCart></ArticleCart>
                <ArticleCart></ArticleCart>
            </div>
        </div>
    );
};

export default AllArticle;