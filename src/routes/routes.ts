import { Router } from "express";
import { CheckoutController } from "../controllers/checkout.controller";

const router = Router();
const checkoutController = new CheckoutController();

router.post("/checkout", (req, res) => checkoutController.createCardPaymentMethod(req, res));
router.post("/customer", (req, res) => checkoutController.createCustomer(req, res));

export { router };