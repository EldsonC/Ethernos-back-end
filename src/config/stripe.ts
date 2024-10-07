import stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const SK_TEST_STRIPE = process.env.SK_TEST_STRIPE || ""
export const Stripe = new stripe(SK_TEST_STRIPE);