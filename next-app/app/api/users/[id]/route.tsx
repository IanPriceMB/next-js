import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';


export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }) {
  // fetch data from a db
  // if not found, return 4040
  // else return data

  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 })

  return NextResponse.json({ id: 1, name: 'Ian' })
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }) {
  // Validate the request body
  // If invalid, return 400
  const body = await request.json()

  const validation = schema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  // Fetch theuser with the given id
  // If doesn't exist, return 404
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 })

  // Update the user
  // Return the updated user


  return NextResponse.json({ id: 1, name: body.name })
}


export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }) {


  // Fetch theuser with the given id
  // If doesn't exist, return 404
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 })

  // Update the user
  // Return the updated user


  return NextResponse.json({})
}