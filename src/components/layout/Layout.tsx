import * as React from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import AppHeader from '@components/layout/AppHeader'

export interface Props {
  title?: string
  className?: string | Record<string, unknown>
  header?: JSX.Element
}

const Layout: React.FC<Props> = ({
  title = 'Getaboard',
  className,
  header,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <AppHeader>{header || null}</AppHeader>
        <main className={clsx('flex-grow', className)}>{children}</main>
        <footer className="px-3 py-4 text-xs text-center text-gray-600">
          Made with ♥ by <a href="https://www.twitter.com/rash3ye">@rash3ye</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
