import Banner from '@/components/Banner'
import Cards from '@/components/Cards'
import NavBtn from '@/components/NavBtn'
import Quote from '@/components/Quote'
import Start from '@/components/Start'
import Main from './main'
import { getCharities } from '@/services/blockchain'
import { globalActions } from '@/store/globalSlices'
import { generateCharities } from '@/utils/fakeData'
import { CharityStruct, RootState } from '@/utils/type.dt'
import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Mail: NextPage<{ charitiesData: CharityStruct[] }> = ({ charitiesData }) => {
  const { charities } = useSelector((states: RootState) => states.globalStates)
  const dispatch = useDispatch()
  const { setCharities } = globalActions

  useEffect(() => {
    dispatch(setCharities(charitiesData))
  }, [dispatch, setCharities, charitiesData])

  return (
    <div>
      <Head>
        <title>Mail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className="h-10"></div>
      <Main />
      <div className="h-10"></div>
      <NavBtn />
    </div>
  )
}

export default Mail

export const getServerSideProps = async () => {
  const charitiesData: CharityStruct[] = await getCharities()
  return {
    props: { charitiesData: JSON.parse(JSON.stringify(charitiesData)) },
  }
}
