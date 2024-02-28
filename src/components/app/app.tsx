import { FC, useEffect, useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import styles from './app.module.css'

type ContextType = { windowWidth: number }

const App: FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(
    document.documentElement.clientWidth,
  )

  useEffect(() => {
    function handleWindowResizeTimeout() {
      setTimeout(() => {
        setWindowWidth(document.documentElement.clientWidth)
      }, 500)
    }

    window.addEventListener('resize', handleWindowResizeTimeout)
    return () => {
      window.removeEventListener('resize', handleWindowResizeTimeout)
    }
  }, [])
  return (
    <main className={styles.main}>
      <Outlet context={{ windowWidth } satisfies ContextType} />
    </main>
  )
}

export function useWindowWidth() {
  return useOutletContext<ContextType>()
}

export default App
