import * as React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Dropdown from '@components/Dropdown'
import routes from '@utils/routes'
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiOutlineFontColors } from 'react-icons/ai'
import { IoLogoBitbucket } from 'react-icons/io'
import { MdFeaturedPlayList } from 'react-icons/md'
import Button from '@components/Button'

const ThemeSwitch = dynamic(() => import('@components/layout/ThemeSwitch'), {
  ssr: false,
})

export interface Props {
  className?: string | Record<string, unknown>
}

const AppHeader: React.FC<Props> = ({ className, children }) => {
  return (
    <header
      className={clsx(
        'bg-light-nav-color dark:bg-nav-color py-2 h-20 flex items-center sticky top-0 px-20',
        className
      )}
    >
      <div className="flex items-center mr-auto">
        <Link {...routes.INDEX}>
          <>
            <span
              className="box-content w-12 h-12 mr-4 dark:bg-nav-color bg-light-nav-color"
              style={{
                // backgroundImage: `url('/assets/Getaboard_logo.svg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'exclusion',
              }}
            >
              <IoLogoBitbucket />
            </span>

            <a
              title="home"
              className="flex-grow text-xl font-black text-black dark:text-white dark:hover:text-black"
            >
              Company
            </a>
          </>
        </Link>
      </div>
      {children || null}
      <div className="flex items-center">
        <p className="z-10 flex-grow -mr-8 text-xl font-black text-black dark:text-white dark:hover:text-black">
          Sample Text
        </p>
        <span
          className="box-content w-20 h-20 mr-4 transform scale-75 opacity-75 dark:opacity-100 dark:bg-nav-color bg-light-nav-color"
          style={{
            backgroundImage: `url('/assets/3-hex.svg')`,
          }}
        ></span>
      </div>
      <div className="-mr-16">
        <Dropdown buttonLabel={<FiMoreHorizontal />}>
          <ul className="w-40 py-2 space-y-4 text-sm">
            <li>
              <Link {...routes.COMPONENTS}>
                <a className="text-primary hover:underline" title="components">
                  <MdFeaturedPlayList className="inline mr-2" />
                  Components
                </a>
              </Link>
            </li>
            <li>
              <Link {...routes.TYPOGRAPHY}>
                <a className="text-primary hover:underline" title="Typography">
                  <AiOutlineFontColors className="inline mr-2" />
                  Typography
                </a>
              </Link>
            </li>
            <li>
              <hr className="dark:border-gray-700" />
            </li>
            <li className="flex items-center justify-between">
              <span className="mr-auto text-gray-600">Theme</span>
              <ThemeSwitch />
            </li>
            <li className="flex items-center justify-between w-full">
              <Button className="m-auto bg-gray-600 dark:text-white">
                Log out
              </Button>
            </li>
          </ul>
        </Dropdown>
      </div>
    </header>
  )
}

export default AppHeader
