"use strict";

const stripe = require("stripe")(
  "sk_test_51IRWqrJHEc467XcCgyK4ye6eKSEeHEQIrvO9VBp5wYyRHAxeOvTYpITmyrTxFuxIs3Jwf1KWuTDk6tSlqxOmuFAe00eAlWL5N9"
);

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx){
    const {token, products, userId, shippingAddress} = ctx.request.body;
    let totalPayment = 0;
    products.forEach(product => {
      totalPayment += product.price;
    });

    const charge = await stripe.charge.create({
      amount: totalPayment * 100,
      currency: "usd",
      source: token.id,
      description: `USER: ${userId} @ ${new Date().toLocaleString()} `
    });

    const createOrder = [];

    for await(const product of products){
      const data = {
        game: product.id,
        user: userId,
        totalPayment,
        paymentId: charge.id,
        shippingAddress
      }

      const validData = await strapi.entityValidator.validateEntity(
        strapi.models.order,
        data
      );

      const entry = await strapi.query("order").create(validData);
      createOrder.push(entry);
    }
    return createOrder;
  }
};
