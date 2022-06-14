import { NextPage } from 'next'
import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { Breakpoints } from '../../styles/theme'

interface Props {
    children: React.ReactNode
}

const Container = styled.div`
    max-width: ${Breakpoints.DesktopM}px;
    padding: 0;
    margin: 0 auto;
    ${media.mobile(css`
        padding: 0 20px;
    `)}
    ${media.tabletM(css`
        padding: 0 40px;
    `)}
`

const Inner: NextPage<Props> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Inner