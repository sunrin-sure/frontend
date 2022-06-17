import { useRouter } from 'next/router'
import Link from 'next/link'

import styled from 'styled-components'
import { Colors } from '../../styles/theme'

interface StyleProps {
    isActivated: boolean
}

interface Props {
    handleShowMenu: () => void
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 250px;
    height: 100%;
    background: ${Colors.white};
`

const LogoWrapper = styled.a`
    display: block;
    margin: 64px 0 35px 16px;
`

const LinkList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const StyledLink = styled.a<StyleProps>`
    width: calc(100%-16px);
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 16px;
    cursor: pointer;
	color: ${({ isActivated }) => (isActivated ? Colors.blue[300] : Colors.black[900])};
	&:hover {
		color: ${Colors.blue[600]};
        background-color: ${Colors.grey[100]};
	}
`

const Drawer = ({ handleShowMenu }: Props) => {
    const router = useRouter()

    return (
        <Container>
            <Link href="/">
                <LogoWrapper>
                    로고
                </LogoWrapper>
            </Link>
            <LinkList>
                <Link href="/project">
                    <StyledLink
                        isActivated={router.pathname === '/project'} onClick={handleShowMenu}>
                        프로젝트
                    </StyledLink>
                </Link>
                <Link href="/member">
                    <StyledLink isActivated={router.pathname === '/member'} onClick={handleShowMenu}>
                        멤버
                    </StyledLink>
                </Link>
            </LinkList>
        </Container>
    )
}

export default Drawer