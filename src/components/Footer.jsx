import Link from 'next/link'

import { Container } from '@/components/Container'
import {GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon} from "@/components/SocialIcons";

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

function SocialLink({icon: Icon, ...props}) {
  return (
      <Link className="group -m-1 p-1" {...props}>
        <Icon
            className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"/>
      </Link>
  )
}


export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/about">Experience</NavLink>
                <NavLink href="/projects">Projects</NavLink>
              </div>
              <div className=" flex gap-6">
                <SocialLink
                    href="https://github.com/tsasamdev"
                    aria-label="Follow on GitHub"
                    icon={GitHubIcon}
                />
                <SocialLink
                    href="https://linkedin.com"
                    aria-label="Follow on LinkedIn"
                    icon={LinkedInIcon}
                />
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Tsiory Arisoa. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
