import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { Colors, FontSizes } from '../../styles/theme'

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

const ProfileDropdown: NextPage = () => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const router = useRouter()

    const onOutsideClick = useCallback((e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setOpenDropdown(false)
        }
    }, [ref, setOpenDropdown])

    useEffect(() => {
        document.addEventListener('mousedown', onOutsideClick)

        return () => {
            document.removeEventListener('mousedown', onOutsideClick)
        }
    })

    return (
        <Container ref={ref}>
            <Profile onClick={() => { setOpenDropdown(!openDropdown) }}>
                <ProfileImg src='/images/default_profile.png' alt='profile' />
            </Profile>
            {openDropdown && (
                <DropDownMenu>
                    <DropDownProfileLink>
                        <UserName>username</UserName>
                        <DetailText>프로필 보기</DetailText>
                    </DropDownProfileLink>
                    <DropDownItem>
                        <DropDownMobileLink onClick={() => { router.push('/write?type=project') }}>
                            프로젝트 생성
                        </DropDownMobileLink>
                        <DropDownLink onClick={() => router.push('/setting')}>
                            설정
                        </DropDownLink>
                        <DropDownLink onClick={() => router.push('/logout')}>
                            로그아웃
                        </DropDownLink>
                    </DropDownItem>
                </DropDownMenu>
            )}
        </Container>
    )
}

export default ProfileDropdown