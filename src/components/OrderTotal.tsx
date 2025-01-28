import { Dispatch, useCallback, useMemo } from 'react'
import { OrderItemT } from '../types'
import { formatCurrency } from '../helpers'
import { OrderActions } from '../reducers/order-reducer'

type OrderTotalProps = {
    order: OrderItemT[],
    tip: number,
    dispatch: Dispatch<OrderActions>,
}

export const OrderTotal = ({ order, tip, dispatch }: OrderTotalProps) => {

    const subtotal = useMemo(() => order.reduce((total, orderItem) => {
        return total + (orderItem.quantity * orderItem.price)
    }, 0), [ order ])

    const tipAmount = useMemo(() => subtotal * tip, [ subtotal, tip ])

    const total = useCallback(() => subtotal + tipAmount, [ subtotal, tipAmount ])

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
                    <span className='font-bold'>{formatCurrency(tipAmount)}</span>
                </p>

                <p>
                    Total: {' '}
                    <span className='font-bold'>{formatCurrency(total())}</span>
                </p>
            </div>

            <button
                className='w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-20'
                disabled={order.length === 0}
                onClick={() => dispatch({ type: 'place-order' })}
            >
                Save order
            </button>
        </>
    )
}
