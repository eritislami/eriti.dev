import Link from 'next/link'

import { Container } from '@/components/Container'

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

export function Footer() {
  return (
    <footer className="mt-14">
      <Container>
        <div className="border-t border-zinc-300 pt-6 pb-16 dark:border-zinc-700/40">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            &copy; 2022 Erit Islami. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
