
import { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { Colors } from '../../styles/theme'

import Navbar from '../navbar'

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
    top: 0;
    background-color: ${Colors.white};
    z-index: 50;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
const Main = styled.div`
    width: 100%;
    min-height: calc(100% - 64px);
`

const Layout :NextPage<Props> = ({ children, title}) => {
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