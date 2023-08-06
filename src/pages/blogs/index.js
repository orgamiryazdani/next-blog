import PostList from "@/components/Posts/PostList"
import MobileCategory from '@/components/Posts/MobileCategory'
import DesktopCategory from '@/components/Posts/DesktopCategory'
import SortBar from '@/components/Posts/SortBar'
import Layout from "../../containers/Layout"
import http from "@/services/httpService"
import queryString from "query-string"
import PaginationComponent from "@/common/Pagination"

export default function BlogPage({ blogsData, postCategories }) {
  return (
    <Layout>
      <div className='container mx-auto lg:max-w-screen-xl px-4 md:px-0'>
        <MobileCategory postCategories={postCategories} />
        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen">
          <div className="hidden md:block md:row-span-2 md:col-span-3">
            <DesktopCategory postCategories={postCategories} />
          </div>
          <div className="hidden md:block md:col-span-9">
            <SortBar />
          </div>
          <div className="grid grid-cols-6 gap-8 md:col-span-9">
            <PostList blogsData={blogsData.docs} />
            <PaginationComponent page={blogsData.page} totalPages={blogsData.totalPages} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req, query }) {
  console.log(query);
  const { data: result } = await http.get(`/posts?${queryString.stringify(query)}`, {
    headers: {
      Cookie: req.headers.cookie || '',
    },
  })
  const { data } = result
  const { data: postCategories } = await http.get("http://localhost:5000/api/post-category")
  return {
    props: {
      blogsData: data,
      postCategories: postCategories.data
    }
  }
}