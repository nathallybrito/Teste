import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-29 bg-imagemFundo bg-cover">
      
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://instagram.com/na_fernandesss?igshid=NGExMmI2YTkyZg=="
            target="_blank"
            rel="noopener noreferrer"
          > 
            <div className='flex gap-2 text-[#FF0000] text-[18px] flex items-center justify-center'>
               by nathally oliveira
  
            </div>
           
          </a>
        </div>
      </div>

      <div className="">
       <div className="text-[#FF0000]">
           <div className="text-[40px] flex flex-col items-center">
            <span>Juanzin 67: </span>
            <span>O terror dos liberais</span>
            </div>
       </div>

      </div>

      <div className="mb-10 grid text-[#FF0000] text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/habilidades"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Habilidades{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Veja as interesantes habilidades do jovem cabeça!
          </p>
        </a>

        <a
          href="https://github.com/JuanCoelho25"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            A Labuta Do Português{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Descubra os trabalhos do dev mais comunista de todos os tempos!
          </p>
        </a>

        <a
          href="https://youtu.be/qigIYJWsyWE"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Despertador Matinal{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Descubra o sergedo do divo para acordar todo dia motivado a derrubar o sistema!
          </p>
        </a>

        <a
          href="/novapasta"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Maior Defeito{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Veja a maior infelicidade na vida de Náthally Fernandes
          </p>
        </a>
      </div>
      
    </main>
  )
}
