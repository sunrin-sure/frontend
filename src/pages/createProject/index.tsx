import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { withAuth } from '../../components/HOC/withAuth'
import wrapper from '../../store'
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

export const getServerSideProps: GetServerSideProps = withAuth(wrapper.getServerSideProps(
    () => async () => {
        return {
            props: {}
        }
    }
))

export default CreateProject
