import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { validateBody, validateQuery } from "../middleware/validate";
import {
  createCompanySchema,
  listCompaniesQuerySchema,
  updateCompanySchema,
} from "../types/company.schema";
import {
  createCompany,
  deleteCompany,
  getCompanyByIdOrSlug,
  listCompanies,
  updateCompany,
} from "../controllers/companies.controller";

const router = Router();

router.get("/", validateQuery(listCompaniesQuerySchema), asyncHandler(listCompanies));
router.get("/:idOrSlug", asyncHandler(getCompanyByIdOrSlug));
router.post("/", validateBody(createCompanySchema), asyncHandler(createCompany));
router.patch("/:id", validateBody(updateCompanySchema), asyncHandler(updateCompany));
router.delete("/:id", asyncHandler(deleteCompany));

export default router;
