import Carosel from "./Carosel";
import FAQ from "./FAQ";
import Plans from "./Plans";
import Publishers from "./Publishers";
import Statistics from "./Statistics";


const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Plans></Plans>
            <Publishers></Publishers>
            <Statistics></Statistics>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;