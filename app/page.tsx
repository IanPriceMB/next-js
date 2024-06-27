import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import bidoof from '@/public/images/bidoof.png'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard /> */}
      <Image
        src={bidoof}
        alt='logo'
        className='object-contain'
        sizes='100vw'
      />
    </main>
  )
}
