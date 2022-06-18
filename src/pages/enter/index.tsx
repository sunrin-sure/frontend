import { NextPage } from "next"
import { useRouter } from "next/router"
import styled, { css } from "styled-components"

import { FiUnlock, FiUserPlus, FiUser } from 'react-icons/fi'
import { media } from "../../styles/media"
import { Colors, FontSizes } from "../../styles/theme"
import { BlockStyle } from "../../components/overrideStyle"

// Component
import Layout from "../../components/layout"
import Inner from "../../components/layout/Inner"

interface ButtonWrapperProps {
    justify: string
}

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 64px);
    ${media.mobile(css`
        width: 425px;
    `)}
`
const SectionTitle = styled.span`
    ${FontSizes.heading1};
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom:20px;
`
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
    ${FontSizes.info}
    padding-bottom: 4px;
`
const Input = styled.input`
    ${FontSizes.info}
    line-height: 20px;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid ${Colors.grey[300]};
    margin-top: 4px;
    &:focus {
        transition: box-shadow .3s;
        box-shadow:  0 2px 4px -1px rgb(0 0 0 / 0.1), 0 2px 2px -2px rgb(0 0 0 / 0.1);
    }
`
const FormButton = styled.button`
    ${FontSizes.info}
    color: ${Colors.white};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${Colors.blue[500]};
    border: none;
    &:hover {
        transition:background-color .3s, box-shadow .3s;
        background-color: ${Colors.blue[600]};
        box-shadow:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
`
const ServeButtonWrapper = styled.div<ButtonWrapperProps>`
    display: flex;
    justify-content: ${({ justify }) => justify};
`
const ServeButton = styled.button`
    ${FontSizes.text}
    color: ${Colors.grey[600]};
    background-color: ${Colors.white};
    border: none;
    border-radius: 8px;
    padding: 12px 16px;
    &:hover {
        transition: background-color .3s;
        background-color: ${Colors.grey[200]};
    }
`
const ButtonText = styled.span`
    display: inline-block;
    margin-left: 8px;
`

const Enter: NextPage = () => {
    const router = useRouter()
    const { type } = router.query

    const isSignUp = type === "signup"

    const hadleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <Layout title={isSignUp ? "회원가입" : "로그인"}>
            <Inner>
                <Wrapper>
                    <SectionTitle>{isSignUp ? "회원가입" : "로그인"}</SectionTitle>
                    <BlockStyle>
                        <Form onSubmit={hadleSubmit}>
                            {isSignUp && (
                                <InputWrapper>
                                    <Label>이름</Label>
                                    <Input />
                                </InputWrapper>
                            )}
                            <InputWrapper>
                                <Label>이메일</Label>
                                <Input />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>비밀번호</Label>
                                <Input />
                            </InputWrapper>
                            {isSignUp && (
                                <InputWrapper>
                                    <Label>비밀번호 재입력</Label>
                                    <Input />
                                </InputWrapper>
                            )}
                            {isSignUp ?
                                <FormButton type="submit">회원가입</FormButton>
                                :
                                <FormButton type="submit">로그인</FormButton>
                            }
                        </Form>
                        <ServeButtonWrapper justify={isSignUp ? 'flex-end' : 'space-between'}>
                            {isSignUp ? (
                                <ServeButton onClick={() => router.push('/enter')}><FiUser /><ButtonText>로그인</ButtonText></ServeButton>
                            ) : (
                                <>
                                    <ServeButton><FiUnlock /><ButtonText>비밀번호 찾기</ButtonText></ServeButton>
                                    <ServeButton onClick={() => router.push('/enter?type=signup')}><FiUserPlus /><ButtonText>회원가입</ButtonText></ServeButton>
                                </>
                            )}
                        </ServeButtonWrapper>
                    </BlockStyle>
                </Wrapper>
            </Inner>
        </Layout>
    )
}

export default Enter
