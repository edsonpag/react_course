import { Router } from "express";
import CallbackController from "./controllers/CallbackController.js";
import RefreshTokenController from "./controllers/RefreshTokenController.js";


const router = Router();

router.get("/callback", CallbackController.requestAcessToken);
router.get("/refresh_token", RefreshTokenController.requestAcessTokenWithRefreshToken);

export default router;