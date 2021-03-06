import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import ListLayout from '@/layouts/ListLayout'
import { POSTS_PER_PAGE } from '../index'

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter('blog')
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context
  const posts = await getAllFilesFrontMatter('blog')
  const tags = await getAllTags('blog')
  const pageNumber = parseInt(page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      posts,
      tags,
      initialDisplayPosts,
      pagination,
    },
  }
}

export default function PostPage({ posts, tags, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/${pagination.currentPage}`}
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
