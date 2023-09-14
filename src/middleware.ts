import type { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest, response: NextResponse) {
  console.log({ request, response })
}

export const config = {
  matcher: ['/success/:path*', '/checkout/:path*'],
}
