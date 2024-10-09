import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"
import MenuItem from "../components/MenuItem"

const useOrder = () => {
     
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)
    
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
    
    const removeItem = (id: MenuItem['id']) => {
        console.log("Eliminando...", id)
        setOrder(order.filter( item => item.id != id))
    }

    const placeOrder = () =>{
        console.log("Kept Order...")
        setOrder([])
        setTip(0)
    }

    console.log(order)
    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}

export default useOrder