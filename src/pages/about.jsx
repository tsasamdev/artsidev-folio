import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar2.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-300 dark:text-zinc-200 dark:hover:text-teal-300"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Tsiory Arisoa</title>
        <meta
          name="description"
          content="I’m Tsiory Arisoa. I live in Valencia (Spain), where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&#39;m Tsiory Arisoa. I live in Valencia (Spain), where I build some cool stuff.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
               <p>
                 My main focus these days is building scalable and optimized backend solutions for our customers at
                 {" "}
                 <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://momentumgames.io/" target="_blank" rel="noreferrer noopener" aria-label="golang dev (opens in a new tab)">Momentum Games</a>.
                  I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I&#39;m working on personal side projects and playing with
                 {" "}
                 <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://adonisjs.com/" target="_blank" rel="noreferrer noopener" aria-label="adonisjs dev (opens in a new tab)">AdonisJS</a>.
               </p>
              <p>
                When I&#39;m not at the computer, I’m usually studying for my private pilot license, running, reading, hanging out with friends, or playing some video games.
              </p>


            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/tsasamdev" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:t.arisoa@mail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                t.arisoa@mail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
