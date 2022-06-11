import { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Colors } from '../../styles/theme'

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
    width: 150px;
    right: 0;
	top: 40px;
    background-color: white;
    border-radius: .5rem;
    padding: .5rem 0;
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
    padding: .5rem 1rem;
    cursor: pointer;
    &:hover {
        color: ${Colors.blue[600]};
        text-decoration: underline;
    }
`

const ProfileDropdown: NextPage = () => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const router = useRouter()

    useEffect(() => {
        document.addEventListener('mousedown', onOutsideClick)

        return () => {
            document.removeEventListener('mousedown', onOutsideClick)
        }
    })

    const onOutsideClick = useCallback((e: any) => {
        if (!ref.current) return
        if (ref.current.contains(e.target)) return
        setOpenDropdown(false)
    }, [])

    return (
        <Container>
            <Profile onClick={() => { setOpenDropdown(!openDropdown) }} ref={ref}>
                <ProfileImg src='/images/default_profile.png' alt='profile' />
            </Profile>
            {openDropdown && (
                <DropDownMenu onClick={() => { setOpenDropdown(!openDropdown) }} ref={ref}>
                    <DropDownItem>
                        <DropDownLink onClick={() => router.push('/people/username')}>
                            내프로필
                        </DropDownLink>
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