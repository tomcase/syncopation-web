import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectToApi, selectApiStatus } from "./apiStatusSlice";

const ApiStatus = () => {
  const dispatch = useDispatch();
  const isOnline = useSelector(selectApiStatus)

  useEffect(() => {
    if (!isOnline) {
      dispatch(connectToApi)
    }
  }, [dispatch, isOnline])

  return (
    <div className={`flex justify-center items-center shadow-lg py-4 w-24 rounded-lg bg-${isOnline? "green" : "red"}-500`}>
      <h1>Api {isOnline? "UP" : "DOWN"}</h1>
    </div>
  );
}

export { ApiStatus };