import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { FiHeart } from 'react-icons/fi'

import styled from 'styled-components'
import { Colors, FontSizes } from '../../styles/theme'

interface LikeProps {
    isLiked?: boolean
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background: ${Colors.white};
    border-radius: 8px;
    overflow: hidden;
    transition: .3s transform;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
    &:hover {
        transform: translateY(-2px);
    }
`
const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`
const Profile = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 8px;
`
const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
`
const UserName = styled.span`
    ${FontSizes.caption}
`
const Field = styled.span`
    ${FontSizes.small}
    color: ${Colors.blue[300]};
`
const LikeButton = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    &:hover {
        color: ${Colors.blue[600]};
    }
`
const LikeIcon = styled(FiHeart) <LikeProps>`
    font-size: 16px;
    color: ${({ isLiked }) => isLiked ? `${Colors.blue[300]}` : 'transparents'};
`

const MemberSmallBox: NextPage = () => {
    const router = useRouter()

    const Liked = (e: any) => {
        e.stopPropagation()
        console.log('liked')
    }

    return (
        <Container onClick={() => router.push('')}>
            <ProfileWrapper>
                <Profile src={'/images/default_profile.png'} alt='creator_profile' />
                <ProfileInfo>
                    <UserName>UserName</UserName>
                    <Field>프론트엔드</Field>
                </ProfileInfo>
            </ProfileWrapper>
            <LikeButton onClick={Liked}>
                <LikeIcon />
            </LikeButton>
        </Container>
    )
}

export default MemberSmallBox