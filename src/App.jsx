import { Analytics } from '@vercel/analytics/react'
import MainLayout from '@/components/layout/MainLayout'
import HomePage from '@/pages/HomePage'

function App() {
  return (
    <MainLayout>
      <HomePage />
      <Analytics />
    </MainLayout>
  )
}

export default App
