import { MenuItem, OrderItem } from "../types"

export type OrderActions = 
    {type: 'add-item', payload:{ item: MenuItem }} |
    {type: 'remove-item', payload:{ id: MenuItem['id'] }} |
    {type: 'place-order'} |
    {type: 'add-tip', payload:{ value: number }}


export type OrderState = {
    order: OrderItem[],
    tip: number
}


export const initialState : OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
        state: OrderState = initialState,
        action: OrderActions
    ) => {
    
    if(action.type === 'add-item'){
        console.log("From add-item")

        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        let updatedOrder : OrderItem[] = []
        
        if(itemExist){
            console.log("Ya existe agregando otro mas...", action.payload.item.id)
            updatedOrder = state.order.map( orderItem => orderItem.id === action.payload.item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1} : 
                orderItem
            )
        
        }else{
            console.log("Agregando Primera Vez...", action.payload.item)
            const newItem : OrderItem ={...action.payload.item, quantity: 1}
            updatedOrder = [...state.order, newItem]
        }

        return{
            ...state,
            order: updatedOrder
        }
    }

    if(action.type === 'place-order'){
        
        return{
            ...state,
            order: [],
            tip: 0
        }
    }

    if(action.type === 'remove-item'){
        let updatedOrder : OrderItem[] = []
        updatedOrder = state.order.filter( orderItem => orderItem.id != action.payload.id)
        return{
            ...state,
            order: updatedOrder
        }
    }

    if(action.type === 'add-tip'){
        console.log("From add-tip")
        const tip = action.payload.value
        return{
            ...state,
            tip
        }
    }
    

    
    return state

}

