import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  ArrowUpRightIcon,
  MapPinIcon,
  BriefcaseIcon,
  LinkIcon,
  StarIcon,
} from '@/components/SocialIcons'
import avatarImage from '@/images/avatar.png'
import logoEvobot from '@/images/logos/evobot.png'
import { Resume } from '@/components/Resume'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

const projects = [
  {
    name: 'EvoBot',
    description:
      '🤖 EvoBot is a highly-customizable discord bot built with discord.js & written in TypeScript.',
    link: {
      href: 'https://github.com/eritislami/evobot',
      label: 'github.com',
    },
    logo: logoEvobot,
  },
]

export async function getStaticProps() {
  const res = await fetch(`https://api.github.com/repos/eritislami/evobot`)
  const data = await res.json()

  return {
    props: {
      stars: data.stargazers_count,
    },
  }
}

export default function Home({ stars }) {
  return (
    <>
      <Head>
        <title>Erit Islami – Full-Stack Engineer</title>
        <meta
          name="description"
          content="I love building things for the web, as a Full-Stack Engineer my daily life consists of planning, design and execution of bespoke full-stack solutions for various industries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eriti.dev" />
        <meta property="og:title" content="Erit Islami – Full-Stack Engineer" />
        <meta
          property="og:description"
          content="I love building things for the web, as a Full-Stack Engineer my daily life consists of planning, design and execution of bespoke full-stack solutions for various industries."
        />
        <meta property="og:image" content="https://eriti.dev/og.png" />
      </Head>
      <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
        <Container className="space-y-6">
          <div className="flex items-center space-x-5">
            <Image
              src={avatarImage}
              alt="Erit Islami's Avatar"
              className="h-24 w-24 rounded-full bg-zinc-200 object-cover dark:bg-zinc-800"
              priority
            />
            <div>
              <p className="text-xl dark:text-zinc-50">Erit Islami</p>
              <p className="tracking-tight dark:text-zinc-400">
                Full-Stack Engineer
              </p>
              <p className="text-sm dark:text-zinc-500">
                <a
                  href="https://github.com/eritislami"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  github.com/eritislami
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center space-x-1 rounded-full border border-zinc-600 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-600 dark:text-zinc-400">
              <MapPinIcon />
              <span>Struga, North Macedonia</span>
            </span>
            <span className="relative inline-flex items-center space-x-1 rounded-full border border-zinc-600 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-600 dark:text-zinc-400">
              <a
                href="https://hoyo.tech"
                rel="noreferrer"
                target="_blank"
                className="absolute inset-0"
                aria-label="Hoyo Tech"
              ></a>
              <BriefcaseIcon className="h-4 w-4" />
              <span>Hoyo Tech</span>
            </span>
            <span className="relative inline-flex items-center space-x-1 rounded-full border border-zinc-600 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-600 dark:text-zinc-400">
              <a
                href="https://hoyo.tech/careers"
                rel="noreferrer"
                target="_blank"
                className="absolute inset-0"
                aria-label="Join the team"
              ></a>
              <span>Join the team</span>
              <ArrowUpRightIcon />
            </span>
          </div>
        </Container>
        <Container>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Hey there 👋
          </h1>
          <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
            I love building things for the web, as a Full-Stack Engineer 🛠️ my
            daily life consists of planning, design and execution of bespoke
            full-stack solutions for various industries. My passion is to strive
            to deliver powerful, intelligent and easy to use products using the
            latest tools & technologies.
          </p>
          <div className="mt-4 flex gap-6">
            <SocialLink
              href="https://github.com/eritislami"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/eritislami"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://twitter.com/eritislami"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
          </div>
        </Container>
        <Container>
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Things I ❤️ to build with
              </h1>
              <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
                Wether it&apos;s a REST API or a Full-Stack Backend my bread and
                butter always includes <strong>Laravel</strong>, I love pairing{' '}
                <strong>Laravel</strong> with <strong>React</strong> via{' '}
                <strong>Inertia.js</strong> or using <strong>Next.js</strong>{' '}
                for serious front-end projects. The glue that brings everything
                toghether for me is <strong>Tailwind</strong>, it has become my
                exclusive way of writing CSS ever since I first started using
                it.
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <div className="mx-auto grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2">
            <ul role="list" className="grid h-fit grid-cols-1">
              {projects.map((project) => (
                <Card as="li" key={project.name}>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      src={project.logo}
                      alt={project.name}
                      className="h-8 w-8 rounded-full object-cover"
                      unoptimized
                    />
                  </div>
                  <h2 className="mt-6 flex items-center space-x-3 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link href={project.link.href} target="_blank">
                      {project.name}
                    </Card.Link>
                    <span className="ml-4 flex items-center space-x-0.5 text-xs text-zinc-600 dark:text-zinc-400">
                      <StarIcon />
                      <span className="font-light">
                        {(Math.ceil(stars / 100) * 100).toLocaleString('en-US')}
                      </span>
                    </span>
                  </h2>
                  <Card.Description>{project.description}</Card.Description>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-amber-500 dark:text-zinc-200">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{project.link.label}</span>
                  </p>
                </Card>
              ))}
            </ul>
            <Resume />
          </div>
        </Container>
      </div>
    </>
  )
}
