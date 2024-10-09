import formatCurrency from "../helpers"
import { OrderItem } from "../types"
import { useCallback, useMemo } from "react"

type OrderTotalProps = {
  order: OrderItem[]
  tip: number
  placeOrder: () => void
}

const OrderTotals = ({order, tip, placeOrder} : OrderTotalProps) => {
  /* const subtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order])
  const tipAmount = useMemo(()=> subtotalAmount * tip , [tip, order])
  const totaltoPay = useMemo(()=> tipAmount + subtotalAmount, [tip, order]) */
  const subtotalAmount = useCallback(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order])
  const tipAmount = useCallback(()=> subtotalAmount() * tip , [tip, order])
  const totaltoPay = useCallback(()=> tipAmount() + subtotalAmount(), [tip, order])

  return (
   <>
    <div className="space-y-3">
      <h2 className="font-black text-2xl">Totals and tips</h2>
      <p>Subtotal to pay: {''}
        <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
      </p>
      <p>Tips: {''}
        <span className="font-bold">{formatCurrency(tipAmount())}</span>
      </p>
      <p>Total to pay: {''}
        <span className="font-bold">{formatCurrency(totaltoPay())}</span>
      </p>
    </div>
    <button 
      className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
      disabled={totaltoPay()===0}
      onClick={()=> placeOrder()}
    >
      Kept Order
    </button> 
   </> 
  )
}

export default OrderTotals