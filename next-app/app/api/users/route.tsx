import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

// to prevent caching you must add request obj
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'Ian' },
    { id: 2, name: 'Price' }
  ])
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  //validate
  // if invalid, return 400
  // else, return data
  const validation = schema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  // 201 obj created
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 })
}