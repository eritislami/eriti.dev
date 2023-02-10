import clsx from 'clsx'

export const Container = ({ className, children }) => (
  <div className={clsx('mx-auto max-w-3xl px-4 lg:px-8', className)}>
    {children}
  </div>
)
