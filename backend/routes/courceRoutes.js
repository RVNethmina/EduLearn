// backend/routes/courseRoutes.js
import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getCourseDetails,
  updateCourseMeta,
  addModule,
  updateModule,
  deleteModule,
  reorderModules,
  setPublishState
} from "../controllers/courseController.js";

const router = express.Router();
router.use(protect);

router.get("/:id", getCourseDetails);
router.put("/:id", updateCourseMeta);

router.post("/:id/modules", addModule);
router.put("/:id/modules/:moduleId", updateModule);
router.delete("/:id/modules/:moduleId", deleteModule);
router.put("/:id/modules/reorder", reorderModules);

router.post("/:id/publish", setPublishState);

export default router;
