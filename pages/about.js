import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`${siteMetadata.author}`}
        description={`${siteMetadata.author} - Fullstack software engineer with 4+ years of experience.`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={siteMetadata.image}
              alt="imran pollob"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Software Engineer</div>
            <div className="text-gray-500 dark:text-gray-400">Cefalo</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Hello There!{' '}
              <span role="img" aria-label="Waving Hand">
                👋
              </span>
            </p>
            <p>
              I am Imran Pollob from Bangladesh. I have completed my Bachelor’s and Masters’s
              degrees in Information Technology from Jahangirnagar University, which is one of the
              top public universities in my country. Currently, I am working as a Fullstack Software
              Engineer for more than 4 years. At my current workspace, my job responsibility is to
              gather renewable energy data from various sources, preprocess, classify and store it
              on the cloud for further data analysis to predict future energy data.
            </p>
            <p>
              I always wondered how the prediction works almost perfectly and from curiosity, I
              started learning about Machine Learning specifically Deep Learning and that decision
              changed my career entirely. Currently, learning and learning to make myself competent
              for the ML field. Oh snap! it has no learning boundary{' '}
              <span role="img" aria-label="Upside-Down Face">
                🙃
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
