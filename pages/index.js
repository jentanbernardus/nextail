import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>NextTail</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          NexTail
        </h1>
        <div className="p-2 my-3 bg-indigo-300 text-indigo-800 rounded-md">
          <p className="text-sm">
          Fully optimized Next.js + Tailwind CSS starter kit.
          </p>
        </div>

        <p className="mt-3 text-gray-500">
          Get started by editing{' '}
          <code className="px-2 font-mono text-lg bg-gray-200 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
         
        </div>
      </main>

    </div>
  )
}
