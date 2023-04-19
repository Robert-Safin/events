import { FC, ReactNode } from 'react'

import MainHeader from './main-header'
interface Props {
  children: ReactNode
}


const Layout: FC<Props> = (props) => {
  return (
    <>
      <MainHeader />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout
