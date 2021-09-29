import { CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { ImageList, ImageListItem } from "@material-ui/core";

import { getPics } from "../../store/cats/actions";
import { selectPics, selectPicsError, selectPicsPending } from "../../store/cats/selectors";

export const Cats = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectPicsError);
  const pending = useSelector(selectPicsPending);  
  const cats = useSelector(selectPics);

  const reload = () => {
    dispatch(getPics());
  }

  useEffect(() => {
    reload();
  }, []);

console.log(pending);

  return (
    <div>
      <h2>Cats</h2>
      {error ? (
        <div>
          <h3>Error: {error}</h3>
          <button onClick={reload}>Refresh</button>
        </div>
      ) : (
        <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={200}>
          {cats.map((cat) => (
            <ImageListItem key={cat.id}>
              <img
                src={`https://cataas.com/cat/${cat.id}`}                
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}      
      {pending && <CircularProgress />}
    </div>
  );
};