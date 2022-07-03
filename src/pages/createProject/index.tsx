import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'

const CreateProject: NextPage = () => {
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

export default CreateProject