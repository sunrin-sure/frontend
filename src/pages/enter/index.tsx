import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'

// Component
import Layout from '../../components/layout'
import Inner from '../../components/layout/Inner'
import { BlockStyle } from '../../components/overrideStyle'
import { media } from '../../styles/media'
import { FontSizes } from '../../styles/theme'

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    width: 100%;
    ${media.mobile(css`
        width: 425px;
    `)}
    ${media.tabletM(css`
        width: 500px;
    `)}
`
const SectionTitle = styled.span`
    ${FontSizes.heading1};
`
const FormWrapper = styled.div``

const Enter: NextPage = () => {
    const router = useRouter()
    const { type } = router.query

    const isSignUp = type === 'signup'

    return (
        <Layout title={isSignUp ? '회원가입' : '로그인'}>
            <Inner>
                <Wrapper>
                    <BlockStyle>
                        <SectionTitle>로그인</SectionTitle>
                        <FormWrapper>
                            
                        </FormWrapper>
                    </BlockStyle>
                </Wrapper>
            </Inner>
        </Layout>
    )
}

export default Enter