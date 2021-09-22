import { useDispatch, useSelector } from "react-redux";

import { toggleShowCheck } from "../../store/profile/actions";

export const Profile = () => {
    const showCheck = useSelector((state) => state.profile.showCheck);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleShowCheck)
    }

    return <div>
        <h4> Это страница профиля </h4>
        <input
            type="checkbox"
            onChange={handleClick} />
        <label>{showCheck ? 'Меня отметили' : 'Меня не отметили'}</label>
    </div>
}