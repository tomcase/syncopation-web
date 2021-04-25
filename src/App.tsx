import { ApiStatus } from './components/ApiStatus/ApiStatus';

const App = () => {

  const runSync = () => {
    (async () => {
      const url = process.env.REACT_APP_API_URL;
      await fetch(`${url}/api/sync`, { method: "POST"});
    })();
  }

  return (
    <div className={`container mx-auto`}>
      <div className={`flex`}>
        <ApiStatus />
        <button className={"px-4 py-2 w-24 rounded-lg bg-blue-500 text-gray-200 shadow-lg"} onClick={runSync}>Sync</button>
      </div>
    </div>
  );

}

export default App;
