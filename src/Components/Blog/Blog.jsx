import PropTypes from 'prop-types';
import { BsFillBookmarksFill } from 'react-icons/fa';

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full  md-8' src={cover} alt={`cover picture of the title ${title}`} />

            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    
                    <button className='ml-2 text-red-600'><BsFillBookmarksFill></BsFillBookmarksFill>
                    </button>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href={hashtags}></a></span>)
                }
            </p>
        </div>
    );
};
// props types error solve//
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;