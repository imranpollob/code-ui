import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/main/data/blog/${fileName}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ children, frontMatter, next, prev }) {
  const { slug, fileName, date, title, tags, link } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetadata.siteUrl}/${slug}`} {...frontMatter} />
      <article>
        <div className="">
          <header className="pt-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 dark:divide-gray-700"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12">
                  <li className="flex items-center space-x-2">
                    <Image
                      src={siteMetadata.image}
                      width="38px"
                      height="38px"
                      alt="imran pollob"
                      className="w-10 h-10 rounded-full"
                    />
                    <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900 dark:text-gray-100">{siteMetadata.author}</dd>
                      {typeof siteMetadata.website === 'string' && (
                        <>
                          <dt className="sr-only">Website</dt>
                          <dd>
                            <Link
                              href={siteMetadata.website}
                              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                              target="_blank"
                            >
                              @pollmix
                            </Link>
                          </dd>
                        </>
                      )}
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            {tags && (
              <div className="py-4">
                <div className="flex flex-wrap justify-center">
                  {tags.map((tag) => (
                    <Tag key={tag} text={`#${tag}`} />
                  ))}
                </div>
              </div>
            )}
            <div className="xl:m-auto xl:max-w-3xl">
              {link && (
                <div className="pt-10 uppercase font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                  <Link
                    href={link}
                    className="p-2 border-2 border-solid border-blue-500 hover:border-blue-600 dark:hover:border-blue-400"
                  >
                    Problem Link
                  </Link>
                </div>
              )}

              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
              <div className="flex justify-center border-t border-gray-200 dark:border-gray-700 pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={editUrl(fileName)}>{'📝 Edit this post'}</Link>
              </div>
            </div>
            <footer className="xl:m-auto xl:max-w-3xl">
              <div className="py-4 text-sm font-medium leading-5 divide-gray-200 dark:divide-gray-700">
                {(next || prev) && (
                  <div className="flex justify-between py-4 space-x-2">
                    {prev && (
                      <div>
                        <div className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Previous Article
                        </div>
                        <h2 className="pt-2 text-base xl:text-lg text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                          <Link href={`/${prev.slug}`}>{prev.title}</Link>
                        </h2>
                      </div>
                    )}
                    {next && (
                      <div>
                        <div className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Next Article
                        </div>
                        <h2 className="pt-2 text-base xl:text-lg text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                          <Link href={`/${next.slug}`}>{next.title}</Link>
                        </h2>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-8 flex justify-center">
                <Link
                  href="/"
                  className="text-gray-900 dark:text-gray-300 border p-2 border-gray-900 dark:border-gray-300"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
