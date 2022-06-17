import type { NextPage } from 'next'

// Component
import Layout from '../components/layout'
import Inner from '../components/layout/Inner'
import MainSection from '../components/section/MainPageSection'
import MemberSmallBox from '../components/post/MemberSmallBox'
import ProjectBox from '../components/post/ProjectBox'

const IndexPage: NextPage = () => {
	const List = [
		{ value: 'all', name: '직무' },
		{ value: 'planner', name: '기획자' },
		{ value: 'designer', name: '디자이너' },
		{ value: 'frontend', name: '프론트엔드 개발자' },
		{ value: 'backend', name: '백엔드 개발자' },
	]

	return (
		<Layout title='메인페이지'>
			<Inner>
				<MainSection
					projectComponent={List.map((item) => <ProjectBox key={item.value} projectId={''} />)}
					memberComponent={List.map((item) => <MemberSmallBox key={item.value} />)}
				/>
			</Inner>
		</Layout>
	)
}

export default IndexPage
