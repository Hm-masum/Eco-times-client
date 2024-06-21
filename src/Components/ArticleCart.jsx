import { Link } from 'react-router-dom';
import ButtonComp from './ButtonComp';

const ArticleCart = ({article}) => {
    const {_id,title,publisher,image,description}=article;
    return (
        <div className='space-y-2'>
            <div>
                <img className='h-[215px] w-full' src={image} alt="" />
            </div>
            <div className='space-y-2'>
                <h4 className=' font-semibold'>{publisher}</h4>

                <h2 className='text-2xl font-semibold'>{title.slice(0,50)}</h2>

                <p className='text-sm'>{description.slice(0,150)}</p>

                <div><Link to={`/article/${_id}`}><ButtonComp value={"View Details"}></ButtonComp></Link></div>
            </div>
        </div>
    );
};

export default ArticleCart;