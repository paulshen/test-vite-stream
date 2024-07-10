import { json, useLoaderData } from "react-router-dom";
import { A } from "./A";
import App from "./App";
import { B } from "./B";

let cache: any;

async function loadUser(path: string) {
  console.log("loadUser", path);
  if (!import.meta.env.SSR && cache) {
    console.log("loadUser cached");
    return cache;
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  cache = { name: "paul" };
  return cache;
}

const routes = [
  {
    path: "/",
    async loader() {
      const user = await loadUser("/");
      return json(user);
    },
    Component() {
      let user = useLoaderData();
      cache = user;
      return <App user={user} />;
    },
  },
  {
    path: "/a",
    async loader() {
      const user = await loadUser("/a");
      return json(user);
    },
    Component() {
      let user = useLoaderData();
      cache = user;
      return <A user={user} />;
    },
  },
  {
    path: "/b",
    async loader() {
      const user = await loadUser("/b");
      return json(user);
    },
    Component() {
      let user = useLoaderData();
      cache = user;
      return <B user={user} />;
    },
  },
];

export default routes;
