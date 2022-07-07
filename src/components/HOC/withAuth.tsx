import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export const withAuth = (gssp: GetServerSideProps) => {
    return async (ctx: GetServerSidePropsContext) => {
        const { req } = ctx

        const cookie = req.headers.cookie
        const token = cookie?.split(';').find((token) => token.includes('refresh_token'))

        if (!token) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/enter"
                  }
            }
        }

        return await gssp(ctx)
    }
}