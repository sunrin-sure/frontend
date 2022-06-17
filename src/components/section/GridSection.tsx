import { NextPage } from 'next'

import styled, { css } from 'styled-components'
import { media } from '../../styles/media'
import { FontSizes } from '../../styles/theme'
import { BlockStyle } from '../overrideStyle'

// Component
import SelectBox from '../select'

interface Props {
    children: React.ReactNode
    sectionTitle: string
    selectsList: { value: string, name: string }[][]
}
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
`
const ContentTitle = styled.span`
    ${FontSizes.heading2}
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
            <BlockStyle>
                <MainTop>
                    <SectionTitle>{sectionTitle}</SectionTitle>
                    <SelectWrapper>
                        {selectsList.map((selectList, index) =>
                            <SelectBox key={index} selectList={selectList} />
                        )}
                    </SelectWrapper>
                </MainTop>
            </BlockStyle>
            <BlockStyle>
                <MainTop>
                    <ContentTitle>검색 결과</ContentTitle>
                </MainTop>
                <Grid>
                    {children}
                </Grid>
            </BlockStyle>
        </>
    )
}

export default GridSection