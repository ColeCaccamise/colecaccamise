"use server";

import axios from "axios";

type SubscribeData = {
  api_key: string;
  email: string;
};

export const subscribeToForm = async (formId: string, email: string) => {
  const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;

  const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;

  const data: SubscribeData = {
    api_key: CONVERTKIT_API_KEY || "",
    email: email,
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    return response.data.subscription.state;
  } catch (error) {
    throw new Error("I could not sign you up. Please try again.");
  }
};
