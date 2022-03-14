import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { user } from '../data'
const navigation = [
  { name: 'Professional Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex-shrink-0 flex items-center">
                  <a
                    className='text-2xl text-white font-bold'
                    href='#about'
                    onClick={(ev) => { ev.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }}
                  >Utsav Jain</a>
                  <div className="divide-x-5 text-white"></div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(ev) => { ev.preventDefault(); document.getElementById(item.href.slice(1)).scrollIntoView({ behavior: 'smooth' }); }}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                    <a
                      key='blogs'
                      href='https://utsavvjain.hashnode.dev'
                      className={classNames(
                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                    >
                      Blogs
                    </a>
                  </div>
                </div>
              </div>
              <a
                href={user.resume}
                className={classNames(
                  'text-white bg-gray-700 hover:text-white ml-auto',
                  'px-3 py-2 rounded-md text-sm font-medium'
                )}
              >
                Resume
              </a>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div
                  onClick={(ev) => { ev.preventDefault(); document.getElementById(item.href.slice(1)).scrollIntoView({ behavior: 'smooth' }); }}
                >
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >

                    {item.name}
                  </Disclosure.Button>
                </div>
              ))}
              <Disclosure.Button
                key='blogs'
                as="a"
                href='https://utsavvjain.hashnode.dev'
                className={classNames(
                  'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={undefined}
              >
                Blogs
              </Disclosure.Button>

            </div>
          </Disclosure.Panel>
        </>
      )}

    </Disclosure>
  )
}
