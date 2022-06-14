import { NextPage } from 'next'
import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { Colors } from '../../styles/theme'

interface ButtonProps extends StyleProps {
    children: React.ReactNode
    onClick: () => void
}

interface StyleProps {
    width?: string
    BgColor?: boolean
    mobileDisplay?: string
}

const Container = styled.button<StyleProps>`
    display: ${({mobileDisplay}) => mobileDisplay};
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 8px 16px;
    border: solid 1px ${Colors.black[700]};
    ${media.mobile(css`
        display: flex;
    `)}
    ${({ BgColor }) => BgColor ?
        `background-color: ${Colors.black[800]}; color: ${Colors.white};`
        : `background-color: transparent; color: ${Colors.black[900]};`}
    cursor: pointer;
    transition: background-color .3s, color .3s;
    &:hover {
        ${({ BgColor }) => BgColor ?
        `background-color: ${Colors.black[900]};`
        : `background-color: ${Colors.black[900]}; color: ${Colors.white};`}
    }
`

const Button: NextPage<ButtonProps> = ({ children, width, BgColor = false, onClick, mobileDisplay = 'flex' }) => {
    return (
        <Container width={width} BgColor={BgColor} onClick={onClick} mobileDisplay={mobileDisplay}>
            {children}
        </Container>
    )
}

export default Button