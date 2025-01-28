import { Dispatch } from 'react'
import { formatCurrency } from '../helpers'
import { OrderActions } from '../reducers/order-reducer'
import { OrderItemT } from '../types'

type OrderContentProps = {
    order: OrderItemT[],
    dispatch: Dispatch<OrderActions>,
}

export const OrderContent = ({ order, dispatch }: OrderContentProps) => {

    return (
        <div>
            <h2 className='font-black text-4xl'>Order</h2>
            <div className='space-y-3 mt-10'>
                {order.map((orderItem) => (
                    <div
                        key={orderItem.id}
                        className='flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b'
                    >
                        <div>
                            <p className='text-lg'>
                                {orderItem.name} - {formatCurrency(orderItem.price)}
                            </p>
                            <p className='font-black'>
                                Cantidad: {orderItem.quantity} - {formatCurrency(orderItem.price * orderItem.quantity)}
                            </p>
                        </div>
                        <button
                            className='bg-red-600 h-8 w-8 text-white font-black rounded-full'
                            onClick={() => dispatch({ type: 'remove-item', payload: { id: orderItem.id } })}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
