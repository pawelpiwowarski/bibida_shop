// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { stripeRouter } from "./stripe_router";
import { cartRouter } from "./cart";
export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("question.", protectedExampleRouter)
  .merge("stipe.", stripeRouter)
  .merge("cart", cartRouter)
// export type definition of API
export type AppRouter = typeof appRouter;
