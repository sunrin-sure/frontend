import type { AppProps } from 'next/app'
import axios from 'axios'

// redux
import withReduxSaga from 'next-redux-saga'
import { useDispatch } from 'react-redux'
import wrapper from '../store'

import { GlobalStyle } from '../styles/globalStyle'
import { useEffect } from 'react'
import { getTokenAction } from '../store/actions/authAction'

axios.defaults.withCredentials = true

function App({ Component, pageProps }: AppProps) {
	const dispatch = useDispatch()

	useEffect(() => {
		if (
		typeof window === 'object' && 
		JSON.parse(localStorage.getItem('first_login') || 'false')
		) {
			dispatch(getTokenAction())
		}
	}, [dispatch])
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default wrapper.withRedux(withReduxSaga(App))