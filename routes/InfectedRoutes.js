import express from "express";

import {
  getInfecteds,
  getInfectedById,
  createInfected,
  updateInfected,
  deleteInfected
} from "../controllers/InfectedController.js";

const router = express.Router();

router.get("/", getInfecteds);
router.get("/:id", getInfectedById);
router.post("/", createInfected);
router.put("/:id", updateInfected);
router.delete("/:id", deleteInfected);

export default router;