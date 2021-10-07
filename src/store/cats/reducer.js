import { REQUEST_STATUS } from "../../utils/constants"
import { GET_PICS_FAILURE, GET_PICS_PENDING, GET_PICS_SUCCESS } from "./actions";

const initialState = {
    list: [],
    request: {
        error: null,
        status: REQUEST_STATUS.IDLE
    },
};

export const picsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PICS_PENDING: {
            return {
                ...state,
                request: {
                    error: null,
                    status: REQUEST_STATUS.PENDING,
                }
            };
        }
        case GET_PICS_SUCCESS: {            
            return {
                ...state,
                request:{
                    ...state.request,
                    status: REQUEST_STATUS.SUCCESS
                },
                list:payload
            };
        }
        case GET_PICS_FAILURE: {            
            return {
                ...state,
                request:{
                    error: payload,
                    status: REQUEST_STATUS.FAILURE
                },                
            };
        }
        default:
            return state;
    }
};