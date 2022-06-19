import { NextPage } from "next"
import { useRouter } from "next/router"
import { useForm } from '../../hooks'
import styled, { css } from "styled-components"

import { FiUnlock, FiUserPlus } from 'react-icons/fi'
import { media } from "../../styles/media"
import { Colors, FontSizes } from "../../styles/theme"
import { BlockStyle } from "../../components/overrideStyle"

import authValid from '../../utils/valid/authValid'

// Component
import Layout from "../../components/layout"
import Inner from "../../components/layout/Inner"

interface InputProps {
    error: boolean
}
interface ButtonWrapperProps {
    justify: string
}

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
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
const Input = styled.input<InputProps>`
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
    position: relative;
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
    &:nth-child(n+2)::before {
        content: '';
        position: absolute;
        top: 0;
        right: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: 45px;
        border-radius: 1px;
        background-color: ${Colors.grey[400]};
    }
`
const ButtonText = styled.span`
    display: inline-block;
    margin-left: 8px;
`
const InputError = styled.span`
    ${FontSizes.caption}
    color: ${Colors.red[600]};
`

const Enter: NextPage = () => {
    const router = useRouter()
    const { type } = router.query
    const isSignUp = type === "signup"

    const initialValues = isSignUp ? { username: "", email: "", password: "", cf_password: "" } : { email: "", password: "" }
    const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
        initialValues,
        onSubmit: (values) => {
            console.log(values)
        },
        validate: authValid
    })

    console.log(!errors)

    return (
        <Layout title={isSignUp ? "회원가입" : "로그인"}>
            <Inner>
                <Wrapper>
                    <SectionTitle>{isSignUp ? "회원가입" : "로그인"}</SectionTitle>
                    <BlockStyle>
                        <Form onSubmit={handleSubmit} noValidate>
                            {isSignUp && (
                                <InputWrapper>
                                    <Label>이름</Label>
                                    <Input
                                        type="text"
                                        name="username"
                                        value={values.username || ""}
                                        onChange={handleChange}
                                        placeholder='이름'
                                        error={Boolean(errors.username)}
                                    />
                                    {errors.username && <InputError>{errors.username}</InputError>}
                                </InputWrapper>
                            )}
                            <InputWrapper>
                                <Label>이메일</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={values.email || ""}
                                    onChange={handleChange}
                                    placeholder='이메일'
                                    error={Boolean(errors.email)}
                                />
                                {errors.email && <InputError>{errors.email}</InputError>}
                            </InputWrapper>
                            <InputWrapper>
                                <Label>비밀번호</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={values.password || ""}
                                    onChange={handleChange}
                                    placeholder='비밀번호'
                                    error={Boolean(errors.password)}
                                />
                                {errors.password && <InputError>{errors.password}</InputError>}
                            </InputWrapper>
                            {isSignUp && (
                                <InputWrapper>
                                    <Label>비밀번호 재입력</Label>
                                    <Input
                                        type="password"
                                        name="cf_password"
                                        value={values.cf_password || ""}
                                        onChange={handleChange}
                                        placeholder='비밀번호 재입력'
                                        error={Boolean(errors.cf_password)}
                                    />
                                    {errors.cf_password && <InputError>{errors.cf_password}</InputError>}
                                </InputWrapper>
                            )}
                            {isSignUp ?
                                <FormButton type="submit" disabled={isLoading}>회원가입</FormButton>
                                :
                                <FormButton type="submit" disabled={isLoading}>로그인</FormButton>
                            }
                        </Form>
                        <ServeButtonWrapper justify={isSignUp ? 'flex-end' : 'space-between'}>
                            {!isSignUp && (
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
