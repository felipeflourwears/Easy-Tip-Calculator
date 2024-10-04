import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

const useOrder = () => {
     
    const [order, setOrder] = useState<OrderItem[]>([])
    
    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
           console.log("Ya existe agregando otro mas...", item)
           const updatedOrder = order.map( orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1} : 
                orderItem
            )
            setOrder(updatedOrder)
        }else{
            console.log("Agregando Primera Vez...", item)
            const newItem : OrderItem ={...item, quantity: 1}
            setOrder([...order, newItem])
        }

        
    }

    console.log(order)
    return{
        addItem
    }
}

export default useOrder