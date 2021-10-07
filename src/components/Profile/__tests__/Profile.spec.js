import {render, fireEvent} from "@testing-library/react";
import {Profile} from "../index"

describe('test button logout', () => {
    it('this button is clicable', () =>{              
        const handleClick = jest.fn();
        
        const component = render(<Profile/>);        
        const clicable = component.getByTitle("logout");
        fireEvent(clicable, new MouseEvent('click', {bubbles: true}));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});