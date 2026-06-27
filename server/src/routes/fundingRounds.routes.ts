import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { validateBody, validateQuery } from "../middleware/validate";
import {
  createFundingRoundSchema,
  listFundingRoundsQuerySchema,
  updateFundingRoundSchema,
} from "../types/fundingRound.schema";
import {
  createFundingRound,
  deleteFundingRound,
  getFundingRoundById,
  listFundingRounds,
  updateFundingRound,
} from "../controllers/fundingRounds.controller";

const router = Router();

router.get("/", validateQuery(listFundingRoundsQuerySchema), asyncHandler(listFundingRounds));
router.get("/:id", asyncHandler(getFundingRoundById));
router.post("/", validateBody(createFundingRoundSchema), asyncHandler(createFundingRound));
router.patch("/:id", validateBody(updateFundingRoundSchema), asyncHandler(updateFundingRound));
router.delete("/:id", asyncHandler(deleteFundingRound));

export default router;
