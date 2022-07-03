import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { FiHeart } from 'react-icons/fi'

import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { Colors, FontSizes } from '../../styles/theme'

// Component
import Button from '../button'
import { PostBoxStyle } from '../../styles/overrideStyle'

interface LikeProps {
    isLiked?: boolean
}

const Container = styled(PostBoxStyle)`
    position: relative;
    flex-direction: column;
    padding: 16px;
`
const Profile = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
`
const UserName = styled.p`
    
`
const Field = styled.p`
    ${FontSizes.small}
    color: ${Colors.blue[300]};
    ${media.tabletM(css`
        ${FontSizes.caption}
    `)}
`
const TechWrapper = styled.div`
    margin: 8px 0;
    max-height: 60px;
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    overflow: hidden;
`
const TechTag = styled.div`
    display: inline-flex;
    color: ${Colors.black[600]};
    background-color: ${Colors.black[100]};
    padding: 4px 10px;
    border-radius: 8px;
    ${FontSizes.caption}
`
const LikeButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
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
const LikeIcon = styled(FiHeart)<LikeProps>`
    font-size: 24px;
    color: ${({ isLiked }) => isLiked ? `${Colors.blue[300]}` : 'transparents'};
`

const MemberBox: NextPage = () => {
    const router = useRouter()

    const Liked = (e: any) => {
        e.stopPropagation()
        console.log('liked')
    }

    return (
        <Container>
            <LikeButton onClick={Liked}>
                <LikeIcon />
            </LikeButton>
            <Profile src={'/images/default_profile.png'} alt='creator_profile' />
            <UserName>UserName</UserName>
            <Field>프론트엔드</Field>
            <TechWrapper>
                <TechTag>javascript</TechTag>
                <TechTag>React</TechTag>
                <TechTag>next.js</TechTag>
                <TechTag>styled-component</TechTag>
                <TechTag>styled-component</TechTag>
            </TechWrapper>
            <Button onClick={() => router.push('')}>제안하기</Button>
        </Container>
    )
}

export default MemberBox