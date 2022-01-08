import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center space-y-6 w-full flex-1 px-20 text-center">
        <div className="text-6xl font-bold">Dorfmeyster </div>
        <div className="text-6xl font-bold">Next.js | Tailwind | Storybook</div>
        <div className="text-6xl font-bold">Template</div>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">src/pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
