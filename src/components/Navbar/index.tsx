import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'

import { media } from '../../styles/media'
import Button from '../button'
import { useState } from 'react'
import { Breakpoints, Colors } from '../../styles/theme'

interface StyleProps {
	isActivated: boolean
}

const Container = styled.div`
    position: relative;
	max-width: ${Breakpoints.DesktopM}px;
    margin: 0 auto;
    height: 64px;
    padding: 0 40px;
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
const Profile = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: transparent;
	cursor: pointer;
`
const ProfileImg = styled.img`
	width: 36px;
	object-fit: cover;
	border-radius: 100%;
`

const Navbar: React.FC = () => {
	const [ openDropdown, setOpenDropdown] = useState(false)
	const router = useRouter()
	return (
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
						사람들
					</Item>
				</List>
			</NavWrapper>
			<NavWrapper>
				<Button onClick={() => { router.push('/write?type=project') }}>프로젝트 생성</Button>
				<Profile onClick={() => {setOpenDropdown(!openDropdown)}}>
					<ProfileImg src='/images/default_profile.png' alt='profile'/>
				</Profile>
			</NavWrapper>
		</Container>
	)
}

export default Navbar