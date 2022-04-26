import React, { useEffect , useRef, useState} from "react";
import {BsFillBagCheckFill , BsFillCreditCardFill} from "react-icons/bs"
import {AiOutlineArrowUp , AiOutlineSchedule} from "react-icons/ai";
import {FaTwitterSquare, FaInstagramSquare, FaLinkedin , FaWhatsappSquare, FaHammer} from "react-icons/fa"
import {GiPencilRuler , GiLargePaintBrush , GiPaintBucket } from "react-icons/gi";
import {   GrSchedule} from "react-icons/gr";
import {MdChair} from "react-icons/md"
import Aos from "aos";
import people3 from "./data2";
import "aos/dist/aos.css";
import "@fontsource/dancing-script";

const Index3 = () => {

  const A = useRef(null)
  const C = useRef(null)
  const D = useRef(null)
  const E = useRef(null)
  const F = useRef(null)
  const G = useRef(null)
  const H = useRef(null)
  const J = useRef(null)
const [a, setA] = useState('./web-port-img/21180475_tiger-running-to-camera_by_3danimals_preview.mp4')
const [b, setB] = useState("html")
const [c, setC] = useState("css")
const [d, setD] = useState("javascript")
const [e, setE] = useState("wordpress")
const [f, setF] = useState(" woocommerce")
const [g, setG] = useState("node js")
const [h, setH] = useState("  moongodb")
const [i, setI] = useState("bootstrap")
const [j, setJ] = useState("react js")
const [k, setK] = useState(" content manager")
const [l, setL] = useState("   shopify")
const [m, setM] = useState(" express js")
const [n, setN] = useState(" wix ")
const [p, setP] = useState(false);

   
const Anin = () => {

setP(!p)
  if (p) {
   D.current.style.animation = "none"
  }
  else {
    D.current.style.animation = " set4 20s linear infinite "
  }



}



  useEffect(() => {
    setTimeout(() => {
      setA('./web-port-img/man.mp4')
      C.current.style.display = "block"
       A.current.style.background = "rgba(0, 0, 0, 0.8)";
       A.current.style.animation = "none";
    }, 5700);
    Aos.init({duration:2500});
  })


const Reset1 = () => {
  setTimeout(() => {
    setB("wordpress")
    setC("node js")
    setD("react js")
    setE("shoplify")
    setG("bootstrap")
    setH("wix")
    setI("javascripth")
    setJ("html")
    setK("moongo db")
    setL("css")
    setM("content manager")
    setN("wocommance")
    setF("express js")
  }, 10000)
  return () => clearTimeout()
}


const Reset2 = () => {
  setTimeout(() => {
    setD("wordpress")
    setF("node js")
    setG("react js")
    setH("shoplify")
    setN("bootstrap")
    setM("wix")
    setK("javascripth")
    setI("html")
    setL("moongo db")
    setJ("css")
    setC("content manager")
    setE("wocommance")
    setB("express js")
  }, 15000)
  return () => clearTimeout()
}


const Reset3 = () => {
  setTimeout(() => {
    setI("wordpress")
    setJ("node js")
    setM("react js")
    setE("shoplify")
    setL("bootstrap")
    setK("wix")
    setF("javascripth")
    setC("html")
    setB("moongo db")
    setD("css")
    setF("content manager")
    setH("wocommance")
    setG("express js")
  }, 20000)
  return () => clearTimeout()
}


const Reset4 = () => {
  setTimeout(() => {
    setG("wordpress")
    setI("node js")
    setF("react js")
    setB("shoplify")
    setC("bootstrap")
    setL("wix")
    setH("javascripth")
    setN("html")
    setJ("moongo db")
    setD("css")
    setE("content manager")
    setK("wocommance")
    setM("express js")
  }, 25000)
  return () => clearTimeout()
}







const executeScroll11 = () => {
  J.current.style.display =  "none";

  A.current.scrollIntoView({behavior: 'smooth'})
  console.log("gerghj");
 
 
}
const executeScroll22 = () => {
  J.current.style.display =  "none";
  E.current.scrollIntoView({behavior: 'smooth'})

 
}
  
const executeScroll33 = () => {
  J.current.style.display =  "none";
  F.current.scrollIntoView({behavior: 'smooth'})
 
}
  
const executeScroll44 = () => {
  J.current.style.display =  "none";
  G.current.scrollIntoView({behavior: 'smooth'})
 
}
  
const executeScroll55 = () => {
  J.current.style.display =  "none";
  H.current.scrollIntoView({behavior: 'smooth'})
 
}

const Run = () => {
  J.current.style.display =  "block";
}
  
  


  return(
    <main className="main">

      <section className="section">



<div ref={J} className="slider">



<section className="slider__holder">


<ul className="slider__ul">

<li onClick={executeScroll11}    className="slider__li">
home
</li>
<li onClick={executeScroll22}   className="slider__li">
skills
</li>
<li onClick={executeScroll33}   className="slider__li">
about me
</li>
<li onClick={executeScroll44}  className="slider__li">
portifolio
</li>
<li  onClick={executeScroll55} className="slider__li">
contact form 
</li>




</ul>



</section>


</div>



      
      <div  ref={A} className="first-section">
     
     <section className="first-section__holder">
     <div className="first-section__video-holder">
     <video key={a} controls loop  muted  autoPlay  className="first-section__video">
      <source  type="video/mp4" src={a} />
  </video> 
       </div>
       <div  onClick={Run} className="first-section__line"></div>
 <img src={"./web-port-img/icons8-html-5-480.png"} alt="" className="first-section__img" />
 <img src={"./web-port-img/icons8-css3-480.png"} alt="" className="first-section__img1" />
 <img src={"./web-port-img/icons8-javascript-480.png"} alt="" className="first-section__img2" />
 <img src={"./web-port-img/icons8-react-480.png"} alt="" className="first-section__img3" />
 <img src={"./web-port-img/icons8-node-js-240.png"} alt="" className="first-section__img4" />
<div  className="first-section__main">
  
  <h2 data-aos="zoom-in" className="first-section__h2">patricia-son</h2>
  

  <div data-aos="zoom-in" className="first-section__set">
    <p className="first-section__p1">web deverloper</p>
    <p className="first-section__p1">web designer</p>
    <p className="first-section__p1">  virtual-assistant  </p>
 
  </div>
  <div className="first-section__icon-hol">
   

  </div>
  <p  ref={C} className="first-section__p4">welcome to my universe</p>
</div>
     </section>
      </div>
        


      

      <div ref={E} className="second-section">
            
            <section className="second-section__holder">

              

              <div className="second-section__2">
     
                   
                  <div  data-aos="fade-down"  className="second-section__2-head">

                  <h2 className="second-section__h2">
                  skills
                </h2>
                <h3  className="second-section__h3">
                  skills
                </h3>
                
                  </div>
       
               

                <ul className="second-section__ul">
                  <li data-aos="fade-right" className="second-section__li">
  {b}
                  </li>
                  <li data-aos="fade-down" className="second-section__li">
                 {c}
                  </li>
                  <li data-aos="fade-left" className="second-section__li">
                    {d}
                  </li>
                  <li data-aos="fade-right"  className="second-section__li">
                  {e}
                    </li>
                    <li data-aos="fade-down"  className="second-section__li">
                   {f}
                    </li>
                  <li data-aos="fade-left"  className="second-section__li">
                  {g}
                  </li>
                  <li data-aos="fade-right"  className="second-section__li">
                   {h}
                  </li>
                 
                    <li data-aos="fade-up"  className="second-section__li">
                    {n}
                    </li>
                  <li data-aos="fade-left"  className="second-section__li">
                  {i}
                  </li>
                  <li data-aos="fade-right"  className="second-section__li">
                 {j}
                  </li>
                  <li data-aos="fade-up"   className="second-section__li">
                     {k}
                  </li>
                  <li data-aos="fade-left"  className="second-section__li">
                  {l}
                  </li>
                  <li data-aos="fade-right"  className="second-section__li">
                     {m}
                  </li>
                  
                </ul>



              </div>
      

      
              <p data-aos="fade-up"  className="second-section__service">
        at your service
      </p>

            </section>
           

      </div>
     

     <div ref={F} className="third-section">
             <section className="third-section__holder">
            <div data-aos="fade-down"  className="third-section__1">
            <h2  className="third-section__h2">
about me
              </h2>
              <div className="third-section__line">
                
              </div>
            </div>
              


<div data-aos="zoom-in"  className="third-section__div">
  <p ref={D} className="third-section__p">
   hello , my name is akintan seyi dumebi. i'm a fullstack deverloper and web designer from west africa and i live in lagos state.
   i love coding and solving problems.
   i started web deverloping 2018 and always tried to improve from then, i have taken a lot of courses online and 
   mastered a lot of computer languages (html,css, javascript, react js, express js, node js, moongodb) and skills e.g (wordprss, wix , shopify, woocommerce).
   I am currently open for an entry-level or freelance jobs where i can put my abilities and skills as a Front-End Developer, web designer, back-end developer and also a problem solver to good use. I am creative and a hard worker and would love to add value through my work.
   I would also like to collaborate with other experienced developers on any interesting open source projects. I have a willingness to learn and i'm constantly looking to develop myself both as a developer and as a person in general.
     </p>
</div>

<button data-aos="fade-up"   onClick={Anin}  className="third-section__button">
  start/off animation
</button>

             </section>
     </div>

    <div ref={G} className="fourth-section">
            <section className="fourth-section__holder">
            <div data-aos="fade-down"  className="third-section__1">
            <h2 className="third-section__h2">
            Portifolio
              </h2>
              <div className="third-section__line ">
                
              </div>
            </div>

            <div className="fourth-section__main">
             
                     
                             {
         people3.map((e) => {

          const {id, image, name, p, git , web} = e;
             
        return (
          
          <div className="fourth-section__set">
          <section className="fourth-section__set-holder">
           <div data-aos="fade-right"  className="fourth-section__1">
           <section className="fourth-section__1-holder">

             <img src={image} alt="" className="fourth-section__img" />
           <button className="fourth-section__1-p">
<a href={web} className="fourth-section__link2">visit web</a>
           </button>
</section> 
           </div>

           <div className="fourth-section__2">

             <h2 data-aos="fade-down"  className="fourth-section__h2">
               {name}
             </h2>

             <p data-aos="fade-left"  className="fourth-section__p">
               {p}
             </p>

             <div className="fourth-section__but-holder">
               <button data-aos="fade-up"  className="fourth-section__but1">
                 <nav>
                 <a href={web} className="fourth-section__link2">visit web</a>
                 </nav>
                 
                </button>

                
               <button data-aos="fade-up"   className="fourth-section__but2">

               <nav>
                <a href={git} className="fourth-section__link2">visit github</a>
                </nav>
              </button>
             </div>
               
           </div>



          </section>
     </div>




        )









         })
                             }




              
            </div>




            </section>

    </div>





    <div  ref={H} className="contact">


    <section className="contact__holder">   

      <div className="contact__icon-hold">
       <a  className="contact__link2" href="https://twitter.com/akingz18"><FaTwitterSquare data-aos="fade-right"  className="contact__icon"> </FaTwitterSquare> </a>   
       <a  className="contact__link2" href=" https://wa.me/08071434751  ">     < FaWhatsappSquare data-aos="fade-left"  className="contact__icon"> </ FaWhatsappSquare></a>
       <a  className="contact__link2" href=" https://www.linkedin.com/in/akintan-seyi-dumebi-17949a234/ ">     <FaLinkedin data-aos="fade-down"  className="contact__icon">  </FaLinkedin></a> 
 
 <a  className="contact__link2" href="https://twitter.com/akingz18">    <FaInstagramSquare data-aos="fade-down"  className="contact__icon">   </FaInstagramSquare></a> 
 
      </div>

      <div data-aos="fade-down"  style={{marginTop: "3rem"}} className="third-section__1">
            <h2 className="third-section__h2">
contact form
              </h2>
              <div className="third-section__line ">
                
              </div>
            </div>

            <div className="contact__form">

        <input data-aos="fade-left"  placeholder="name" type="text" className="contact__input" />
        <input data-aos="fade-down"  placeholder="email" type="text" className="contact__input" />
        <textarea data-aos="fade-right"  className="contact__input2" placeholder="message" name="message" id="message" cols="30" rows="9"></textarea>        
<button type="submit"  className="contact__button">
  <a  className="contact__a" href="">submit</a>
</button>


            </div>



  






    </section>


    </div>



      </section>
    </main>
    
    )






}

export default  Index3;