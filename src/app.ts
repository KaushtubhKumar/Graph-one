import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import { env } from "./utils/env";
import companiesRoutes from "./routes/companies.routes";
import investorsRoutes from "./routes/investors.routes";
import fundingRoundsRoutes from "./routes/fundingRounds.routes";
import statsRoutes from "./routes/stats.routes";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      origin: env.CORS_ORIGIN === "*" ? true : env.CORS_ORIGIN.split(","),
    })
  );
  app.use(compression());
  app.use(express.json({ limit: "1mb" }));
  app.use(morgan(env.NODE_ENV === "development" ? "dev" : "combined"));

  app.get("/health", (_req, res) => {
    res.json({ status: "ok", service: "graphone-api", time: new Date().toISOString() });
  });

  app.use("/api/companies", companiesRoutes);
  app.use("/api/investors", investorsRoutes);
  app.use("/api/funding-rounds", fundingRoundsRoutes);
  app.use("/api/stats", statsRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
