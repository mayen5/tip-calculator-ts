import { useMemo } from 'react'
import { OrderItemT } from '../types'
import { formatCurrency } from '../helpers'

type OrderTotalProps = {
    order: OrderItemT[],
}

export const OrderTotal = ({ order }: OrderTotalProps) => {

    const subtotal = useMemo(() => order.reduce((total, orderItem) => {
        return total + (orderItem.quantity * orderItem.price)
    }, 0), [ order ])

    const tip = 0

    const total = subtotal + tip

    return (
        <>
            <div className='space-y-3 mt-10'>
                <h2 className='font-black text-2xl'>Total and tip:</h2>
                <p>
                    Subtotal: {' '}
                    <span className='font-bold'>{formatCurrency(subtotal)}</span>
                </p>

                <p>
                    Tip: {' '}
                    <span className='font-bold'>${formatCurrency(tip)}</span>
                </p>

                <p>
                    Total: {' '}
                    <span className='font-bold'>${formatCurrency(total)}</span>
                </p>
            </div>
        </>
    )
}
