import Navbar from '../components/Navbar'

export default function MainLayout({ children, drawerItems }) {
  return (
    <>
      <Navbar drawerItems={drawerItems} />
      <main>{children}</main>
    </>
  )
}