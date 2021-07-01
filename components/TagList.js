import Link from 'next/link'
import Tag from '@/components/Tag'
import kebabCase from '@/lib/utils/kebabCase'

const TagList = ({ tags, title }) => {
  let status = 'No tags found.'
  let tagList = null

  if (tags) {
    status = null
    let sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
    tagList = sortedTags.map((t) => {
      return (
        <div key={t} className="mt-2 mb-2 mr-1">
          <Tag
            text={t}
            selected={title && t.toLowerCase() === title.toLowerCase()}
            count={tags[t]}
          />
        </div>
      )
    })
  }

  return (
    <div className="flex flex-wrap">
      {status && <div className="text-center">{status}</div>}
      {tagList}
    </div>
  )
}

export default TagList
