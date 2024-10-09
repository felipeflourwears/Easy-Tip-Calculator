import type { OrderItem } from "../types"
import formatCurrency from '../helpers'; // Importación por defecto

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Food Consumption</h2>
      <div className="space-y-3 mt-10"></div>
        {order.length === 0 ? 
            <p className="text-center">Order is empty</p>
            : (order.map(item => (
                <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                  <div>
                    <p className="text-lg">
                        {item.name} - {formatCurrency(item.price * item.quantity)}
                    </p>
                    <p className="font-black">
                        Cantidad: {item.quantity}
                    </p>
                  </div>  
                  <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black" onClick={()=> removeItem(item.id)}>
                    X
                  </button>
                </div>
            )))}
    </div>
  )
}

export default OrderContents
