import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Layout({ children }) {
    return <div className={'layout'}>

        <Header />

        <Navbar />

        {children}

        <Footer />

    </div>
}
