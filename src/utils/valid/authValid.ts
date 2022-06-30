import { AuthProps } from '../../interface'

const validusername = (username: string) => {
	const re = /[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,10}/
	return re.test(username)
}
const validEmail = (email: string) => {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email)
}
const validPassword = (password: string) => {
	const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
	return re.test(password)
}

const authValid = ({ username, email, password, cf_password }: AuthProps) => {
	const errors: AuthProps = {}

	if (username !== undefined) {
		if (!username) {
			errors.username = '이름이 입력되지 않았습니다.'
		} else if (!validusername(username)) {
			errors.username = '입력된 이름이 유효하지 않습니다. (한글, 영어, 숫자 1~10자)'
		}
	}

	if (!email) {
		errors.email = '이메일이 입력되지 않았습니다.'
	} else if (!validEmail(email)) {
		errors.email = '입력된 이메일이 유효하지 않습니다.'
	}

	if (!password) {
		errors.password = '비밀번호가 입력되지 않았습니다.'
	} else if (!validPassword(password)) {
		errors.password = '입력된 비밀번호가 유효하지 않습니다. (영문 + 숫자 최소 6자)'
	}

	if (cf_password !== undefined) {
		if (password !== cf_password) {
			errors.cf_password = '비밀번호와 일치하지 않습니다.'
		}
	}

	return errors
}
export default authValid