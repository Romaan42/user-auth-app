import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  const publicRoutes = [
    "/login",
    "/register",
    "/favicon.ico",
    "/api/auth",
    "_next",
  ];
  const authUrl = ["/login", "/register"];

  const token = await getToken({
    req: request,
    secret: process.env.NEXT_AUTH_SECRET,
  });

  // ✅ If user is logged in, block login & register
  if (token && authUrl.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ✅ Allow public routes
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // ✅ If not logged in, block protected routes
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
