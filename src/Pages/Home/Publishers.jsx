import LoadingSpinner from "../../Components/LoadingSpinner";
import SectionTitle from "../../Components/SectionTitle";
import useAllPublisher from "../../Hooks/useAllPublisher";

const Publishers = () => {
    const [publishers,isLoading]=useAllPublisher()
    
    if (isLoading) return <LoadingSpinner />


    return (
        <div>
            <SectionTitle title={'Publishers'} body={'Empower Your Voice with Our Publisher Platform. Seamless, Supportive, and Impactful – Your Content, Our Reach'}></SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4">
                {
                    publishers.map(publisher => <div key={publisher.id}>
                        <div>
                          <div className="border p-3 flex items-center justify-center rounded-xl"><img className="w-[200px] h-[200px]" src={publisher.image} alt="" /></div>
                          <h2 className="text-xl md:text-3xl font-semibold text-center">{publisher.publisher}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Publishers;