let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let bar1 = document.querySelector("#e1");
let bar2 = document.querySelector("#e2");
let nome1 = "Sthefany Sther";
let nome2 = "Aspiring Developer & Content Creator";
let timeLetras1 = 100;


let timeBar = 300;

let countLetras1 = 0;
let countLetras2 = 0;
let countBar1 = 0;
let countBar2 = 0;

let interval1 = setInterval(() => {
    h1.textContent += nome1[countLetras1];
    countLetras1++;
    if (countLetras1 == nome1.length){
        bar1.style.display = "none";
        clearInterval(interval1);
        segundoTexto();
    
    }
}, timeLetras1);

function segundoTexto(){
    bar2.style.opacity = "1";
    let interval2 = setInterval(() => {
        h2.textContent += nome2[countLetras2];
        countLetras2++;
        if (countLetras2 == nome2.length){
            clearInterval(interval2);
            setInterval(() => {
                if (countBar2 % 2 == 0) {
                    bar2.style.opacity = "0";
                } else {
                    bar2.style.opacity = "1";
                }
                countBar2++;
            }, timeBar);
            
        }
           
    }, timeLetras1);
}

// document.addEventListener("scroll", function() {
//     var pageTop = window.pageYOffset || document.documentElement.scrollTop;
//     var pageBottom = pageTop + window.innerHeight;
//     var tags = document.querySelectorAll(".tag");
  
   
//     for (var i = 0; i < tags.length; i++) {
//       var tag = tags[i];
       
//       if (tag.getBoundingClientRect().top < pageBottom) {
//         tag.classList.add("visible");
//       } else {
//         tag.classList.remove("visible");
//       }
//     }

//     if(scrollY < 100)   {
//         tags[0].classList.remove("visible")
        
//     }
//   });
  

document.addEventListener("scroll", function() {
    var ids = ['about', 'projects']
    var elements = new Array();

    for (const id of ids) {
        elements.push(document.getElementById(id));
    }

    for (let element of elements) {
        const rect = element.getBoundingClientRect();

        // Obtém a altura da janela
        const windowHeight = window.innerHeight;

        // Calcula a posição vertical central da janela
        const windowCenter = windowHeight / 2;

        if (rect.top <= windowCenter && rect.bottom >= windowCenter) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    }

});

