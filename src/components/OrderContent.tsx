import { formatCurrency } from '../helpers'
import { MenuItemT, OrderItemT } from '../types'

type OrderContentProps = {
    order: OrderItemT[],
    removeItem: (id: MenuItemT[ 'id' ]) => void,
}

export const OrderContent = ({ order, removeItem }: OrderContentProps) => {

    return (
        <div>
            <h2 className='font-black text-4xl'>Order</h2>
            <div className='space-y-3 mt-10'>
                {order.length === 0
                    ? <p className='text-center'>Order is empty</p>
                    : (
                        order.map((orderItem) => (
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
                                    onClick={() => removeItem(orderItem.id)}
                                >
                                    X
                                </button>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}
