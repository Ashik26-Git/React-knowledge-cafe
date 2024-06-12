import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className='bg-white rounded-md py-4 px-8 my-4 mx-2'>
            <h3 className='text-2xl text-center  '>{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object
}
export default Bookmark;