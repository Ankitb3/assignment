const Intialstate={
    cart:[]
};
export const cartreducer = (state = Intialstate,action)=>{
    switch(action.type){
        case "ADD_ITEM":return{
            cart:[action.payload]
        }
        default:
            return state
    }
};