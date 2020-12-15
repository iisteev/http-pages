import Head from 'next/head'

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <h1 className="text-base md:text-8xl font-dark font-medium font-bold">
          Welcome !
        </h1>

        <p className="text-2xl md:text-3xl ml-5 font-light leading-normal">
          Nothing to show here{' '}
        </p>

      </main>

    </div>
  )
}
