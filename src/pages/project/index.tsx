import { NextPage } from 'next'

// Component
import Layout from '../../components/layout'
import Inner from '../../components/layout/Inner'
import GridSection from '../../components/section/GridSection'
import ProjectBox from '../../components/post/ProjectBox'

const Project: NextPage = () => {
    const typeList = [
        { value: 'all', name: '대회/프로젝트' },
        { value: 'competition', name: '대회' },
        { value: 'project', name: '프로젝트' }
    ]
    const fieldsList = [
        { value: 'all', name: '모집분야' },
        { value: 'planner', name: '기획자' },
        { value: 'designer', name: '디자이너' },
        { value: 'frontend', name: '프론트엔드 개발자' },
        { value: 'backend', name: '백엔드 개발자' },
    ]

    return (
        <Layout title='프로젝트 모집'>
            <Inner>
                <GridSection
                    sectionTitle='프로젝트 모집'
                    selectsList={[typeList, fieldsList]}
                >
                    <ProjectBox projectId={''} />
                    <ProjectBox projectId={''} />
                    <ProjectBox projectId={''} />
                    <ProjectBox projectId={''} />
                </GridSection>
            </Inner>
        </Layout>
    )
}

export default Project