import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
import prisma from '@/prisma/client'

// to prevent caching you must add request obj
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = schema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  const user = await prisma.user.findUnique({
    where: { email: body.email }
  })

  if (user)
    return NextResponse.json({ error: 'User already exists' }, { status: 400 })

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  })

  // 201 obj created
  return NextResponse.json(newUser, { status: 201 })
}