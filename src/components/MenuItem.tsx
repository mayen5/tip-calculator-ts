import { Dispatch } from 'react'
import { MenuItemT } from '../types'
import { OrderActions } from '../reducers/order-reducer'

type MenuItemProps = {
    item: MenuItemT,
    dispatch: Dispatch<OrderActions>,
}

export const MenuItem = ({ item, dispatch }: MenuItemProps) => {
    return (
        <>
            <button
                className='border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-lg shadow-md'
                onClick={() => dispatch({ type: 'add-item', payload: { item } })}
            >
                <p>{item.name}</p>
                <p className='font-black'>${item.price}</p>
            </button>
        </>
    )
}
