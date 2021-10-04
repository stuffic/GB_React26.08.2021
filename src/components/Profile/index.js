import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { ref, set, onValue } from "@firebase/database";
import { db } from "../../services/firebase";

export const Profile = ({ onLogout }) => {

    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const showName = useSelector((state) => state.showName);
    const dispatch = useDispatch();

    const handleClick = () => {
        onLogout();
    }

    useEffect(() => {
        const userDbRef = ref(db, "user");
        onValue(userDbRef, (snapshot) => {
          const data = snapshot.val();
          console.log('--------', data);
          setName(data?.username || '');
        });
      }, []);

      const handleSubmit = (e) => {
        e.preventDefault();
        setValue("");
        set(ref(db, "user"), {
          username: value,
        });    
      };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return <div>
        <h4> Это страница профиля </h4>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        <div>{name}</div>
        <button onClick={handleClick}>Logout</button>
    </div>
}