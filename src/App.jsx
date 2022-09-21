import Header from './pages/header'
import Body from './pages/body'
import Footer from './pages/footer'
import './css/master.css'
import './css/media.css'


export default function App(){
    return(
        <main className='container-fluid'>
            <Header />
            <Body />
            <Footer />
        </main>
    )
}