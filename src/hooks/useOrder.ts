import { useState } from 'react'
import { MenuItemT, OrderItemT } from '../types/index';

export const useOrder = () => {

    const [ order, setOrder ] = useState<OrderItemT[]>([])
    const [ tip, setTip ] = useState(0)

    const addItem = (item: MenuItemT) => {

        const itemExists = order.find((orderItem) => orderItem.id === item.id)
        if (itemExists) {
            const updatedOrder = order.map((orderItem) => {
                if (orderItem.id === item.id) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                }
                else {
                    return orderItem
                }
            })
            setOrder(updatedOrder)
        }
        else {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([ ...order, newItem ])
        }
    }

    const removeItem = (id: MenuItemT[ 'id' ]) => {
        const updatedOrder = order.filter((orderItem) => orderItem.id !== id)
        setOrder(updatedOrder)
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder,
    }
}
