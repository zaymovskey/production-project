import React, { Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from 'features/ThemeSwitcher/lib/useTheme'
import { classNames } from 'shared/lib/ClassNames/classNames'
import { AppRouter } from 'app/providers/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
