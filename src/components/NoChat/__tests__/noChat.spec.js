import {render} from "@testing-library/react";
import {NoChat} from "../index"

describe('should have description of page', () => {
    it('this component should have title', () =>{              
        const component = render(<NoChat/>);
        component.getByText("Вернуться к списку чатов");
    });
});