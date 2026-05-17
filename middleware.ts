import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limiting store (Note: In a multi-instance production environment like Vercel, this is per-isolate. Use Redis for strict global limits).
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

const RATE_LIMIT_MAX = 5; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

export function middleware(request: NextRequest) {
  // Only apply rate limiting to the appointment API
  if (request.nextUrl.pathname.startsWith('/api/appointment')) {
    
    // Get IP address from headers (works on Vercel/proxies)
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'anonymous';

    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW_MS;

    // Clean up old entries (simple garbage collection)
    if (Math.random() < 0.1) {
      rateLimitMap.forEach((data, key) => {
        if (data.timestamp < windowStart) rateLimitMap.delete(key);
      });
    }

    const requestData = rateLimitMap.get(ip);

    if (!requestData || requestData.timestamp < windowStart) {
      // First request in the new window
      rateLimitMap.set(ip, { count: 1, timestamp: now });
      return NextResponse.next();
    }

    if (requestData.count >= RATE_LIMIT_MAX) {
      // Limit exceeded
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests. Please try again later or call the clinic.' }),
        { 
          status: 429, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    // Increment count
    requestData.count += 1;
    rateLimitMap.set(ip, requestData);
    return NextResponse.next();
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
};
