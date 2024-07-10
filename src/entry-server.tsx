import type { Request } from "express";
import React from "react";
import {
  type RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import routes from "./routes";

export async function render(
  req: Request,
  _ssrManifest?: string,
  options?: RenderToPipeableStreamOptions
) {
  let origin = `${req.protocol}://${req.get("host")}`;
  let url = new URL(req.originalUrl || req.url, origin);
  let fetchRequest = new Request(url, {
    method: "GET",
    headers: new Headers(),
  });
  let handler = createStaticHandler(routes);
  let context = await handler.query(fetchRequest);
  let router = createStaticRouter(handler.dataRoutes, context);

  return renderToPipeableStream(
    <React.StrictMode>
      <StaticRouterProvider router={router} context={context} />
    </React.StrictMode>,
    options
  );
}
