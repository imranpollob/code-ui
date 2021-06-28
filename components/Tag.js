import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text, selected }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a
        className={
          'mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400 ' +
          (selected
            ? 'p-1 border-2 border-solid border-blue-500 hover:border-blue-600 dark:hover:border-blue-400'
            : '')
        }
      >
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
