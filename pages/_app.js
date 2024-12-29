import App, {Container} from 'next/app'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    console.log('pageProps', pageProps)

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return  <div>custom: <Component {...pageProps} /></div>
  }
}