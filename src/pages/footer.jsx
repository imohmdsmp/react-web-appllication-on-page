import '../css/footer.css'

function SectionLeft(){
    return(
        <div className="col-md text-white">
            <h6 className=''>About company</h6>
            <address className='fz-13'>Address</address>
            <p className='fz-13'>Melbourne’s GPO 434 VIC 3074, Australia.</p>
        </div>
    )
}

function SectionCenter(){
    return(
        <div className="col-md d-flex align-items-center my-5 my-lg-0">
            <div className='me-5'>
                <h6 className='pb-3 text-white'>Service</h6>
                <ul className='list-on p-0 mx-3'>
                    <li><a href="#" className='text-white fz-13'>Web design</a></li>
                    <li><a href="#" className='text-white fz-13'>Digital marketing</a></li>
                    <li><a href="#" className='text-white fz-13'>It management</a></li>
                    <li><a href="#" className='text-white fz-13'>Cloud services</a></li>
                    <li><a href="#" className='text-white fz-13'>Machine learning</a></li>
                </ul>
            </div>
            <div>
                <h6 className='pb-3 text-white'>Useful link</h6>
                <ul className='list-on p-0 mx-3'>
                    <li><a href="" className='text-white fz-13'>About Us</a></li>
                    <li><a href="" className='text-white fz-13'>Team</a></li>
                    <li><a href="" className='text-white fz-13'>Portfolio</a></li>
                    <li><a href="" className='text-white fz-13'>Service</a></li>
                    <li><a href="" className='text-white fz-13'>Contact Us</a></li>
                </ul>
            </div>
        </div>
    )
}

function SectionRight(){
    return(
        <div className="col-md">
            <h6 className='text-white'>Contact us</h6>
            <label htmlFor="email" ></label>
            <input type="text" id='email' placeholder='Your Email' className='bg-transparent border-white px-3 py-2 text-white mt-3 mb-4' />
        </div>
    )
}


export default function Footer(){
    return(
        <footer className="container-fluid">
            <div className="container py-lg-5">
                <div className="row align-items-baseline justify-content-center py-5">
                    <SectionLeft />
                    <SectionCenter />
                    <SectionRight />
                </div>
            </div>
        </footer>
    )
}