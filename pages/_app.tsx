import '../src/styles/css/index.css'
import type { AppProps } from 'next/app'
import { FunctionComponent } from 'react'


const _app: FunctionComponent<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

export default _app
