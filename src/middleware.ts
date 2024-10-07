import { auth } from '@/auth';

const appRoutes = ['/', '/privacy'];

export default auth((request) => {
  if (!appRoutes.includes(request.nextUrl.pathname)) {
    return Response.redirect(new URL('/', request.nextUrl.origin));
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
