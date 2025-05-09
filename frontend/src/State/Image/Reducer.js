import {CREATE_IMAGE_FAILURE, CREATE_IMAGE_REQUEST, CREATE_IMAGE_SUCCESS, GET_IMAGE_FAILURE, GET_IMAGE_REQUEST, GET_IMAGE_SUCCESS} from "./ActionType";

const initialState = {
    image : [],
    images : [],
    error: null,
    loading: false
}
export const imageReducer = (state=initialState, action)=>{
    switch (action.type) {
        case CREATE_IMAGE_REQUEST:
        case GET_IMAGE_REQUEST:
            return{
                ...state,
                loading: true,
                error: null
            }
        case CREATE_IMAGE_SUCCESS:
            return{
                ...state,
                loading: false,
                image: action.payload,
                error: null
            }
        case CREATE_IMAGE_FAILURE:
        case GET_IMAGE_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                images: action.payload,
                error: null
            }
            
      
   
    
        default:
            return state;
    }
}