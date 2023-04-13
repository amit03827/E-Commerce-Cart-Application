export const ADD= (item)=>{
    return {
        type : "ADD_CART",
        payload: item

    }
}

// Remove items
export const DLT= (id)=>{
    return {
        type : "RMV_CART",
        payload: id

    }
}

// Remove individual Item

export const REMOVE= (item)=>{
    return {
        type : "RMV_ONE",
        payload: item

    }
}