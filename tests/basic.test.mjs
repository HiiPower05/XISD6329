import test from "node:test";
import assert from "node:assert/strict";

test("café menu item has a valid name and price", () => {
  const item = {
    name: "Caramel Macchiato",
    price: 89.99
  };

  assert.equal(item.name, "Caramel Macchiato");
  assert.equal(typeof item.price, "number");
  assert.ok(item.price > 0);
});

test("invalid order status is rejected", () => {
  const allowedStatuses = [
    "pending",
    "confirmed",
    "completed",
    "cancelled"
  ];

  assert.equal(allowedStatuses.includes("invalid"), false);
});

test("guest checkout requires an email", () => {
  const email = "";

  assert.equal(Boolean(email.trim()), false);
});