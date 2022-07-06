import axios from 'axios'

const host =
    process.env.NODE_ENV === 'development'
        ? 'https://sunrin-sure.herokuapp.com'
        : process.env.REACT_APP_API_HOST || 'https://sunrin-sure.herokuapp.com'
const axiosApi = axios.create({
    baseURL: host,
    withCredentials: true,
})

export default axiosApi