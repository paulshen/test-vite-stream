import { Suspense, use, useState } from "react";

function TestUse() {
  const [sleepPromise] = useState(
    () =>
      new Promise((resolve) => setTimeout(() => resolve(Math.random()), 2000))
  );

  const value = use(sleepPromise);
  return <p>{value}</p>;
}

function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Suspense fallback={<p>Loading...</p>}>
        <TestUse />
      </Suspense>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default Card;
