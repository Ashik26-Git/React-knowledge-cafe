import PropTypes from 'prop-types';

const Blog = ({ blog, handleBookmarks}) => {
    const { title, cover, author_img, author, posted_date, hashtags,reading_time } = blog;
    return (
        <div className='container mx-auto'>
            <div className='mt-8'>
                <img className=' h-[450px] mb-8' src={cover} alt="" />
                <div className='flex justify-between'>
                    <div className='flex gap-6'>
                        <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="" />
                        <div className='pt-1'>
                            <h3 className='text-[#111111] text-2xl font-bold'>{author}</h3>
                            <p className='text-[#11111199] text-base font-semibold'>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-2 pt-4'>
                        <p className='text-[#11111199] text-xl font-medium'><span>{reading_time}</span> min read</p>
                       <svg onClick={() => handleBookmarks(blog)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#11111199] font-medium">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </div>
                </div>
                <div className='space-y-4'>
                    <h2 className="text-4xl pt-4">{title}</h2>
                    <p className='text-[#11111199] text-xl font-medium'>{hashtags}</p>
                    <p className='text-[#6047EC] text-xl font-semibold underline'>mark as read</p>

                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func
}

export default Blog;