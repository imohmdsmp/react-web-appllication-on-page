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
    function HamMenu(event){
        let _li = document.querySelectorAll('.ham-menu ul li')
            if(event.target.getAttribute('data-menu') == 'open'){
                document.getElementsByClassName('ham-menu')[0].style.cssText='transform:translateX(0)'
                _li.forEach((index,item)=>{
                    index.style.transform='translateX(0)'
                })
            }else{
                document.getElementsByClassName('ham-menu')[0].style.cssText='transform:translateX(-100%)'
                document.querySelectorAll('.ham-menu ul li')[0].style.transform='translateX(-200%)'
                _li.forEach((index,item)=>{
                    index.style.transform='translateX(-200%)'
                })
            }
        }
    return(
        <>
            <header className="container-fluid bg-dark-blue d-none d-md-block">
                <div className="container px-5 py-5">
                    <div className="row justify-content-between align-items-center py-3 bg-white rounded-1 px-5">
                        <Logo />
                        <List/>
                    </div>  
                </div>
            </header>
            <div className='position-fixed bg-blue-main start-0 top-0 z-index-10 fz-40 m-4 border p-1 rounded d-md-none'>
                <i className='bi-list text-white d-flex' onClick={HamMenu} data-menu='open'></i>
            </div>
            <div className='ham-menu d-flex flex-column align-items-center justify-content-center'>
                <div>
                    <i className='bi-x text-white' onClick={HamMenu} data-menu='close'></i>
                </div>
                <ul className='p-0'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Pages</a></li>
                <li><a href='#'>Blog</a></li>
            </ul>
            </div>
        </>
    )
}