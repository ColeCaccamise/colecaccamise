import { createClient } from "../supabase/server";

export async function generateMagicLink(email: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.admin.generateLink({
    type: "magiclink",
    email: email,
  });

  if (error) {
    throw new Error("Could not generate magic link.");
  }

  const token = data?.properties?.hashed_token;

  const url = `${process.env.APP_URL}/auth/confirm?token_hash=${token}&type=email`;

  return { url };
}

export async function isUserAuthenticated() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!user) {
    return false;
  }

  return true;
}

export async function getUser() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
