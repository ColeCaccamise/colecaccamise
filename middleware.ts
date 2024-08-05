import { NextResponse, NextRequest } from "next/server";
import { get } from "@vercel/edge-config";
import { updateSession } from "@/utils/supabase/middleware";
import { isUserAuthenticated } from "@/utils/auth";
import { isEmpty } from "./lib/validation";

type RedirectEntry = {
  destination: string;
  permanent: boolean;
};

interface Redirects {
  [pathname: string]: RedirectEntry;
}

let cachedRedirects: Map<string, RedirectEntry> | null = null;
const CACHE_TTL = 60 * 60 * 1000; // 1 hour
let lastFetchTime = 0;

async function getRedirects() {
  const now = Date.now();
  if (!cachedRedirects || now - lastFetchTime > CACHE_TTL) {
    const redirects: Redirects = (await get("redirects")) || {};
    console.log("checked redirects");
    cachedRedirects = new Map(Object.entries(redirects));
    lastFetchTime = now;
  }
  return cachedRedirects;
}

export async function middleware(request: NextRequest) {
  await updateSession(request);

  const pathname: string = request.nextUrl.pathname;

  const redirects = await getRedirects();

  const redirectEntry = redirects.get(pathname);
  if (redirectEntry) {
    const statusCode = redirectEntry.permanent ? 308 : 307;
    return NextResponse.redirect(redirectEntry.destination, statusCode);
  }

  const user = await isUserAuthenticated();

  // Check if the current path is an auth route
  const isAuthRoute = pathname.startsWith("/admin/auth/");

  // Check if the current path is in the admin directory
  const isAdminRoute = pathname.startsWith("/admin");

  if (user && isAdminRoute) {
    // Redirect signed-in users from /admin/login to /admin
    if (pathname === "/admin/login") {
      return Response.redirect(new URL("/admin", request.url));
    }
    // Allow access to all other routes for signed-in users
    return;
  }

  // Allow access to auth routes and /admin/login even if not signed in
  if (isAuthRoute || pathname === "/admin/login") {
    return;
  }

  // Redirect non-signed-in users trying to access any other admin routes to /admin/login
  if (isAdminRoute) {
    return Response.redirect(new URL("/admin/login", request.url));
  }

  // Allow access to all other routes
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
