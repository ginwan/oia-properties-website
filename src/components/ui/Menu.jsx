import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CaretDownIcon } from '@phosphor-icons/react'

const DropMenu = ({ title, items, value, onChange, className = "" }) => {
    return (
        <Menu as="div" className={`relative inline-block text-left ${className}`}>
            <div>
                <MenuButton className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-600 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:outline-none">
                    {value || title}
                    <CaretDownIcon size={14} weight="fill" aria-hidden="true" className='text-gray-800' />
                </MenuButton>
            </div>

            <MenuItems className="absolute right-0 z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1">
                    {items.map((item) => (
                        <MenuItem key={item}>
                            {({ active }) => (
                                <button
                                    type="button"
                                    onClick={() => onChange(item)}
                                    className={`block w-full text-left px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                        }`}
                                >
                                    {item}
                                </button>
                            )}
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    )
}

export default DropMenu
