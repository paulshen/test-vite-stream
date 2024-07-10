import { Link } from "react-router-dom";

export function A({ user }) {
  return (
    <div>
      <div>Page A</div>
      <div>{user.name}</div>
      <Link to="/">Go to /</Link>
    </div>
  );
}
