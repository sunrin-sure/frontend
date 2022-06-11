import { NextPage } from 'next'

import styled from 'styled-components'
import { Colors, FontSizes } from '../../styles/theme'

import { FiHeart } from 'react-icons/fi'
import { useRouter } from 'next/router'

interface LikeProps {
    isLiked?: boolean
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    border: 1px solid ${Colors.black[200]};
    border-radius: 8px;
    overflow: hidden;
    transition: .3s transform;
    cursor: pointer;
    &:hover {
        transform: translateY(-2px);
        & img {
            transition: .3s ease-in-out transform;
            transform: scale(1.05);
        }
    }
`
const ProjectBoxTop = styled.div`
    position: relative;
`
const ProjectBoxBadge = styled.div`
    position: absolute;
    top: 8px;
    left: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 4px 10px;
    background-color: ${Colors.blue[500]};
`
const ProjectState = styled.span`
    ${FontSizes.caption}
    color: ${Colors.white[900]};
`
const ProjectBoxThumbNail = styled.div`
    display: inline-flex;
    overflow: hidden;
    width: 100%;
    max-height: 120px;
    height: 100%;
`
const ThumbNail = styled.img`
    width: 100%;
    max-height: 120px;
    height: 100%;
    object-fit: cover;
`
const ProjectBoxContentWrapper = styled.div`
    padding: 8px 16px;
`
const ProjectType = styled.p`
    ${FontSizes.caption}
    color: ${Colors.black[300]};
`
const ProjectTitle = styled.p`
    ${FontSizes.text}
    margin-top: 16px;
`
const ProjectBoxBottom = styled.div`
    padding: 0 8px 16px;
`
const ProjectBoxBottomWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 8px 0;
    border-top: 1px solid ${Colors.black[100]};
`
const ProjectCreator = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
const CreatorProfile = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100%;
`
const CreatorName = styled.a`
    ${FontSizes.caption}
    color: ${Colors.black[600]};
    transition: .3s color;
    &:hover {
        color: ${Colors.blue[600]};
        text-decoration: underline;
    }
`
const ProjectLikeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;   
    &:hover {
        
        color: ${Colors.blue[600]};
    }
`
const LikeButton = styled(FiHeart)<LikeProps>`
    color: ${({isLiked}) => isLiked ? `${Colors.blue[300]}` : 'transparents'};
`
const LikeCount = styled.span`

`

const ProjectBox: NextPage = () => {
    const router = useRouter()
    return (
        <Container>
            <ProjectBoxTop>
                <ProjectBoxThumbNail>
                    <ThumbNail src={'/images/block_thumbnail.jpg'} alt='project_thumbnail' />
                </ProjectBoxThumbNail>
                <ProjectBoxBadge>
                    <ProjectState>모집중</ProjectState>
                </ProjectBoxBadge>
            </ProjectBoxTop>
            <ProjectBoxContentWrapper>
                <ProjectType>프로젝트</ProjectType>
                <ProjectTitle>프로젝트 제목</ProjectTitle>
            </ProjectBoxContentWrapper>
            <ProjectBoxBottom>
                <ProjectBoxBottomWrapper>
                    <ProjectCreator>
                        <CreatorProfile src={'/images/default_profile.png'} alt='creator_profile' />
                        <CreatorName onClick={() => router.push('/people/userId')}>프로젝트 대표</CreatorName>
                    </ProjectCreator>
                    <ProjectLikeWrapper>
                        <LikeButton />
                        <LikeCount>10</LikeCount>
                    </ProjectLikeWrapper>
                </ProjectBoxBottomWrapper>
            </ProjectBoxBottom>
        </Container>
    )
}

export default ProjectBox