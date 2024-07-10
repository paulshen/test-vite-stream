import { Link } from "react-router-dom";

export function B({ user }) {
  return (
    <div>
      <div>Page B</div>
      <div>{user.name}</div>
      <Link to="/">Go to /</Link>
    </div>
  );
}
