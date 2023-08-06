import Link from "next/link";
import { useRouter } from "next/router";

const MobileCategory = ({ postCategories }) => {
    const { query } = useRouter()

    return (<div className='flex md:hidden gap-x-4 overflow-auto pb-5'>
        <Link href={`/blogs`} legacyBehavior>
            <a className={`block border-gray-500 bg-white rounded-3xl px-3 py-1 text-sm text-gray-500 whitespace-nowrap ${!query.categorySlug ? "border-purple-700 bg-purple-100 text-purple-700 border-2" : ""}`}>همه مقالات</a>
        </Link>
        {postCategories.map((category) => {
            return <Link key={category._id} href={`/blogs/${category.englishTitle}`} legacyBehavior>
                <a className={`block border-gray-500 bg-white rounded-3xl px-3 py-1 text-sm text-gray-500 whitespace-nowrap ${query.categorySlug === category.englishTitle ? "border-purple-700 bg-purple-100 text-purple-700 border-2" : ""}`}>{category.title}</a>
            </Link>
        })}
    </div>);
}

export default MobileCategory;