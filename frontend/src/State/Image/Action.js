import { api } from "../../config/apiConfig";
import { FIND_IMAGE_FAILURE, FIND_IMAGE_REQUEST, FIND_IMAGE_SUCCESS,CREATE_IMAGE_FAILURE, CREATE_IMAGE_REQUEST, CREATE_IMAGE_SUCCESS, GET_IMAGE_FAILURE, GET_IMAGE_REQUEST, GET_IMAGE_SUCCESS , DELETE_IMAGE_FAILURE, DELETE_IMAGE_REQUEST, DELETE_IMAGE_SUCCESS} from "./ActionType"

export const createImage = (reqData) => async(dispatch)=>{
    dispatch({type: CREATE_IMAGE_REQUEST});
    try {
        console.log(reqData)
        const {data} = api.post(
            `${API_BASE_URL}/api/image`,
            reqData
        );
        console.log("kkk",data)
        dispatch({type: CREATE_IMAGE_SUCCESS, payload:data});

        
    } catch (error) {
        dispatch({
            type: CREATE_IMAGE_FAILURE,
            payload: error.message
        })
    }
}
