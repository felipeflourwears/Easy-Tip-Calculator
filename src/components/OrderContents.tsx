import type { OrderItem } from "../types"
import formatCurrency from '../helpers'; // Importación por defecto

type OrderContentsProps = {
    order: OrderItem[]
}

function OrderContents({order} : OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Food Consumption</h2>
      <div className="space-y-3 mt-5"></div>
        {order.length === 0 ? 
            <p className="text-center">Order is empty</p>
            : (order.map(item => (
                <div key={item.id}>
                    <p className="text-lg">
                        {item.name} - {formatCurrency(item.price)}
                    </p>
                    <p className="font-black">
                        Cantidad: {item.quantity}
                    </p>
                </div>
            )))}
    </div>
  )
}

export default OrderContents
