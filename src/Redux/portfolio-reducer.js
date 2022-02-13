
let GET_IMAGES="GET_IMAGES";

const initialstate={
    images:[]
};

    
const portfolioReducer=(state=initialstate,action)=>{
    switch(action.type){
        case GET_IMAGES:{
            return{
            ...state,
            images:action.images
            }
        }
        default:
            return state;
    }
    
}


export const getImages=(images)=>({type:GET_IMAGES, images});

export default portfolioReducer;