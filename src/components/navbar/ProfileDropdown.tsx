import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { Colors, FontSizes } from '../../styles/theme'

import { signOutAction } from '../../store/actions/authAction'
import { useDispatch } from 'react-redux'

import { UserProps } from '../../interface'

interface Props {
    user: UserProps
}

const Container = styled.div`
	position: relative;
`
const Profile = styled.div`
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
const DropDownMenu = styled.div`
	position: absolute;
    width: 200px;
    right: 0;
	top: 40px;
    background-color: ${Colors.white};
    border-radius: 8px;
    padding: 8px 0;
    border: 1px solid ${Colors.black[100]};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    animation: rotateMenu 400ms ease-in-out forwards;
    transform-origin: top center;
    @keyframes rotateMenu {
        0% {
            transform: rotateX(-90deg)
        }
        70% {
            transform: rotateX(20deg) 
        }
        100% {
            transform: rotateX(0deg) 
        }
    }
`
const DropDownItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DropDownLink = styled.a`
    display: block;
    width: 100%;
    padding: 8px 16px;
    cursor: pointer;
    &:hover {
        color: ${Colors.blue[600]};
        text-decoration: underline;
        background-color: ${Colors.grey[100]};
    }
`
const DropDownMobileLink = styled(DropDownLink)`
    display: block;
    ${media.mobile(css`
        display: none;
    `)}
`
const DropDownProfileLink = styled.a`
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${Colors.grey[100]};
    cursor: pointer;
    &:hover {
        color: ${Colors.blue[500]};
        background-color: ${Colors.grey[100]};
        text-decoration: underline;
    }
`
const UserName = styled.span`
    ${FontSizes.text}
`
const DetailText = styled.span`
    ${FontSizes.small}
`

const ProfileDropdown: NextPage<Props> = ({user}) => {
    const dispatch = useDispatch()
    const [openDropdown, setOpenDropdown] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const router = useRouter()

    const onOutsideClick = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setOpenDropdown(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', onOutsideClick)

        return () => {
            document.removeEventListener('mousedown', onOutsideClick)
        }
    })

    const LogoutOnClick = () => {
        dispatch(signOutAction())
    }

    return (
        <Container ref={ref}>
            <Profile onClick={() => { setOpenDropdown(!openDropdown) }}>
                <ProfileImg src={user.avatar} alt='profile' />
            </Profile>
            {openDropdown && (
                <DropDownMenu>
                    <DropDownProfileLink>
                        <UserName>{user.username}</UserName>
                        <DetailText>????????? ??????</DetailText>
                    </DropDownProfileLink>
                    <DropDownItem>
                        <DropDownMobileLink onClick={() => { router.push('/write?type=project') }}>
                            ???????????? ??????
                        </DropDownMobileLink>
                        <DropDownLink onClick={() => router.push('/setting')}>
                            ??????
                        </DropDownLink>
                        <DropDownLink onClick={LogoutOnClick}>
                            ????????????
                        </DropDownLink>
                    </DropDownItem>
                </DropDownMenu>
            )}
        </Container>
    )
}

export default ProfileDropdown
