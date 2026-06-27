import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import BackToTopButton from '@/components/ui/BackToTopButton'

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-svh flex-col bg-[#f2efea] font-sans text-neutral-900 dark:bg-[#141414] dark:text-neutral-100">
      <Header />
      <main className="flex flex-1 flex-col border-x border-neutral-300 dark:border-neutral-700">{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
