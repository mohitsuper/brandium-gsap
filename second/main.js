// function locamotiveScroll(){
    
//     let scroll = new locamotiveScroll({
//         el: document.querySelector('.main'),
//         smooth:true,
//     });
    
// }
// locamotiveScroll();
function movingCursor(){
    let main = document.querySelector(".main");
    let movingCursor = document.querySelector(".moving-cursor");
    main.addEventListener("mousemove",(val)=>{
        gsap.to(movingCursor,{
            x:`${val.x}`,
            opacity:1,
            y:`${val.y}`,
            ease:"power2",
            // duration:0.02,
        })
    })
    main.addEventListener("mouseleave",(val)=>{

        gsap.to(movingCursor,{
            x:`${val.x}`,
            y:`${val.y}`,
            opacity:0,
            ease:"power2",
            // duration:0.02,
        })
    })

    let Wordcard = document.querySelectorAll(".word-card");
    Wordcard.forEach((value)=>{
        value.addEventListener("mousemove",()=>{
            let worktext = value.querySelector(".work-text h3");
            movingCursor.innerHTML =
            `<div class="moving">
            <h1>${worktext.textContent}</h1>
            <h1>${worktext.textContent}</h1>
            <h1>${worktext.textContent}</h1>
            </div>
            <div class="moving">
            <h1>${worktext.textContent}</h1>
            <h1>${worktext.textContent}</h1>
            <h1>${worktext.textContent}</h1>
            </div>
            <div class="moving">
            <h1>${worktext.textContent}</h1>
            <h1>${worktext.textContent}</h1>
            <h1>${worktext.textContent}</h1>
            </div>
            `;
            movingCursor.classList.add("work-cursor");
            gsap.to(movingCursor,{
                width: "10rem",
                height: "2rem",
                borderRadius: "5rem",
                ease: "power2.out",
                duration: 0.2
            })
        })


         

        value.addEventListener("mouseleave",()=>{
            movingCursor.classList.remove("work-cursor");
            movingCursor.innerHTML ="";
            gsap.to(movingCursor,{
                width: "1rem",
                height: "1rem",
                borderRadius: "50%",
                ease: "power2.out",
                duration: 0.2
         })
        })
    })

}
movingCursor()
function Navbar(){

    let NavLink = document.querySelectorAll("li a");
    NavLink.forEach((value)=>{
        let NavChar = value.textContent.split("");
        value.innerHTML = NavChar.map((elem)=>{
            return `<span>${elem}</span>`
        }).join("");
    })
    let span = document.querySelectorAll("a span");
    gsap.from(span,{
            y:20,
            stagger:0.02,
            duration:0.5,
            delay:0.5,
            ease:"power2.out",
            opacity:0,
    })
    
    
    let NavLinkLi = document.querySelectorAll("ul li");
    
    NavLinkLi.forEach((elem)=>{
        elem.addEventListener("mouseenter",()=>{
            let Navspan = elem.querySelectorAll(".overlay-nav span");
            gsap.from(Navspan,{
                y:20,
            stagger:0.05,
            duration:0.5,
            delay:0.05,
            ease:"power2.out",
            opacity:0,
            })
            
        })
    
    })

}    
Navbar()
function HeroSection(){
    let heroText = document.querySelectorAll('.overlay-hero-text h1');
    gsap.from(heroText,{
        y:500,
        delay:1,
        opacity:0,
        duration:1,
        stagger:0.03,
        ease:"power3",
    })
}
HeroSection();

function secondSection(){
    let h1text = document.querySelector(".second-text h1");
    let h1Char = h1text.textContent.split("");
    h1text.innerHTML = h1Char.map((value)=>{
        if(value == " ") return " ";
        return `<span>${value}</span>`;
    }).join("")
    let span = document.querySelectorAll(".second-text h1 span");
    let tl = gsap.timeline(
        {scrollTrigger: {
            trigger: ".second-section",
            scroller: "body",
            start: "top 50%",
            // end: "top 20%",
            toggleActions: "play reverse play reverse" // this enables reverse animation
        }
    });
    tl.to(".logo .st002",{
        fill:"#ffffff",
    })
    tl.to("nav",{
        transform: "scale(0.8)",
    })

    tl.to(".email",{
        color:"white",
    })
    tl.from(span,{
        y:50,
        opacity:0,
        stagger:0.01,
        ease:"power2.out",
        duration:1,
        delay:0.04,// final color

    });



}
secondSection()

function StringSvg(){
    // let svg = document.querySelector(".string svg");
    let stringDiv = document.querySelectorAll(".string");
    let svgPath = document.querySelectorAll(".string svg path");
    stringDiv.forEach((elem)=>{
        elem.addEventListener("mouseover", (e) => {
            let bounds = elem.getBoundingClientRect();
            let relX = e.clientX - bounds.left;
            let relY = e.clientY - bounds.top;
            if(relX<=300 || relY<=300){
    
                let newPath = `M 100 150 Q ${relX} ${relY}, 1200 150`;
                gsap.to(svgPath, {
                    attr: { d: newPath },
                    ease: "elastic.out(1, 0.3)",
                    duration: 1.5
                });
            }
        });

        elem.addEventListener("mouseleave", () => {
            let defaultPath = `M 100 150 Q 150 150, 1200 150`;
            gsap.to(svgPath, {
                attr: { d: defaultPath },
                ease: "elastic.out(1, 0.3)",
                duration: 1.5
            });
        });
    })

}

StringSvg()


function FeatureText(){
    let Featureh1 = document.querySelectorAll(".heading-animtion-text");
    Featureh1.forEach((value)=>{
        let h1Char = value.textContent.split("");
        console.log(h1Char)
        value.innerHTML = h1Char.map((value)=>{
            if(value==" ") return " ";
            return `<span>${value}</span>`;
        }).join("")
        gsap.from(value.querySelectorAll("span"),{
            y:100,
            opacity:0,
            duration:0.7,
            ease:"power2.out",
            stagger:0.08,
            scrollTrigger:{
                trigger:value,
                scroller:"body",
                // markers:true,
                start:"top 60%",
            }
        })
    })
}
FeatureText();


function ProjectText(){
  let projectText = document.querySelector(".project-text h3");
  let h1Char = projectText.textContent.split("");
    projectText.innerHTML = h1Char.map((value)=>{
        if(value == " ") return " ";
        return `<span class="inline-block">${value}</span>`;
    }).join("")
  gsap.from(".project-text h3 span", {
    y: 50,
    opacity: 0,
    ease: "power3",
    stagger: 0.01,
    scrollTrigger: {
      trigger: ".project-text",
      scroller: "body",
      start: "top 50%",
    //   toggleActions:"play revese",
    toggleActions: "play reverse play reverse" // this enables reverse animation
    //   markers: true
    }
  });
}
ProjectText();

function productCard(){
    let productCardSlide = document.querySelectorAll(".product-card-slide");
    let productImgCursor = document.querySelector(".product-img-cursor");
    productCardSlide.forEach((value)=>{
        let productImage = value.getAttribute("data-product-img");
        console.log(productImage)
        value.addEventListener("mousemove",(elem)=>{
            gsap.to(productImgCursor,{
                backgroundImage:`url('${productImage}')`,
                x:elem.x,
                y:elem.y,
                // scaleX: (elem.x)/900,   // horizontal size
                // scaleY: (elem.y)/900,   // vertical size
                opacity:1,
                transform: `scale(1.2)`,
             ease: "elastic.out(1,0.3)",            
            })
        })
        value.addEventListener("mouseleave",(elem)=>{
            gsap.to(productImgCursor,{
                x:0,
                y:0,

                opacity:0,
                duration:2.5,
                ease: "elastic.out(1,0.3)",            
          })
        })
    })
}
productCard();

function NewsSection(){
    let newsSection = document.querySelector(".news");
    let newCard = document.querySelectorAll(".news .news-card");
    let newCardCursor =document.querySelector(".new-card-cursor");
    newCard.forEach((card, index) => {
        card.addEventListener("mousemove", (elem) => {
        let img = card.getAttribute('news-data-image');
        gsap.to(newCardCursor, {
            x:elem.x,
            y:elem.y,
            opacity:1,
            backgroundImage:`url(${img})`,
        })
        if(index==0){
            gsap.to(newsSection, {
                backgroundColor:"#F7D6E6",
            });
            if(card.style.color =="black"){
                gsap.to(card,{
                    color:"gray",
                })
            }
            else{
                gsap.to(card,{
                    color:"black",
                })
            }
        }
        else{
            gsap.to(newsSection, {
                backgroundColor:"#B4B4FF",
                
            });
            if(card.style.color =="black"){
                gsap.to(card,{
                    color:"gray",
                })
            }
            else{
                gsap.to(card,{
                    color:"black",
                })
            }       
         }
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(newsSection, {
            backgroundColor: "#F9F7F4", // ya original color
        });
        gsap.to(card,{
            color:"#000",
        })
        gsap.to(newCardCursor, {
            x:0,
            y:0,
            opacity:0,
        })
    });

});
}
NewsSection()

function MovingTextGreen() {
  let movingText = document.querySelectorAll(".Play-text .moving-text");
  let arrow = document.querySelectorAll(".arrow");

  // Scroll-based arrow animation
  gsap.to(arrow, {
    rotation: 180,        // Smoother and proper rotate
    duration: 1.5,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: ".Play-text",
      scroller: "body",
    //   markers: true,      // Remove in production
      start: "top 80%",
      end: "top 60%",
      scrub: true,        // Typo fixed (was "scurb")
      toggleActions: "play reverse play reverse"
    }
  });

  // Smooth continuously moving text animation
  gsap.to(movingText, {
    xPercent: -100,
    repeat: -1,
    ease: "linear",
    duration: 20
  });
}

MovingTextGreen();