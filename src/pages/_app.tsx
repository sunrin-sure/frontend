import type { AppProps } from 'next/app'
import { wrapper } from '../store'

import { GlobalStyle } from '../styles/globalStyle'

function Sure({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default wrapper.withRedux(Sure)