import Link from 'next/link'
import Tag from '@/components/Tag'
import kebabCase from '@/lib/utils/kebabCase'

const TagList = ({ tags, tag }) => {
  const sortedTags = tags && Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <div className="flex flex-wrap max-w-lg">
      {tags && Object.keys(tags).length === 0 && 'No tags found.'}
      {tags &&
        sortedTags.map((t) => {
          return (
            <div key={t} className="mt-2 mb-2 mr-5">
              <Tag text={t} selected={tag && t.toLowerCase() === tag.toLowerCase()} />
              <Link
                href={`/tags/${kebabCase(t)}`}
                className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
              >
                {` (${tags[t]})`}
              </Link>
            </div>
          )
        })}
    </div>
  )
}

export default TagList
