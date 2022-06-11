import { NextPage } from 'next'
import styled from 'styled-components'
import { Breakpoints } from '../../styles/theme'

interface Props {
    children: React.ReactNode
}

const Container = styled.div`
    max-width: ${Breakpoints.DesktopM}px;
    padding: 0 40px;
    margin: 0 auto;
`

const Inner: NextPage<Props> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Inner