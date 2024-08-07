import { Suspense, lazy } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { Link } from "react-router-dom";

// Works also with SSR as expected
const Card = lazy(() => import("./Card"));

function App({ user }) {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-blue-500">Vite + React</h1>
      <div>{JSON.stringify(user)}</div>

      <Suspense fallback={<p>Loading card component...</p>}>
        <Card />
      </Suspense>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Link to="/a">Go to A</Link> <Link to="/b">Go to B</Link>
      </div>
    </>
  );
}

export default App;
