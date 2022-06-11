import { useRouter } from 'next/router'
import { NextPage } from 'next'

import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { Colors } from '../../styles/theme'

// component
import Inner from '../layout/Inner'
import Button from '../button'
import ProfileDropdown from './ProfileDropdown'

interface StyleProps {
	isActivated: boolean
}

const Container = styled.div`
    position: relative;
    height: 64px;
    display: flex;
    justify-content: center;
    ${media.mobile(css`
        justify-content: space-between;
    `)}
`
const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
	gap: 20px;
`
const Logo = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`
const Item = styled.a<StyleProps>`
    cursor: pointer;
	color: ${({ isActivated }) => (isActivated ? Colors.blue[300] : Colors.black[900])};
	&:hover {
		color: ${Colors.blue[600]};
	}
`
const ButtonWrapper = styled.div`
	display: flex;
	gap: 10px;
`

const Navbar: NextPage = () => {
	const router = useRouter()

	return (
		<Inner>
			<Container>
				<NavWrapper>
					<Logo onClick={() => router.push('/')}>
						로고
					</Logo>
					<List>
						<Item
							onClick={() => { router.push('/') }}
							isActivated={router.pathname === '/'}>
							홈
						</Item>
						<Item
							onClick={() => { router.push('/project') }}
							isActivated={router.pathname === '/project'}>
							프로젝트
						</Item>
						<Item
							onClick={() => { router.push('/people') }}
							isActivated={router.pathname === '/people'}>
							멤버
						</Item>
					</List>
				</NavWrapper>
				<NavWrapper>
					<Button onClick={() => { router.push('/write?type=project') }}>프로젝트 생성</Button>
					<ProfileDropdown />
					{/* <ButtonWrapper>
						<Button onClick={() => router.push('/enter?type=signin')}>로그인</Button>
						<Button BgColor={true} onClick={() => router.push('/enter?type=signup')}>회원가입</Button>
					</ButtonWrapper> */}
				</NavWrapper>
			</Container>
		</Inner>
	)
}

export default Navbar