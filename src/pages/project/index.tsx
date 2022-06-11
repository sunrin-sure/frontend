import { NextPage } from 'next'

import styled, { css } from 'styled-components'
import { Colors, FontSizes } from '../../styles/theme'
import { media } from '../../styles/media'

// Component
import Layout from '../../components/layout'
import Inner from '../../components/layout/Inner'
import SelectBox from '../../components/select'
import ProjectBox from '../../components/post/ProjectBox'

const ContentHeader = styled.div`
    margin-top: 16px;
    padding: 40px 24px 16px;
    background-color: ${Colors.white[900]};
    border-radius: 8px;
`
const ContentTitle = styled.h2`
    ${FontSizes.heading2};
    color: ${Colors.black[700]};
`
const MainSection = styled.div`
    margin-top: 16px;
    padding: 24px 24px;
    background-color: ${Colors.white[900]};
    border-radius: 8px;
`
const SelectWrapper = styled.div`
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    ${media.mobile(css`
        gap: 16px;
        flex-direction: row;
    `)}
`
const ProjectGrid = styled.div`
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(1, 1fr);
    ${media.mobile(css`
        grid-template-columns: repeat(2, 1fr);
    `)}
    ${media.tabletM(css`
        grid-template-columns: repeat(3, 1fr);
    `)}
    ${media.desktopS(css`
        grid-template-columns: repeat(4, 1fr);
    `)}
`

const Project: NextPage = () => {
    const typeList = [
        { value: 'all', name: '대회/프로젝트' },
        { value: 'competition', name: '대회' },
        { value: 'project', name: '프로젝트' }
    ]
    const recruitList = [
        { value: 'all', name: '모집분야' },
        { value: 'planner', name: '기획자' },
        { value: 'designer', name: '디자이너' },
        { value: 'frontend', name: '프론트엔드 개발자' },
        { value: 'backend', name: '백엔드 개발자' },
    ]

    return (
        <Layout title='프로젝트 모집'>
            <Inner>
                <ContentHeader>
                    <ContentTitle>프로젝트 모집</ContentTitle>
                </ContentHeader>
                <MainSection>
                    <SelectWrapper>
                        <SelectBox selectList={typeList} />
                        <SelectBox selectList={recruitList} />
                    </SelectWrapper>
                    <ProjectGrid>
                        <ProjectBox />
                        <ProjectBox />
                        <ProjectBox />
                        <ProjectBox />
                    </ProjectGrid>
                </MainSection>
            </Inner>
        </Layout>
    )
}

export default Project