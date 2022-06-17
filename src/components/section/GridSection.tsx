import { NextPage } from 'next'

import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { Colors, FontSizes } from '../../styles/theme'

// Component
import SelectBox from '../select'


interface Props {
    children: React.ReactNode
    sectionTitle: string
    selectsList: { value: string, name: string }[][]
}

const Container = styled.section`
    margin-top: 16px;
    padding: 12px;
    background-color: ${Colors.white};
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px;
    ${media.mobile(css`
        padding: 24px;
    `)}
`
const Grid = styled.div`
    display: grid;
    gap: 20px;
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
const MainTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
    ${media.tabletM(css`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `)}
`
const SectionTitle = styled.span`
    ${FontSizes.heading1} 
    color: ${Colors.black[700]};
`
const ContentTitle = styled.span`
    ${FontSizes.heading2}
    color: ${Colors.black[700]};
`
const SelectWrapper = styled.div`
    max-width: 150px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    ${media.mobile(css`
        max-width: none;
        gap: 16px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `)}
`

const GridSection: NextPage<Props> = ({ sectionTitle, selectsList, children }) => {
    return (
        <>
            <Container>
                <MainTop>
                    <SectionTitle>{sectionTitle}</SectionTitle>
                    <SelectWrapper>
                        {selectsList.map((selectList, index) =>
                            <SelectBox key={index} selectList={selectList} />
                        )}
                    </SelectWrapper>
                </MainTop>
            </Container>
            <Container>
                <MainTop>
                    <ContentTitle>검색 결과</ContentTitle>
                </MainTop>
                <Grid>
                    {children}
                </Grid>
            </Container>
        </>
    )
}

export default GridSection