import { Fragment } from 'react'
import '../css/body.css'
import AnimationImg1 from '../img/halfCircle2.webp'
import AnimationImg2 from '../img/halfCircle4.webp'
import FirstSecImg from '../img/humans6.webp'
import SeccondSecImg from '../img/womans.webp'
import ThirdSecImg from '../img/humans1.webp'
import faqSecImg from '../img/person4.webp'
import questionImg from '../img/question.webp'
import sliderImg from '../img/person1.webp'

////////////////////////////////////////// first section
function FirstSecL(){
    return(
        <div className='col-6'>
            <h4 className='color-blue-main'>Best it solution</h4>
            <h1>Creating a better IT solutions</h1>
            <p className='fw-normal mt-3 fz-20'>Dcidunt eget semper nec quam. Sed hendrerit morbi ac felis. Nunc egestas augue pellentesque</p>
            <div className='d-flex mt-5'>
                <a href="/home" className="btn text-white bg-primary d-flex align-items-center justify-content-center me-4">Get Started</a>
                <a href="/home" className="btn text-white d-flex align-items-center justify-content-center border-white hover-blue">Contact Us</a>
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
        <div className="col text-white bg-blue-main mw-400 d-flex align-items-center justify-content-center flex-column px-5">
            <h2 className='text-center'>We provide the best IT solution</h2>
            <p className='mt-4'>Vestibulum ante ipsum primis ibus orci luctus etultrices posuebilia rae Sed aliquam nisi quis porttitor gue elitrat euismod oplacer</p>
            <p>Rae Sed aliquam nisi quis aliquam Vestibulum ante ipsum primis ibus orci luctus etultrices posuebilia rae Sed aliquam nisi quis porttitor gue elitrat oplacer</p>
            <div className='d-flex mt-5'>
                <a href="/home" className="btn text-white bg-dark d-flex align-items-center justify-content-center me-4">Get Started</a>
                <a href="/home" className="btn text-white d-flex align-items-center justify-content-center border-white hover-blue ">Contact Us</a>
            </div>
        </div>
    )
}

function ForthSecR(){
    return(
        <div className="col d-flex align-items-center justify-content-center mw-570">
            <div className='row gy-2 me-1'>
                <div className="col-12 d-flex flex-column justify-content-center align-items-center bg-blue-glass w-270-p h-270-p text-white">
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
            <div className='row gy-2'>
            <div className="col-12 d-flex flex-column justify-content-center align-items-center bg-blue-glass w-270-p h-270-p text-white">
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
                <div className="row pt-3 mt-5 justify-content-evenly">
                    <ForthSecL />
                    <ForthSecR />
                </div>
            </div>
        </div>
    )
}


////////////////////////////////////////////////// Fifth section
function FifthSecL(){
    document.querySelectorAll('.dropdown-wrapper > div').forEach(btn=>{
        btn.addEventListener('click',()=>{
            console.log(btn.nextElementSibling)
            if(btn.nextElementSibling.clientHeight === 0){
                btn.nextElementSibling.style.maxHeight=btn.nextElementSibling.scrollHeight+'px'
            }else{
                btn.nextElementSibling.style.maxHeight=0;
            }
        })
    })

    return(
        <div className="col mw-500">
            <p className='color-blue-main fw-bold fz-18 mb-2'>Faq</p>
            <h3 className='fw-bolder fz-30'>Know more about our it solution</h3>
            <p className='color-gray mb-5'>Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque</p>
            <div className='dropdown-wrapper'>
                <div className='d-flex justify-content-between bg-light-white p-3 position-relative overflow-hidden'>
                    <span>Why we are?</span>
                    <i className='bi-chevron-down'></i>
                </div>
                <p className='bg-light-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum recusandae quia pariatur eveniet dolorum porro velit ea earum. Enim.
                </p>
                <div className='d-flex justify-content-between bg-light-white p-3 position-relative overflow-hidden'>
                    <span>What we do for you?</span>
                    <i className='bi-chevron-down'></i>
                </div>
                <p className='bg-light-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum recusandae quia pariatur eveniet dolorum porro velit ea earum. Enim.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum recusandae quia pariatur eveniet dolorum porro velit ea earum. Enim.
                </p>
                <div className='d-flex justify-content-between bg-light-white p-3 position-relative overflow-hidden'>
                    <span>100% data security</span>
                    <i className='bi-chevron-down'></i>
                </div>
                <p className='bg-light-white'>
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
            <div className="row align-items-center justify-content-evenly py-4">
                <FifthSecL />
                <FifthSecR />
            </div>
        </div>
    )
}

//////////////////////////////////////////// Sixth section 


function SixthSection(){

    // let wrapper = document.getElementsByName('slider-wrapper')[0]
    // let item = document.querySelectorAll('.slider-main > div')

    
    // function prev(){

    // }

    // function next(){
        
    // }

    return(
        <div className="container-fluid overflow-hidden my-5">
            <div className='slider-wrapper'>
                <div className='slider-main'>
                <div data-slide='1'>
                    <figure>1
                        <img src={sliderImg} alt="" />
                    </figure>
                </div>
                <div data-slide='2'>
                    <figure>2
                        <img src={sliderImg} alt="" />
                    </figure>
                </div>
                <div data-slide='3'>
                    <figure>3
                        <img src={sliderImg} alt=""  />
                    </figure>
                </div>
                <div data-slide='4'>
                    <figure>4
                        <img src={sliderImg} alt=""  />
                    </figure>
                </div>
                <div data-slide='5'>
                    <figure>5
                        <img src={sliderImg} alt=""  />
                    </figure>
                </div>
                <div data-slide='6'>
                    <figure>6
                        <img src={sliderImg} alt=""  />
                    </figure>
                </div>
                <div data-slide='7'>
                    <figure>7   
                        <img src={sliderImg} alt=""  />
                    </figure>
                </div>
                </div>

                <div className="slider-btn-parent">
                    <div className="slider-btn-left">
                        <i className='bi-chevron-left'></i>
                    </div>
                    <div className="slider-btn-right">
                        <i className='bi-chevron-right'></i>
                    </div>
                </div>
            </div>
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

