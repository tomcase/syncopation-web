import { useEffect, useState } from "react";

const ApiStatus = () => {
  const [apiStatus, setApiStatus] = useState(false);
  useEffect(() => {
    (async () => {
			const url = process.env.REACT_APP_API_URL;
      const { alive } = await (await fetch(`${url}/api/health`)).json();
      setApiStatus(alive)
    })();
  }, [])
  return (
    <div className={`flex justify-center items-center shadow-lg py-4 w-24 rounded-lg bg-${apiStatus ? "green" : "red"}-500`}>
      <h1>Api {apiStatus ? "UP" : "DOWN"}</h1>
    </div>
  );
}

export { ApiStatus };