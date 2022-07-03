import { NextPage } from 'next'

import styled, { css } from 'styled-components'
import { Colors, FontSizes } from '../../styles/theme'

import { FiBookmark } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { media } from '../../styles/media'
import { PostBoxStyle } from '../../styles/overrideStyle'

interface Props {
    projectId: string
}
interface LikeProps {
    isLiked?: boolean
}

const Container = styled(PostBoxStyle)`
    flex-direction: column;
`
const ProjectBoxTop = styled.div`
    position: relative;
`
const ProjectBoxBadge = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 6px 14px;
    background-color: ${Colors.black[900]};
`
const ProjectState = styled.span`
    ${FontSizes.caption}
    color: ${Colors.white};
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
    border-radius: 8px;
    object-fit: cover;
`
const ProjectBoxContentWrapper = styled.div`
    position: relative;
    padding: 8px 0 8px;
`
const ProjectType = styled.p`
    ${FontSizes.small}
    color: ${Colors.blue[300]};
    ${media.tabletM(css`
        ${FontSizes.caption}
    `)}
`
const ProjectTitle = styled.p`
    margin-top: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${FontSizes.text}
`
const ProjectBoxBottom = styled.div`
`
const ProjectBoxBottomWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 0 0;
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
    ${FontSizes.small}
    color: ${Colors.grey[500]};
    transition: .3s color;
    ${media.tabletM(css`
        ${FontSizes.caption}
    `)}
    &:hover {
        color: ${Colors.blue[600]};
        text-decoration: underline;
    }
`
const BookmarkButton = styled.div`
    position: absolute;
    right: 10px;
    transform: translateY(-100%);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.white};
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transform: background-color .3s, color .3s;
    &:hover {
        color: ${Colors.blue[600]};
    }
`
const BookmarkIcon = styled(FiBookmark)<LikeProps>`
    font-size: 20px;
    color: ${({ isLiked }) => isLiked ? `${Colors.blue[300]}` : 'transparents'};
`

const ProjectBox: NextPage<Props> = ({projectId}) => {
    const router = useRouter()

    const Bookmarked = (e: any) => {
        e.stopPropagation()
        console.log('liked')
    }
    return (
        <Container onClick={() => router.push(`/${projectId}`)}>
            <ProjectBoxTop>
                <ProjectBoxThumbNail>
                    <ThumbNail src={'/images/block_thumbnail.jpg'} alt='project_thumbnail' />
                </ProjectBoxThumbNail>
                <ProjectBoxBadge>
                    <ProjectState>모집중</ProjectState>
                </ProjectBoxBadge>
            </ProjectBoxTop>
            <ProjectBoxContentWrapper>
                <BookmarkButton onClick={Bookmarked}>
                    <BookmarkIcon />
                </BookmarkButton>
                <ProjectType>프로젝트</ProjectType>
                <ProjectTitle>프로젝트 제목</ProjectTitle>
            </ProjectBoxContentWrapper>
            <ProjectBoxBottom>
                <ProjectBoxBottomWrapper>
                    <ProjectCreator>
                        <CreatorProfile src={'/images/default_profile.png'} alt='creator_profile' />
                        <CreatorName onClick={() => router.push('/people/userId')}>프로젝트 대표</CreatorName>
                    </ProjectCreator>
                </ProjectBoxBottomWrapper>
            </ProjectBoxBottom>
        </Container>
    )
}

export default ProjectBox