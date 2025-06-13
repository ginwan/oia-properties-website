import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowRightIcon,
  Bars3Icon,
  HeartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Logo from '../assets/svg/logo.svg'
import Button from './ui/Button'
import { BuildingIcon, CaretDownIcon } from '@phosphor-icons/react'

const area = [
  { name: 'Abu Dhabi', description: 'Visit our headquarters', href: '#' },
  { name: 'Dubai', description: 'Visit our Dubai office', href: '#' },
]
const projects = [
  { name: 'Apartments', href: '#', icon: BuildingIcon },
  { name: 'Villas', href: '#', icon: BuildingIcon },
  { name: 'Townhouses', href: '#', icon: BuildingIcon },
  { name: 'Duplex', href: '#', icon: BuildingIcon },
  { name: 'Sky Villas', href: '#', icon: BuildingIcon },

]
const developers = [
  { name: 'Abu Dhabi', description: 'Visit our headquarters', href: '#' },
  { name: 'Dubai', description: 'Visit our Dubai office', href: '#' },
]
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <nav aria-label="Global" className="mx-auto flex max-w-[1450px] items-center justify-between p-4 lg:px-8">
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="logo"
              src={Logo}
              className="h-9 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:gap-x-12 gap-x-2 lg:hidden">
          <div className="flex items-center justify-center border-b border-gray-900/5 bg-gray-100 p-1.5 rounded-md">
            <HeartIcon aria-hidden="true" className="size-6 text-yellow-500" />
          </div>
          <div className="flex">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm/6 font-semibold text-yellow-500">
            RENT/BUY
          </a>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-400 focus:outline-none">
              AREA
              <CaretDownIcon size={14} weight="fill" aria-hidden="true" className='text-gray-700' />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {area.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-700 text-lg">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-700 focus:outline-none">
              PROJECTS
              <CaretDownIcon size={14} weight="fill" aria-hidden="true" className='text-gray-700' />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {projects.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-4 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-light text-gray-700">
                        {item.name}
                        {/* <span className="absolute inset-0" /> */}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-400 focus:outline-none">
              DEVELOPERS
              <CaretDownIcon size={14} weight="fill" aria-hidden="true" className='text-gray-700' />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {developers.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-700 text-lg">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm/6 font-semibold text-gray-700">
            LIST YOUR PROPERTY
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex  gap-3">
          <Button text="Free consultation" icon={<ArrowRightIcon aria-hidden="true" className="size-3.5" />} className={"text-black py-1.5 px-4 text-sm"} />
          <div className="flex items-center justify-center border-b border-gray-900/5 bg-gray-100 p-1.5 rounded-md">
            <HeartIcon aria-hidden="true" className="size-6 text-yellow-500" />
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on mobile menu state. */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="logo"
                src={Logo}
                className="h-9 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#" className="text-sm/6 font-semibold text-yellow-500">
                  RENT/BUY
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-400 hover:bg-gray-50">
                    AREA
                    <CaretDownIcon size={14} weight="fill" aria-hidden="true" className='text-gray-700' />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {area.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-700 hover:bg-gray-50">
                    PROJECTS
                    <CaretDownIcon size={14} weight="fill" aria-hidden="true" className='text-gray-700' />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {projects.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-400 hover:bg-gray-50">
                    DEVELOPERS
                    <CaretDownIcon size={14} weight="fill" aria-hidden="true" className='text-gray-700' />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {developers.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <a href="#" className="text-sm/6 font-semibold text-gray-700">
                  LIST YOUR PROPERTY
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
