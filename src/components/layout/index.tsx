
import Head from 'next/head'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Colors } from '../../styles/theme'

import Navbar from '../Navbar'

interface Props {
    children: ReactNode
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

const Layout = ({ children, title = '메인페이지' }: Props) => {
    return (
        <Container>
            <Head>
                <title>SURE | {title}</title>
            </Head>
            <Header>
                <Navbar />
            </Header>
            <Main>{children}</Main>
        </Container>
    )
}

export default Layout