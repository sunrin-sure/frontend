import type { NextPage } from 'next'
import styled, { css } from 'styled-components'
import { FontSizes, Colors } from '../styles/theme'
import { media } from '../styles/media'
import Counter from '../components/Counter'

import Button from '../components/button'
import Layout from '../components/layout'

const Title = styled.h1`
  ${FontSizes.display1}
  color: ${Colors.red[600]};

  ${media.mobile(css`
    color: ${Colors.blue[600]};
    ${FontSizes.heading1}
  `)}

  ${media.tabletM(css`
    color: ${Colors.black[300]};
    ${FontSizes.heading3}
  `)}

  ${media.tabletL(css`
    color: ${Colors.blue[300]};
    ${FontSizes.text}
  `)}

  ${media.desktopS(css`
    color: ${Colors.black[900]};
    ${FontSizes.strong}
  `)}

  ${media.desktopM(css`
    color: ${Colors.red[300]};
    ${FontSizes.info}
  `)}
  
  ${media.desktopL(css`
    color: ${Colors.white[900]};
    ${FontSizes.small}
  `)}
`

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <p>hello</p>
      <Title>Title</Title>
      <Counter />
      <hr />
      <Button onClick={() => console.log("click")}>버튼</Button>
    </Layout>
  )
}

export default IndexPage
