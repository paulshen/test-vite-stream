import { Link } from "react-router-dom";

export function B({ user }) {
  return (
    <div>
      <div>Page B</div>
      <div>{JSON.stringify(user)}</div>
      <Link to="/">Go to /</Link>
    </div>
  );
}
