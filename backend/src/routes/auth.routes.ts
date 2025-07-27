import { Router } from 'express';
import { AuthController } from '../controllers';

const router = Router();
const authController = new AuthController();

router.post('/send-otp', (req, res) => authController.sendOtp(req, res));
router.post('/verify', (req, res) => authController.verify(req, res));
router.post('/set-password', (req, res) =>
  authController.setPassword(req, res)
);
router.post('/login', (req, res) => authController.login(req, res));

export default router;
