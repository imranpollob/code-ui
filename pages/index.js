import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'

export const POSTS_PER_PAGE = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const tags = await getAllTags('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, tags, pagination } }
}

export default function Blog({ posts, tags, initialDisplayPosts, pagination }) {
  tags['all'] = posts.length

  return (
    <>
      <PageSeo
        title={`${siteMetadata.title}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}`}
      />
      <ListLayout
        posts={posts}
        tags={tags}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={'all'}
      />
    </>
  )
}
