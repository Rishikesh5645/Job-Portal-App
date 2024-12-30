import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { createJobController, deleteJobController, getAllJobController, updateJobController} from "../controllers/jobsController.js";

// router object
const router=express.Router();

// routes
// CREATE ROUTE || POST
router.post("/create-job",userAuth,createJobController);

// GET JOBS || GET
router.get("/get-job",userAuth,getAllJobController);

// UPDATE JOBS || PUT || PATCH
router.patch("/update-job/:id",userAuth,updateJobController);

// DELETE JOBS || DELETE
router.delete("/delete-job/:id",deleteJobController);

// export
export default router;