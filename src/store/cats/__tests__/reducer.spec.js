import { REQUEST_STATUS} from "../../../utils/constants";
import { getPics } from "../actions";
import {picsReducer} from "../reducer";

describe('post reducer', () => {
    it('returns state with status pending after requestCats action', () =>{
        const expected = {
            list: [],
            request:{
                status: REQUEST_STATUS.PENDING,
                error: null,
            },
        };
        const recieved = picsReducer(undefined, getPics());

        expect(expected).toEqual(recieved);
    });
});

