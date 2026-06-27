import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { validateBody, validateQuery } from "../middleware/validate";
import {
  createInvestorSchema,
  listInvestorsQuerySchema,
  updateInvestorSchema,
} from "../types/investor.schema";
import {
  createInvestor,
  deleteInvestor,
  getInvestorByIdOrSlug,
  listInvestors,
  updateInvestor,
} from "../controllers/investors.controller";

const router = Router();

router.get("/", validateQuery(listInvestorsQuerySchema), asyncHandler(listInvestors));
router.get("/:idOrSlug", asyncHandler(getInvestorByIdOrSlug));
router.post("/", validateBody(createInvestorSchema), asyncHandler(createInvestor));
router.patch("/:id", validateBody(updateInvestorSchema), asyncHandler(updateInvestor));
router.delete("/:id", asyncHandler(deleteInvestor));

export default router;
