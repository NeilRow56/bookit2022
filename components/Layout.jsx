import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children, title='Book Best Hotels for your holiday'}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content="Room booking Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className='flex flex-col h-screen'>
        <Header />
     
      <div className="bg-green-500 flex flex-grow">
        {children}
      </div>
        <Footer />
        </div>
    </>
  )
}

export default Layout
