import { NextPage } from 'next'

import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { Colors, FontSizes } from '../../styles/theme'

interface Props {
    projectComponent: JSX.Element[]
    memberComponent: JSX.Element[]
}

const Container = styled.div`
    display: flex;
    gap: 16px;
`
const SectionTitle = styled.span`
    ${FontSizes.heading1};
    color: ${Colors.black[700]};
`
const ProjectWrapper = styled.div`
    width: 100%;
    margin-top: 16px;
    padding: 12px;
    background-color: ${Colors.white};
    border-radius: 8px;
    ${media.mobile(css`
        padding: 24px;
    `)}
    ${media.tabletM(css`
        dwidth: 66.66666667%;
    `)}
`
const MemberWrapper = styled.div`
    width: 33.33333333%;
    margin-top: 16px;
    padding: 24px 24px;
    background-color: ${Colors.white};
    border-radius: 8px;
    display: none;
    ${media.tabletL(css`
        display: block;
    `)}
`
const ProjectGrid  = styled.div`
    margin-top: 24px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    ${media.mobile(css`
        grid-template-columns: repeat(2, 1fr);
    `)}
    ${media.tabletM(css`
        grid-template-columns: repeat(3, 1fr);
    `)}
`
const MemberGrid = styled.div`
    margin-top: 24px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(1, 1fr);
`

const MainSection: NextPage<Props> = ({ projectComponent, memberComponent }) => {
    return (
        <Container>
            <ProjectWrapper>
                <SectionTitle>프로젝트</SectionTitle>
                <ProjectGrid>
                    {projectComponent}
                </ProjectGrid>
            </ProjectWrapper>
            <MemberWrapper>
                <SectionTitle>멤버</SectionTitle>
                <MemberGrid>
                    {memberComponent}
                </MemberGrid>
            </MemberWrapper>
        </Container>
    )
}

export default MainSection