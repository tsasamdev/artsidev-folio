import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8" style={{background: 'radial-gradient(600px at 1179px 186px, rgba(29, 78, 216, 0.15), transparent 80%)'}}>
        <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute flex w-full max-w-7xl lg:px-8">
          <div className="w-full"/>
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
