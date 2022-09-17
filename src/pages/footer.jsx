import '../css/footer.css'

function SectionLeft(){
    return(
        <div className="col">
            <h3>About company</h3>
        </div>
    )
}

function SectionCenter(){
    return(
        <div className="col d-flex align-items-center">
            <div>
                <h3>Service</h3>
                <ul>
                    <li><a href="#">Web design</a></li>
                    <li><a href="#">Digital marketing</a></li>
                    <li><a href="#">It management</a></li>
                    <li><a href="#">Cloud services</a></li>
                    <li><a href="#">Machine learning</a></li>
                </ul>
            </div>
            <div>
                <h3>Useful link</h3>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
        </div>
    )
}

function SectionRight(){
    return(
        <div className="col">
            <h3>Contact us</h3>
            <label htmlFor="email"></label>
            <input type="text" id='email' />
            <div className="d-flex align-items-center justify-content-center">
                <div>
                <label htmlFor="check"></label>
                <input type="checkbox" id='check' />
                </div>
                <div>
                    <p>
                    Maecenas tempususcondime honcus sem quam libero
                    </p>
                </div>
            </div>
        </div>
    )
}


export default function Footer(){
    return(
        <footer className="container-fluid">
            <div className="container">
                <div className="row">
                    <SectionLeft />
                    <SectionCenter />
                    <SectionRight />
                </div>
            </div>
        </footer>
    )
}