import type { AppProps } from 'next/app'

// redux
import withReduxSaga from 'next-redux-saga'
import { useDispatch } from 'react-redux'
import wrapper from '../store'

import { GlobalStyle } from '../styles/globalStyle'
import { useEffect } from 'react'
import { getAuthUserAction, getTokenAction } from '../store/actions/authAction'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App({ Component, pageProps }: AppProps) {
	const dispatch = useDispatch()

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('USER')|| 'null')
		if (typeof window === 'object' && user) {
			dispatch(getAuthUserAction(user))
			dispatch(getTokenAction())
		}
	}, [dispatch])
	return (
		<>
			<ToastContainer hideProgressBar={false} autoClose={2000} limit={3} />
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default wrapper.withRedux(withReduxSaga(App))