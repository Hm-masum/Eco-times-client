import { Link } from 'react-router-dom';
import ButtonComp from './ButtonComp';
import img from '../assets/original-88886f9f92f1045ce3e5a586bcafe0b9.png'

const ArticleCart = () => {
    return (
        <div className='space-y-2'>
            <div>
                <img className='h-[215px] w-full' src={img} alt="" />
            </div>
            <div className='space-y-2'>
                <h4 className=' font-semibold'>Gardian publication</h4>

                <h2 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, impedit. Maxime, suscipit. Vero quibusdam dignissimos deserunt qui officia magnam pariatur?</p>

                <div><Link to={'/article/:id'}><ButtonComp value={"View Details"}></ButtonComp></Link></div>
            </div>
        </div>
    );
};

export default ArticleCart;