import { router } from "../trpc";
import { cardsRouter } from "./cards";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
	cards: cardsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
