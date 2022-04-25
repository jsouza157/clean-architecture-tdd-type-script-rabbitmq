import express from "express";
import CreateUserController from "../Controllers/CreateUserController";

const router = express.Router();

router.post('/create', new CreateUserController().handle);

export default router;