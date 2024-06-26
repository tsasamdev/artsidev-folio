import Image from 'next/image'
import Head from 'next/head'

import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import logoZeus from '@/images/logos/zeus.svg'
import logoSopra from '@/images/logos/facebook.svg'
import logoMomentum from '@/images/logos/momentum.svg'
import {generateRssFeed} from '@/lib/generateRssFeed'
import {getAllArticles} from '@/lib/getAllArticles'

function MailIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function BriefcaseIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function ArrowDownIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ArrowRightIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
            <path
                  d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z"
                  clipRule="evenodd"/>
        </svg>

    )
}


function Newsletter() {
    return (
        <form
            action="/thank-you"
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <MailIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">Want to hire me?</span>
            </h2>

            <div className="mt-6 flex">
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Want to ask me to realize a job for you?. Don&#39;t hesitate to reach me
                </p>
                <Button type="submit" variant="secondary" className=" group mt-9 ml-3">
                   Hire
                    <ArrowRightIcon
                        className="h-4 w-4 stroke-teal-400 transition group-active:stroke-teal-600 dark:group-hover:stroke-teal-50 dark:group-active:stroke-teal-50"/>
                </Button>
            </div>
        </form>
    )
}

function Resume() {
    let resume = [
        {
            company: 'Momentum Games',
            title: 'Senior Backend engineer',
            logo: logoMomentum,
            start: '2023',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear(),
            },
        },
        {
            company: 'Zeus Smart Visual Data',
            title: 'Backend engineer',
            logo: logoZeus,
            start: '2021',
            end: '2023',
        },
        {
            company: 'Sopra Steria',
            title: 'Backend engineer',
            logo: logoSopra,
            start: '2018',
            end: '2021',
        }
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div
                            className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image src={role.logo} alt="" className="h-7 w-7" unoptimized/>
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label={`${role.start.label ?? role.start} until ${
                                    role.end.label ?? role.end
                                }`}
                            >
                                <time dateTime={role.start.dateTime ?? role.start}>
                                    {role.start.label ?? role.start}
                                </time>
                                {' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Button href="/resume.pdf" variant="secondary" className="group mt-6 w-full">
                Download CV
                <ArrowDownIcon
                    className="h-4 w-4 stroke-teal-400 transition group-active:stroke-teal-600 dark:group-hover:stroke-teal-50 dark:group-active:stroke-teal-50"/>
            </Button>
        </div>
    )
}

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Tsiory Arisoa - Software engineer
                </title>
                <meta
                    name="description"
                    content="I’m Tsiory, a software engineer  based in Valencia (Spain). I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
                />
            </Head>
            <Container className="mt-9">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Senior Software engineer.
                    </h1>
                    <p className="mt-4 text-base leading-normal text-zinc-600 dark:text-zinc-400">
                        I’m Tsiory, a software engineer based in Valencia (Spain)
                    </p>
                    <p className=" text-base leading-normal text-zinc-600 dark:text-zinc-400">
                        I build pixel-perfect, engaging, and accessible digital experiences.
                    </p>
                </div>
                <Container className="mt-24 md:mt-28">
                    <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                        <div className="flex flex-col gap-16">
                            <Resume/>
                        </div>
                        <div className="space-y-10 lg:pl-16 xl:pl-24">
                            <Newsletter/>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    if (process.env.NODE_ENV === 'production') {
        await generateRssFeed()
    }

    return {
        props: {
            articles: (await getAllArticles())
                .slice(0, 4)
                .map(({component, ...meta}) => meta),
        },
    }
}


