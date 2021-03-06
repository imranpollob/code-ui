import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

const root = process.cwd()

export async function getStaticPaths() {
  const tags = await getAllTags('blog')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const tags = await getAllTags('blog')
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )

  return { props: { posts: filteredPosts, tags, tag: params.tag, total: allPosts.length } }
}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1).toLowerCase()
}

export default function Tag({ posts, tags, tag, total }) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  tags['all'] = total

  return (
    <>
      <PageSeo
        title={`${capitalize(tag)} solutions`}
        description={`${siteMetadata.description}`}
        url={`${siteMetadata.siteUrl}/tags/${tag}`}
      />
      <ListLayout posts={posts} tags={tags} title={title} total={total} />
    </>
  )
}
