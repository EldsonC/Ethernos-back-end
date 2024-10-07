import { Request, Response } from "express";
import { Checkout, Customer } from "../interfaces/checkout.interface";
import { CheckoutService } from "../services/checkout.services";

export class CheckoutController {
  public CheckoutService = new CheckoutService();

  constructor () {}

  async createCustomer(req: Request, res: Response): Promise<undefined | any> {
    const {
      name,
      email
    }: Customer = req.body;

    try {
      const customer = await this.CheckoutService.createCustomer({
        name,
        email
      });

      return res.status(200).json(customer);
    } catch (error) {
      return res.status(500).json({
        message: "Error creating customer.",
        error
      })
    }
  }
  async createCardPaymentMethod(req: Request, res: Response): Promise<undefined | any> {
    const {
      card_number,
      exp_month,
      exp_year,
      cvc,
      name,
      address,
    }: Checkout = req.body;

    try {
      const cardPaymentMethod = await this.CheckoutService.createCardPaymentMethod({
        card_number,
        exp_month,
        exp_year,
        cvc,
        name,
        address
      });

      return res.status(200).json(cardPaymentMethod);
    } catch (error) {
      console.error("Error creating payment method: ", error);
      return res.status(500).json({
        message: "Payment method not create.",
        error,
      })
    }
  }
}