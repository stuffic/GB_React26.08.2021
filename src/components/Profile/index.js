import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { store } from "../../store";
import { toggleShowCheck } from "../../store/profile/actions";


export const Profile = () => {
    const showCheck = useSelector((state) => state.showCheck);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleShowCheck)
    }

    return <div>
        <h4> Это страница профиля </h4>    
        <input            
            type="checkbox"           
            onChange={handleClick} />
        {showCheck && <label> Меня отметили</label>}   
        {!showCheck && <label> Меня не отметили</label>}
        </div>
}