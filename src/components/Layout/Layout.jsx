import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
    return (
        <>
            <Navbar />
            <section className="pt-15 pt-md-0 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
                <Outlet />
            </section>
            <Footer />
        </>
    )
}
