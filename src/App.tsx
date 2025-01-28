import { useReducer } from 'react';
import { MenuItem } from './components/MenuItem'
import { OrderContent } from './components/OrderContent';
import { OrderTotal } from './components/OrderTotal';
import { TipPercentageForm } from './components/TipPercentageForm';
import { menuItems } from './data/db'
// import { useOrder } from './hooks/useOrder'
import { initialState, orderReducer } from './reducers/order-reducer';


function App() {

  // const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();
  const [ state, dispatch ] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>Tip and order Calculator</h1>
      </header>

      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        <div className='p-5'>
          <h2 className='text-4xl font-black'>Menu</h2>
          <div className='space-y-3 mt-10'>
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>
        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
          {state.order.length > 0 ? (
            <>
              <OrderContent
                order={state.order}
                dispatch={dispatch}
              />
              <TipPercentageForm
                dispatch={dispatch}
                tip={state.tip}
              />
              <OrderTotal
                order={state.order}
                dispatch={dispatch}
                tip={state.tip}
              />
            </>
          ) : (
            <p className='text-center'>Order is empty</p>
          )}

        </div>
      </main>
    </>
  )
}

export default App
