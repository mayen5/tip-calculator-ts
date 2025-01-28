import { MenuItemT, OrderItemT } from '../types';

export type OrderActions =
    { type: 'add-item', payload: { item: MenuItemT } } |
    { type: 'remove-item', payload: { id: MenuItemT[ 'id' ] } } |
    { type: 'place-order' } |
    { type: 'add-tip', payload: { value: number } }

export type OrderState = {
    order: OrderItemT[],
    tip: number,
}

export const initialState: OrderState = {
    order: [],
    tip: 0,
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
): OrderState => {
    switch (action.type) {
        case 'add-item': {
            const itemExists = state.order.find((orderItem) => orderItem.id === action.payload.item.id)
            let order: OrderItemT[] = []
            if (itemExists) {
                order = state.order.map((orderItem) => {
                    if (orderItem.id === action.payload.item.id) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        }
                    }
                    else {
                        return orderItem
                    }
                })
            }
            else {
                const newItem: OrderItemT = {
                    ...action.payload.item,
                    quantity: 1,
                }
                order = [ ...state.order, newItem ]
            }

            return {
                ...state,
                order,
            }
        }
        case 'remove-item': {
            const order = state.order.filter((orderItem) => orderItem.id !== action.payload.id)
            return {
                ...state,
                order,
            }
        }
        case 'place-order': {
            return {
                ...state,
                order: [],
                tip: 0,
            }
        }
        case 'add-tip': {
            const tip = action.payload.value
            return {
                ...state,
                tip,
            }
        }
        default: {
            return state
        }
    }
}