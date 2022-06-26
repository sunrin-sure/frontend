import type { AppProps } from 'next/app'

// redux
import withReduxSaga from 'next-redux-saga'
import wrapper from '../store'

import { GlobalStyle } from '../styles/globalStyle'

import axios from 'axios'
// import { BASE_URL } from '../utils/url'
// axios.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = true

function Sure({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}



export default wrapper.withRedux(withReduxSaga(Sure))