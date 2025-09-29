import express from "express";

import {
  getHumans,
  getHumanById,
  createHuman,
  updateHuman,
  deleteHuman
} from "../controllers/HumanController.js";

const router = express.Router();

router.get("/", getHumans);
router.get("/:id", getHumanById);
router.post("/", createHuman);
router.put("/:id", updateHuman);
router.delete("/:id", deleteHuman);

export default router;