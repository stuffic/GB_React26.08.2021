import {getPicsPending, GET_PICS_PENDING} from "../actions"

describe('cats actions', () => {
    it('getPicsPending returns and action with type', () =>{
        const expected = {
            type: GET_PICS_PENDING
        };
        const recieved = getPicsPending();

        expect(expected).toEqual(recieved);
    });
});