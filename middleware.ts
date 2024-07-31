import { NextResponse, NextRequest } from 'next/server';
import { get } from '@vercel/edge-config';
import { updateSession } from '@/utils/supabase/middleware';
import { isUserAuthenticated } from '@/utils/auth';
import { isEmpty } from './lib/validation';

type RedirectEntry = {
	destination: string;
	permanent: boolean;
};

interface Redirects {
	[pathname: string]: RedirectEntry;
}

export async function middleware(request: NextRequest) {
	await updateSession(request);

	const pathname: string = request.nextUrl.pathname;

	const redirects: Redirects = (await get('redirects')) || {};
	const redirectEntry: RedirectEntry = redirects[pathname];

	if (!isEmpty(redirects) && redirectEntry) {
		const statusCode = redirectEntry?.permanent ? 308 : 307;
		return NextResponse.redirect(redirectEntry.destination, statusCode);
	}

	const user = await isUserAuthenticated();

	// Check if the current path is an auth route
	const isAuthRoute = pathname.startsWith('/admin/auth/');

	// Check if the current path is in the admin directory
	const isAdminRoute = pathname.startsWith('/admin');

	if (user && isAdminRoute) {
		// Redirect signed-in users from /admin/login to /admin
		if (pathname === '/admin/login') {
			return Response.redirect(new URL('/admin', request.url));
		}
		// Allow access to all other routes for signed-in users
		return;
	}

	// Allow access to auth routes and /admin/login even if not signed in
	if (isAuthRoute || pathname === '/admin/login') {
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
