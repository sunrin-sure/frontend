import { NextPage } from 'next'
import styled from 'styled-components'
import { Colors } from '../../styles/theme'

interface ButtonProps extends StyleProps {
    children: React.ReactNode
    onClick: () => void
}

interface StyleProps {
    width?: string
    BgColor?: boolean
}

const Container = styled.button<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 8px 16px;
    border: solid 1px ${Colors.black[700]};
    ${({ BgColor }) => BgColor ?
        `background-color: ${Colors.black[800]}; color: ${Colors.white[900]};`
        : `background-color: transparent; color: ${Colors.black[900]};`}
    cursor: pointer;
    transition: background-color .3s, color .3s;
    &:hover {
        ${({ BgColor }) => BgColor ?
        `background-color: ${Colors.black[900]};`
        : `background-color: ${Colors.black[900]}; color: ${Colors.white[900]};`}
    }
`

const Button: NextPage<ButtonProps> = ({ children, width, BgColor = false, onClick }) => {
    return (
        <Container width={width} BgColor={BgColor} onClick={onClick}>
            {children}
        </Container>
    )
}

export default Button