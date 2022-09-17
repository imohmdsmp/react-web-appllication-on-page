import logoMain from '../img/logo.webp'
import '../css/header.css'



function Logo(){
    return(
        <div className="col-auto">
            <figure className='logo'>
                <img src={logoMain} alt="" />
            </figure>
        </div>
    )
}

function List(){
    return(
    <div className="col-auto">
            <ul className='d-flex align-items-center menu'>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Blog</a></li>
        </ul>
    </div>
    )
}


export default function Header(){
    return(
    <header className="container-fluid bg-dark-blue">
        <div className="container px-5">
            <div className="row justify-content-between align-items-center py-3 bg-white rounded-1 px-5">
                <Logo />
                <List/>
            </div>  
        </div>
    </header>
    )
}