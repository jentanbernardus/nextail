import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>NextTail</title>
        <meta name="description" content="Next.js + Tailwind CSS starter kit optimized for blazing-fast performance."/>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-xl md:text-3xl lg:text-6xl font-thin">
          NexTail
        </h1>
        <div className="p-3 mt-5 bg-gray-200 text-gray-800 rounded-md">
          <p className="text-sm">
            <code className="font-mono text-sm">
          Next.js + Tailwind CSS starter kit optimized for blazing-fast performance.
            </code>
          </p>
        </div>
        <div className="mt-10">
          <a href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fjentanbernardus%2Fnextail&project-name=nextail&repo-name=nextail&demo-title=NexTail&demo-description=A%20Next.js%20%2B%20TailwindCSS%20starter%20kit%20optimized%20for%20blazing-fast%20performance.&demo-url=https%3A%2F%2Fnextail.vercel.app"><img src="https://vercel.com/button" alt="Deploy with Vercel" /></a>
          {/* <a href="https://app.netlify.com/start/deploy?repository=https://github.com/jentanbernardus/nextail"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a> */}
        </div>
        
      </main>
      
    </div>
  )
}
