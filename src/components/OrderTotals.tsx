import formatCurrency from "../helpers"
import { OrderItem } from "../types"
import { useMemo } from "react"

type OrderTotalProps = {
  order: OrderItem[]
  tip: number
}

const OrderTotals = ({order, tip} : OrderTotalProps) => {
  const subtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order])
  const tipAmount = useMemo(()=> subtotalAmount * tip , [tip, order])
  const totaltoPay = useMemo(()=> tipAmount + subtotalAmount, [tip, order])
  return (
   <>
    <div className="space-y-3">
      <h2 className="font-black text-2xl">Totals and tips</h2>
      <p>Subtotal to pay: {''}
        <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
      </p>
      <p>Tips: {''}
        <span className="font-bold">{formatCurrency(tipAmount)}</span>
      </p>
      <p>Total to pay: {''}
        <span className="font-bold">{formatCurrency(totaltoPay)}</span>
      </p>
    </div>   
   </> 
  )
}

export default OrderTotals