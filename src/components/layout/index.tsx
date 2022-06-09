
import Head from 'next/head'
import styled from 'styled-components'
import { Colors } from '../../styles/theme'

import Navbar from '../Navbar'

interface Props {
    children: React.ReactNode
    title?: string
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`
const Header = styled.header`
    position: sticky;
    background-color: ${Colors.white[900]};
`
const Main = styled.div`
    width: 100%;
    min-height: calc(100% - 64px);
`

const Layout = ({ children, title}: Props) => {
    return (
        <Container>
            <Head>
                <title>SURE | {title ? title : ''}</title>
            </Head>
            <Header>
                <Navbar />
            </Header>
            <Main>{children}</Main>
        </Container>
    )
}

export default Layout