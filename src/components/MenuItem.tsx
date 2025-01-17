import { MenuItemT } from '../types'

type MenuItemProps = {
    item: MenuItemT,
    addItem: (item: MenuItemT) => void,
}

export const MenuItem = ({ item, addItem }: MenuItemProps) => {
    return (
        <>
            <button
                className='border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-lg shadow-md'
                onClick={() => addItem(item)}
            >
                <p>{item.name}</p>
                <p className='font-black'>${item.price}</p>
            </button>
        </>
    )
}
