import { Checkout, CheckoutInterface, Customer } from "../interfaces/checkout.interface";
import { Stripe } from "../config/stripe";

export class CheckoutService implements CheckoutInterface {
  async createCustomer(customer: Customer): Promise<undefined | any> {
    try {
      const customerUser = await Stripe.customers.create({
        name: customer.name,
        email: customer.email
      });

      return customerUser;
    } catch (error) {
      console.error("Something is wrong.");
    }
  }

  async createCardPaymentMethod(checkout: Checkout): Promise<undefined | any> {
    try {
      const cardPaymentMethod = await Stripe.paymentMethods.create({
        type: "card",
        card: {
          number: checkout.card_number,
          exp_month: checkout.exp_month,
          exp_year: checkout.exp_year,
          cvc: checkout.cvc,
        },
        billing_details: {
          name: checkout.name,
          address: {
            state: '',
            city: '',
            country: ''
          }
        }
      });

      return cardPaymentMethod;
    } catch (error) {
      console.error("Someting is wrong.", error);
    }
  }
}