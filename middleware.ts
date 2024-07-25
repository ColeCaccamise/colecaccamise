import type { NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';
import { isUserAuthenticated } from '@/utils/auth';

export async function middleware(request: NextRequest) {
	await updateSession(request);

	const user = await isUserAuthenticated();

	// Check if the current path is an auth route
	const isAuthRoute = request.nextUrl.pathname.startsWith('/admin/auth/');

	// Check if the current path is in the admin directory
	const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');

	if (user && isAdminRoute) {
		// Redirect signed-in users from /admin/login to /admin
		if (request.nextUrl.pathname === '/admin/login') {
			return Response.redirect(new URL('/admin', request.url));
		}
		// Allow access to all other routes for signed-in users
		return;
	}

	// Allow access to auth routes and /admin/login even if not signed in
	if (isAuthRoute || request.nextUrl.pathname === '/admin/login') {
		return;
	}

	// Redirect non-signed-in users trying to access any other admin routes to /admin/login
	if (isAdminRoute) {
		return Response.redirect(new URL('/admin/login', request.url));
	}

	// Allow access to all other routes
	return;
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
