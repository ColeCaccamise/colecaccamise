"use server";

import axios from "axios";

export async function createOrder(
  email: string,
  productId: string,
  clickId?: string | null,
) {
  if (!email) {
    return { success: false, error: "Email is required" };
  }

  if (!productId) {
    return { success: false, error: "Something went wrong" };
  }

  try {
    await axios.post("http://localhost:8000/orders", {
      email: email,
      product_id: productId,
      click_id: clickId,
    });

    return { success: true };
  } catch (error) {
    console.error(error);

    return { success: false, error: "Failed to create order" };
  }
}
