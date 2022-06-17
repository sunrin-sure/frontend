import { NextPage } from 'next'
// Component
import Layout from '../../components/layout'
import Inner from '../../components/layout/Inner'
import MemberBox from '../../components/post/MemberBox'
import GridSection from '../../components/section/GridSection'


const Member: NextPage = () => {
    const fieldsList = [
        { value: 'all', name: '직무' },
        { value: 'planner', name: '기획자' },
        { value: 'designer', name: '디자이너' },
        { value: 'frontend', name: '프론트엔드 개발자' },
        { value: 'backend', name: '백엔드 개발자' },
    ]
    return (
        <Layout title='팀원 모집'>
            <Inner>
                <GridSection
                    sectionTitle='팀원 찾기'
                    selectsList={[fieldsList]}
                >
                    <MemberBox />
                    <MemberBox />
                    <MemberBox />
                    <MemberBox />
                </GridSection>
            </Inner>
        </Layout>
    )
}

export default Member