import { Fragment } from 'react'
import '../css/body.css'
import AnimationImg1 from '../img/halfCircle2.webp'
import AnimationImg2 from '../img/halfCircle4.webp'
import FirstSecImg from '../img/humans6.webp'
import SeccondSecImg from '../img/womans.webp'
import ThirdSecImg from '../img/humans1.webp'


////////////////////////////////////////// first section
function FirstSecL(){
    return(
        <div className='col-6'>
            <h4 className='color-blue-main'>Best it solution</h4>
            <h1>Creating a better IT solutions</h1>
            <p className='fw-normal mt-3 fz-20'>Dcidunt eget semper nec quam. Sed hendrerit morbi ac felis. Nunc egestas augue pellentesque</p>
            <div className='d-flex mt-5'>
                <a href="#" className="btn text-white bg-primary d-flex align-items-center justify-content-center me-4">Get Started</a>
                <a href="#" className="btn text-white d-flex align-items-center justify-content-center border-white hover-blue">Contact Us</a>
            </div>
        </div>
    )
}


function FirstSecR(){
    return(
        <div className='col-6'>
            <figure className='mask-first overflow-hidden d-block position-relative'>
                <img src={FirstSecImg} alt="main" className='w-100' />
            </figure>
        </div>
    )
}


function FirstSection(){
    return(
        <section className="container-fluid firstSection">
            <div className="container">
            <div className="row align-items-center px-4">
                    <FirstSecL />
                    <FirstSecR />
            </div>
            </div>
        </section>
    )
}



////////////////////////////////////////// second section
function SecondSecL(){
    return(
        <div className='col-lg mw-570'>
            <img className='up-down-anim' src={AnimationImg1} alt="" />
            <figure className='mask-seccond overflow-hidden d-block position-relative'>
                <img src={SeccondSecImg} alt="main" className='w-100' />
            </figure>
        </div>
    )
}

function SecondSecR(){
    return(
        <div className='col mw-500'>
            <h5 className='color-blue-main fw-bloder'>About Us</h5>
            <h2 className='fw-bolder'>We execute our ideas form the start to finish.</h2>
            <p className='color-gray my-4'>Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque   sed imquam nunullam quis ante. Etiam sit amet orci.</p>
            <p className='fw-bold'>Duis leo. Sed fringilla mauris siamet nibh. odales sagittis magna. Sed consequat</p>
            <div className='d-flex align-items-center justify-content-between'>
                <div>
                    <div className='color-blue-main fw-bolder fz-45'>20
                        <span className='fz-16 ms-2 color-gray'>Y</span>
                    </div>
                    <div className='fw-normal text-dark'>Experiences</div>
                </div>
                <div>
                    <div className='color-blue-main fw-bolder fz-45'>41 
                    <span className='fz-16 ms-2 color-gray'>m</span>
                    </div>
                    <div className='fw-normal text-dark'>Happy client</div>
                </div>
                <div>
                    <div className='color-blue-main fw-bolder fz-45'>20 
                    <span className='fz-16 ms-2 color-gray'>Y</span>
                    </div>
                    <div className='fw-normal text-dark'>Experiences</div>
                </div>
            </div>
        </div>
    )
}

function SecondSection(){
    return(
        <div className="container">
            <div className="row align-items-center my-5 justify-content-between">
                <SecondSecL />
                <SecondSecR />
            </div>
        </div>
    )
}


////////////////////////////////////////// third section
function ThirdSecL(){
    return(
        <div className='col mw-500'>
            <h5 className='color-blue-main fw-bloder'>About Us</h5>
            <h2 className='fw-bolder'>We execute our ideas form the start to finish.</h2>
            <p className='color-gray my-4'>Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque   sed imquam nunullam quis ante. Etiam sit amet orci.</p>
            <div className='d-flex'>
                <div className='me-4'>
                    <span className='d-flex align-items-center justify-content-center text-white bg-blue-main w-50-p h-50-p bdrs-one-way'>
                        <i className='bi-check fz-20'></i>
                    </span>
                </div>
                <div>
                    <h5>Flexible Solutions</h5>
                    <p>Maecenas tempus, tellus eget condime honcus sem quam semper</p>
                </div>
            </div>
            <div className='d-flex'>
                <div className='me-4'>
                <span className='d-flex align-items-center justify-content-center text-white bg-blue-main w-50-p h-50-p bdrs-one-way'>
                        <i className='bi-clock fz-20'></i>
                    </span>
                </div>
                <div>
                    <h5>Flexible Solutions</h5>
                    <p>Maecenas tempus, tellus eget condime honcus sem quam semper</p>
                </div>
            </div>
        </div>
    )
}

function ThirdSecR(){
    return(
        <div className='col-lg mw-570 position-relative'>
            <img className='down-up-anim' src={AnimationImg2} alt="" />
            <figure className='mask-third overflow-hidden d-block position-relative'>
                <img src={ThirdSecImg} alt="main" className='w-100' />
            </figure>
        </div>
    )
}

function ThirdSection(){
    return(
        <div className='container mb-5 pb-5'>
            <div className="row justify-content-between align-items-center">
                <ThirdSecL />
                <ThirdSecR />
            </div>
        </div>
    )
}


//////////////////////////////////// Fourth Section

function ForthSecL(){
    return(
        <div className="col">
            <h2>We provide the best IT solution</h2>
        </div>
    )
}

function ForthSecR(){
    return(
        <div className="col d-flex align-items-center justify-content-center">
            <div className='row'>
                <div className="col-12">Web design</div>
                <div className="col-12">Web design</div>
            </div>
            <div className='row'>
                <div className="col-12">Web design</div>
                <div className="col-12">Web design</div>
            </div>
        </div>
    )
}

function FourthSection(){
    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <ForthSecL />
                    <ForthSecR />
                </div>
            </div>
        </div>
    )
}


////////////////////////////////////////////////// Fifth section
function FifthSecL(){
    return(
        <div className="col">
            <p>FAQ</p>
            <h3>Know more about our it solution</h3>
            <p>Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque</p>
            <div className='dropdown-create'>

            </div>
        </div>
    )
}

function FifthSecR(){
    return(
        <div className="col">
            <figure>
                <img src="" alt="" />
            </figure>
        </div>
    )
}

function FifthSection(){
    return(
        <div className="container">
            <div className="row">
                <FifthSecL />
                <FifthSecR />
            </div>
        </div>
    )
}

//////////////////////////////////////////// Sixth section 


////////////////////    SLIDER
function SixthSection(){
    return(
        <div className="container-fluid">
            
        </div>
    )
}

export default function Body(){
    return(
        <Fragment>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
                <SixthSection />
        </Fragment>
    )
} 

