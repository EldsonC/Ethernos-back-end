import { Response } from "express";

export interface Checkout {
  card_number: string;
  exp_month: number;
  exp_year: number;
  cvc: string;
  name: string,
  address: string,
}

export interface Customer {
  name: string;
  email: string;
}

export interface CheckoutInterface {
  createCardPaymentMethod(checkout: Checkout): Promise<undefined>;
  createCustomer(customer: Customer): Promise<undefined>;
}