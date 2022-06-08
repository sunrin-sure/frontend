import { useRouter } from 'next/router'
import { FC } from 'react'
import Layout from '../../components/layout'

const Write: FC = () => {
    const router = useRouter()
    const { type } = router.query

    return (
        <Layout title='프로젝트 생성'>
            {type === 'project' && (
                <>
                    프로젝트 작성
                </>
            )}
        </Layout>
    )
}

export default Write