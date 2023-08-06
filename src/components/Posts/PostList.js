import { ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import PostInteraction from './PostInteraction'

const PostList = ({ blogsData }) => {
    return blogsData.map(((blog, index) => {
        return (
            <div key={index} className='col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2 max-h-[350px] flex flex-col'>
                {/* cover image */}
                <div className='aspect-w-16 aspect-h-9'>
                    <Link href={`/posts/${blog.hashId}/${blog.slug}`} legacyBehavior>
                        <a>
                            <img src={blog.coverImage} alt='' className='rounded-2xl w-full h-full object-center object-cover' />
                        </a>
                    </Link>
                </div>
                {/* blog content */}
                <div className='bg-gray-50 p-2 rounded-2xl mt-5 flex flex-col w-full justify-between flex-1'>
                    <Link href={`/posts/${blog.hashId}/${blog.slug}`} legacyBehavior>
                        <a>
                            <h2 className='mb-4 font-bold'>{blog.title}</h2>
                        </a>
                    </Link>
                    {/* blog data */}
                    <div>
                        {/* blog author-category */}
                        <div className='flex items-center justify-between mb-4'>
                            <div className='flex items-center'>
                                <img src='/images/saheb.jpg' className='w-6 h-6 rounded-full ring-2 ml-2 ring-white object-cover' alt='next.js' />
                                <span className='text-sm'>امیر یزدانی</span>
                            </div>
                            <Link href={`/blogs/${blog.category.englishTitle}`} legacyBehavior>
                                <a>
                                    <span className='text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:text-blue-100 hover:bg-blue-600 transition-all duration-300 cursor-pointer'>{blog.category.title}</span>
                                </a>
                            </Link>
                        </div>
                        {/* blog interaction */}
                        <div className='flex items-center justify-between'>
                            <PostInteraction post={blog} isSmall />
                            <div className='flex text-gray-400 items-center text-[10px] font-bold'>
                                <ClockIcon className='w-4 h-4 stroke-gray-400 ml-1' />
                                <span className='ml-1'>زمان مطالعه : </span>
                                <span className='ml-1 leading-3'>{blog.readingTime}</span>
                                <span>دقیقه</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }))
}

export default PostList