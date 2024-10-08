import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const routes = ['/', '/privacy'];

export const middleware = (request: NextRequest) => {
  console.log(request.nextUrl.pathname);
  if (routes.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/', request.url));
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
