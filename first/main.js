function NavCode(){

    gsap.from("li a",{
        y:60,
        opacity:0,
        // delay:0.3,
        duration:1,
        blur:1,
        stagger:-0.3,
        ease: "power3",   
 })

    let navLink = document.querySelectorAll("li a");
    navLink.forEach((li) => {
        let activeNav = li.querySelectorAll("span");
        li.addEventListener("mouseover", () => {
            gsap.from(activeNav,{
                y:100,
                opacity:0,
                color:"red",
                stagger:0.1,
                ease: "power3.out",
            })
        });
        // li.addEventListener("mouseleave", () => {
        //     let activeNav = li.querySelectorAll("span");
        //     gsap.to(activeNav,{
        //         y:0,
        //         opacity:1,
        //         stagger:0.3,
        //         ease: "power3.out",

        //     })
        // });

    });

    let navValue = ["work","Agency","Services","Archive","Insights","Contact"];
    let newArry =navValue.map((value)=>{
        let navWord = value.split("");
        let newValue = navWord.map((val)=>{
            //return a char 
            return `<span class="single-nav-char text-black">${val}</span>`;
        })
        return newValue;
    })
    navLink.forEach((value,key)=>{
        value.innerHTML = newArry[key].join("");
    })
}


function heroContainer(){
    let TextHero = document.querySelectorAll(".overflow-container-hero h1");
    TextHero.forEach((value)=>{
        let arryChar = value.textContent.split("");
        let newarry = arryChar.map((elme)=>{
            return `<span>${elme}</span>`
        })
        value.innerHTML = newarry.join("");
       let allspan =  value.querySelectorAll("span");
       console.log(allspan);
    gsap.from(allspan,{
     //    y:1,
        // color:"blue",
        opacity: 0,
        stagger:0.5,
        duration:2.5,
        delay:1,
        ease:"power3",
    })

    })
}
NavCode();
heroContainer();