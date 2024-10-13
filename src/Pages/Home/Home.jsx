import { useEffect, useState } from "react";
import Carosel from "./Carosel";
import FAQ from "./FAQ";
import Plans from "./Plans";
import Publishers from "./Publishers";
import Statistics from "./Statistics";
import NotificationModal from "../../Components/NotificationModal";
import useRole from "../../Hooks/useRole";

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [role, ]= useRole();

    useEffect(()=>{
        const timer =setTimeout(()=>{
            setShowModal(true)
        },5000);

        return ()=> clearTimeout(timer)
    },[])
    
    let showNotification = 0;
    if(role === 'admin' || role ==='Premium user'){
        showNotification = 1;
    }


    return (
        <div>
            <Carosel></Carosel>
            <Plans></Plans>
            <Publishers></Publishers>
            <Statistics></Statistics>
            <FAQ></FAQ>
            {
                showNotification == '0' && <NotificationModal showModal={showModal} onClose={() => setShowModal(false)}></NotificationModal>
            }
        </div>
    );
};

export default Home;