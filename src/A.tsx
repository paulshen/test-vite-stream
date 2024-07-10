import { Link } from "react-router-dom";

export function A({ user }) {
  return (
    <div>
      <div>Page A</div>
      <div>{JSON.stringify(user)}</div>
      <Link to="/">Go to /</Link>
    </div>
  );
}
