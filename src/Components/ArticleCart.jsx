import { Link } from 'react-router-dom';
import ButtonComp from './ButtonComp';
import { MdWorkspacePremium } from 'react-icons/md';

const ArticleCart = ({article,role}) => {
    const {_id,title,publisher,image,description,isPremium}=article;
    
    return (
        <div className='space-y-2'>
            <div>
                { isPremium==='yes' ?
                <div className='relative'>
                    <img className='h-[215px] w-full' src={image} alt="" />
                    <MdWorkspacePremium className='absolute text-yellow-400 top-2 text-5xl' />
                </div>
                :
                <img className='h-[215px] w-full' src={image} alt="" />
                }
            </div>
            <div className='space-y-2'>
                <h4 className=' font-semibold'>{publisher}</h4>

                <h2 className='text-2xl font-semibold'>{title.slice(0,50)}</h2>

                <p className='text-sm'>{description.slice(0,150)}</p>

                <div>
                    {
                        isPremium==='yes' ?
                        <>
                        {
                            role==='admin' || role==='Premium user' ? <Link  to={`/article/${_id}`}><ButtonComp value={"View Details"}></ButtonComp></Link> :
                            <ButtonComp value={"View Details"}></ButtonComp>

                        }
                        </>
                        :
                        <Link  to={`/article/${_id}`}><ButtonComp value={"View Details"}></ButtonComp></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default ArticleCart;