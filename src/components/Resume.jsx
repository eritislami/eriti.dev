import { BriefcaseIcon } from '@/components/SocialIcons'
import logoEagle from '@/images/logos/eagle.webp'
import logoHoyo from '@/images/logos/hoyotech.svg'
import logoSava from '@/images/logos/sava.png'
import Image from 'next/image'

export function Resume() {
  let resume = [
    {
      company: 'Hoyo Tech',
      title: 'Full-Stack Engineer',
      skills:
        "Laravel · Livewire · Inertia · React · Next.js · TailwindCSS · RESTful API's · TypeScript",
      logo: logoHoyo,
      start: '2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Eurosava',
      title: 'Software Engineer',
      skills: 'JavaScript · PHP · Web Design',
      logo: logoSava,
      start: '2019',
      end: '2020',
    },
    {
      company: 'Eagle IT Solutions',
      title: 'Front-end Engineer',
      skills: 'Laravel · Vue · Angular · Responsive Design · UI/UX Design',
      logo: logoEagle,
      start: '2018',
      end: '2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-300 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full object-cover"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-700 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-500 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
              <dd className="w-full flex-none text-xs text-zinc-500 dark:text-zinc-500">
                {role.skills}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}
