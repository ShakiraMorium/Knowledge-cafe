import PropTypes from 'prop_types';
import Bookmark from "src\Components\Bookmark\Bookmark";

const Bookmark = ({bookmarkes, readingTime}) =>{
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4'>

            <div>
                <h3 className='text-2xl'>Reading Time:{readingTime}</h3>
            </div>
            <h2 className='text-3xl'>Bookmarked blogs:{bookmarkes.length}</h2>
            {
                bookmarkes.map(bookmark=><Bookmark 
                    key={bookmark.id}
                    bookmark={bookmark}
                   readingTime={readingTime}
                ></Bookmark>)
            }
        </div>
    )
}



Bookmarkes.propTypes = {
    bookmarks: PropTypes.array,
   readingTime: PropTypes.number,
}
export default Bookmarkes