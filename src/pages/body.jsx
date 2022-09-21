import { Fragment } from 'react'
import '../css/body.css'
import AnimationImg1 from '../img/halfCircle2.webp'
import AnimationImg2 from '../img/halfCircle4.webp'
import FirstSecImg from '../img/humans6.webp'
import SeccondSecImg from '../img/womans.webp'
import ThirdSecImg from '../img/humans1.webp'
import faqSecImg from '../img/person4.webp'
import questionImg from '../img/question.webp'
import React from 'react'


////////////////////////////////////////// first section
function FirstSecL(){
    return(
        <div className='col-md-6'>
            <h4 className='color-blue-main'>Best it solution</h4>
            <h1 className='text-center text-md-start'>Creating a better IT solutions</h1>
            <p className='fw-normal mt-3 fz-20 text-center text-md-center'>Dcidunt eget semper nec quam. Sed hendrerit morbi ac felis. Nunc egestas augue pellentesque</p>
            <div className='d-flex mt-5 justify-content-center justify-content-md-start'>
                <a href="/home" className="btn text-white bg-primary d-flex align-items-center justify-content-center me-4">Get Started</a>
                <a href="/home" className="btn text-white d-flex align-items-center justify-content-center border-white hover-blue">Contact Us</a>
            </div>
        </div>
    )
}


function FirstSecR(){
    return(
        <div className='col-md-6'>
            <figure className='mask-first overflow-hidden d-block position-relative mt-5 mt-md-0'>
                <img src={FirstSecImg} alt="main" className='w-100' />
            </figure>
        </div>
    )
}


function FirstSection(){
    return(
        <section className="container-fluid firstSection">
            <div className="container-md container-fluid">
            <div className="row align-items-center">
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
            <figure className='mask-seccond overflow-hidden d-block position-relative mb-5 mb-lg-0'>
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
            <div className="row align-items-center my-5 justify-content-center justify-content-lg-between">
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
            <figure className='mask-third overflow-hidden d-block position-relative mt-5 mt-lg-0'>
                <img src={ThirdSecImg} alt="main" className='w-100' />
            </figure>
        </div>
    )
}

function ThirdSection(){
    return(
        <div className='container mb-5 pb-5'>
            <div className="row justify-content-lg-between justify-content-center align-items-center">
                <ThirdSecL />
                <ThirdSecR />
            </div>
        </div>
    )
}


//////////////////////////////////// Fourth Section

function ForthSecL(){
    return(
        <div className="col-lg-6 text-white bg-blue-main mw-400 d-flex align-items-center justify-content-center flex-column p-5">
            <h2 className='text-center'>We provide the best IT solution</h2>
            <p className='mt-4'>Vestibulum ante ipsum primis ibus orci luctus etultrices posuebilia rae Sed aliquam nisi quis porttitor gue elitrat euismod oplacer</p>
            <p>Rae Sed aliquam nisi quis aliquam Vestibulum ante ipsum primis ibus orci luctus etultrices posuebilia rae Sed aliquam nisi quis porttitor gue elitrat oplacer</p>
            <div className='d-flex flex-column flex-md-row mt-5 justify-content-center'>
                <a href="/home" className="btn text-white bg-dark d-flex align-items-center justify-content-center me-md-4 mb-3 mb-md-0">Get Started</a>
                <a href="/home" className="btn text-white d-flex align-items-center justify-content-center border-white hover-blue ">Contact Us</a>
            </div>
        </div>
    )
}

function ForthSecR(){
    return(
        <div className="col d-flex flex-wrap align-items-center justify-content-center mw-570">
            <div className='row gy-2 me-1 justify-content-center justify-content-md-start mt-5'>
                <div className="col-12 d-flex flex-column justify-content-center align-items-center bg-blue-glass w-270-p h-270-p text-white me-md-2">
                    <i className='bi-slack color-blue-main fz-40'></i>
                        <h4 className='mt-2'>Web design</h4>
                        <p className='mt-3 fz-14 px-1 text-center'>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
                </div>
                <div className="col-12 d-flex flex-column justify-content-center align-items-center bg-blue-glass w-270-p h-270-p text-white">
                    <i className='bi-ui-checks-grid color-blue-main fz-40'></i>
                        <h4 className='mt-2'>App development</h4>
                        <p className='mt-3 fz-14 px-1 text-center'>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
                </div>
            </div>
            <div className='row gy-2 me-1 justify-content-center justify-content-md-start mt-1 mb-5 '>
            <div className="col-12 d-flex flex-column justify-content-center align-items-center bg-blue-glass w-270-p h-270-p text-white me-md-2">
                    <i className='bi-cloud-upload-fill color-blue-main fz-40'></i>
                        <h4 className='mt-2'>Cloud Service</h4>
                        <p className='mt-3 fz-14 px-1 text-center'>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
                </div>
                <div className="col-12 d-flex flex-column justify-content-center align-items-center bg-blue-glass w-270-p h-270-p text-white">
                    <i className='bi-exclude color-blue-main fz-40'></i>
                        <h4 className='mt-2'>It mangement</h4>
                        <p className='mt-3 fz-14 px-1 text-center'>Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum</p>
                </div>
            </div>
        </div>
    )
}

function FourthSection(){
    return(
        <div className="container-fluid d-flex justify-content-center forthsection position-relative">
            <div className='glass-papper'></div>
            <div className="container z-index-1">
                <div className="row pt-3 mt-5 justify-content-evenly mx-2">
                    <ForthSecL />
                    <ForthSecR />
                </div>
            </div>
        </div>
    )
}


////////////////////////////////////////////////// Fifth section

function FifthSecL(){

    function yamola(event){
        if((event.target.getAttribute('data-coll')) === 'off'){
            event.target.nextElementSibling.style.cssText='opacity:1;max-height:'+(event.target.nextElementSibling.scrollHeight)+'px'
            event.target.setAttribute('data-coll','on')
        }else{
            event.target.nextElementSibling.style.cssText='max-height:0;opacity:0'
            event.target.setAttribute('data-coll','off')
        }
    }
            return(
                <div className="col mw-500">
                    <p className='color-blue-main fw-bold fz-18 mb-2'>Faq</p>
                    <h3 className='fw-bolder fz-30'>Know more about our it solution</h3>
                    <p className='color-gray mb-5'>Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque</p>
                    <div className='dropdown-wrapper'>
                        <div className='d-flex justify-content-between bg-light-white p-3 position-relative overflow-hidden' onClick={yamola} data-coll='off'>
                            Why we are?
                            <i className='bi-chevron-down'></i>
                        </div>
                        <p className='bg-light-white'>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum recusandae quia pariatur eveniet dolorum porro velit ea earum. Enim.</span>
                        </p>
                        <div className='d-flex justify-content-between bg-light-white p-3 position-relative overflow-hidden' onClick={yamola} data-coll='off'>
                            What we do for you?
                            <i className='bi-chevron-down'></i>
                        </div>
                        <p className='bg-light-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum recusandae quia pariatur eveniet dolorum porro velit ea earum. Enim.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum recusandae quia pariatur eveniet dolorum porro velit ea earum. Enim.
                        </p>
                        <div className='d-flex justify-content-between bg-light-white p-3 position-relative overflow-hidden' onClick={yamola} data-coll='off'>
                            100% data security
                            <i className='bi-chevron-down'></i>
                        </div>
                        <p className='bg-light-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum recusandae quia pariatur eveniet dolorum porro velit ea earum. Enim.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum recusandae quia pariatur eveniet dolorum porro velit ea earum. Enim.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum recusandae quia pariatur eveniet dolorum porro velit ea earum. Enim.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum recusandae quia pariatur eveniet dolorum porro velit ea earum. Enim.
                        </p>
                    </div>
                </div>
            )
    }
function FifthSecR(){
    return(
        <div className="col-lg-4">
            <figure className='question-img'>
                <img src={questionImg} alt="" />
            </figure>
            <figure>
                <img src={faqSecImg} alt="" className='w-100' />
            </figure>
        </div>
    )
}

function FifthSection(){
    return(
        <div className="container my-5">
            <div className="row justify-content-evenly py-4">
                <FifthSecL />
                <FifthSecR />
            </div>
        </div>
    )
}

//////////////////////////////////////////// Sixth section 



export default function Body(){
    return(
        <Fragment>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
        </Fragment>
    )
} 

