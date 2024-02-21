import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>devstore</h1>
      <p>
        Welcome to devstore, a place for developers to buy and sell digital
        assets.
      </p>
      <Image src="/logo.png" alt="devstore logo" width={200} height={200} />
    </div>
  )
}
