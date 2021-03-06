import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { Colors } from '../../styles/theme'

import { FiMenu } from 'react-icons/fi'

// component
import Inner from '../layout/Inner'
import Button from '../button'
import ProfileDropdown from './ProfileDropdown'
import Drawer from '../drawer'

interface StyleProps {
	isActivated: boolean
}

const Container = styled.div`
    position: relative;
    height: 64px;
    display: flex;
	justify-content: space-between;
	padding: 0 10px;
	${media.mobile(css`
		padding: 0;
	`)}
`
const DrawerWrap = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
const DrawerBackground = styled.div`
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
`
const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
	gap: 10px;
	${media.tabletM(css`
		gap: 20px;
	`)}
`
const Menu = styled.div`
    display: flex;
	justify-content: center;
    align-items: center;
    background: ${Colors.white};
    cursor: pointer;
	${media.mobile(css`
		display: none;
	`)}
`
const MenuIcon = styled(FiMenu)`
	font-size: 32px;
`
const Logo = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const List = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    gap: 16px;
	${media.mobile(css`
		display: flex;
	`)}
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
	const { user, signedIn } = useSelector((state: any) => state.auth)
	const router = useRouter()

	const [isDrawerOpned, setIsDrawerOpned] = useState<boolean>(false)

	const handleShowMenu = () => {
		document.body.style.overflow = isDrawerOpned ? '' : 'hidden'
		setIsDrawerOpned(!isDrawerOpned)
	}

	return (
		<Inner>
			<Container>
				{isDrawerOpned && (
					<DrawerWrap>
						<DrawerBackground onClick={handleShowMenu} />
						<Drawer handleShowMenu={handleShowMenu} />
					</DrawerWrap>
				)}
				<NavWrapper>
					<Menu onClick={handleShowMenu}>
						<MenuIcon />
					</Menu>
					<Logo onClick={() => router.push('/')}>
						??????
					</Logo>
					<List>
						<Item
							onClick={() => { router.push('/') }}
							isActivated={router.pathname === '/'}>
							???
						</Item>
						<Item
							onClick={() => { router.push('/project') }}
							isActivated={router.pathname === '/project'}>
							????????????
						</Item>
						<Item
							onClick={() => { router.push('/member') }}
							isActivated={router.pathname === '/member'}>
							??????
						</Item>
					</List>
				</NavWrapper>
				<NavWrapper>
					{signedIn ? (
						<>
							<Button onClick={() => { router.push('/write?type=project') }} mobileDisplay='none'>???????????? ??????</Button>
							<ProfileDropdown user={user} />
						</>
					) : (
						<ButtonWrapper>
							<Button onClick={() => router.push('/enter')}>?????????</Button>
							<Button BgColor={true} onClick={() => router.push('/enter?type=signup')} mobileDisplay='none'>????????????</Button>
						</ButtonWrapper>
					)}
				</NavWrapper>
			</Container>

		</Inner>
	)
}

export default Navbar
