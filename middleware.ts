import { NextResponse, NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import { isUserAuthenticated } from "@/utils/auth";

export async function middleware(request: NextRequest) {
  await updateSession(request);

  const pathname: string = request.nextUrl.pathname;

  const user = await isUserAuthenticated();

  const isAuthRoute = pathname.startsWith("/auth");

  const isAdminRoute = pathname.startsWith("/admin");

  if (user) {
    if (pathname === "/login") {
      return Response.redirect(new URL("/admin", request.url));
    }

    return;
  }

  if (isAuthRoute || pathname === "/login") {
    return;
  }

  if (isAdminRoute) {
    return Response.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
