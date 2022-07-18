// import type { NextPage } from 'next'
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout'
import { NextPageWithLayout } from './page'

// function Home(): NextPage {
function Home() {
  return <div>caca</div>
}

Home.getLayout = (page: NextPageWithLayout) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Home
