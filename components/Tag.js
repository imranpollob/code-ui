import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text, selected, count }) => {
  return (
    <Link href={text === 'all' ? '/' : `/tags/${kebabCase(text)}`}>
      <a
        className={
          'py-1 px-2 rounded-full mr-3 text-sm font-medium uppercase text-gray-900 dark:text-gray-300 hover:text-white dark:hover:text-gray-900 hover:bg-gray-900 dark:hover:bg-gray-300 ' +
          (selected ? 'bg-gray-900 dark:bg-gray-300 text-white dark:text-gray-900' : '')
        }
      >
        {text.split(' ').join('-')}
        {selected && count && (
          <span className="ml-2 px-1 ring-1 rounded h-24 w-24 bg-blue-500 text-white">{count}</span>
        )}
      </a>
    </Link>
  )
}

export default Tag
