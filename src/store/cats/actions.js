import { PUBLIC_URL } from "../../utils/constants";

export const GET_PICS_PENDING = "CATS::GET_PENDING";
export const GET_PICS_SUCCESS = "CATS::GET_SUCCESS";
export const GET_PICS_FAILURE = "CATS::GET_FAILURE";

export const getPicsPending = () => ({
    type: GET_PICS_PENDING,
});

const getPicsSuccess = (facts) => ({
    type: GET_PICS_SUCCESS,
    payload: facts
});

const getPicsFailure = (error) => ({
    type: GET_PICS_FAILURE,
    payload: error,
});

export const getPics = () => async(dispatch) => {
    dispatch(getPicsPending());

    try {
    const response = await fetch(PUBLIC_URL);

    if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }
    
    const result = await response.json();
    
    dispatch(getPicsSuccess(result));
    } catch(e) {
        dispatch(getPicsFailure(e.message));
    }
};