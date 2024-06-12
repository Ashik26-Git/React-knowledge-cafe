import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 mt-8">
            <div className="bg-[#6047EC1A] rounded-md">
                <h1 className=" text-[#6047EC] text-2xl text-center font-bold px-12 py-5">Spent time on read : 177 min</h1>
            </div>
            <div className="mt-8 bg-[#6047EC1A] rounded-md">
                <h3 className="text-[#111111] text-2xl text-center font-bold py-7 pl-7">Bookmarked Blogs : {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array
}
export default Bookmarks;