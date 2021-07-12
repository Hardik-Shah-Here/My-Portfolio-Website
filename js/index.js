const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

//Toggle Nav
burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
    if(link.style.animation)
        link.style.animation = ''
    else
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/9 + 0.3}s`;
    });

    //Burger Animation
    burger.classList.toggle('toggle');
});


const web_dev = document.querySelector('.web-dev');
const code = document.querySelector('.code');
const csi = document.querySelector('.csi');

var isWebDev = true;
var isCode = false;
var isCsi = false;
//console.log(web_dev);
//console.log(code);
//console.log(csi);

web_dev.addEventListener('click', (e)=>{
    //To prevent going to the top of the page
    e.preventDefault();
    if(!isWebDev)
    {
        web_dev.classList.add('selected');
        isWebDev = true;
        
        if(isCsi)
        {
            isCsi = false;
            csi.classList.remove("selected");
        }

        if(isCode)
        {
            isCode = false;
            code.classList.remove("selected");
        }
    }
});

code.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!isCode)
    {
        code.classList.add('selected');
        isCode = true;

        if(isCsi)
        {
            isCsi = false;
            csi.classList.remove("selected");
        }

        if(isWebDev)
        {
            isWebDev = false;
            web_dev.classList.remove("selected");
        }
    }
});

csi.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!isCsi)
    {
        csi.classList.add('selected');
        isCsi = true;

        if(isWebDev)
        {
            isWebDev = false;
            web_dev.classList.remove("selected");
        }

        if(isCode)
        {
            isCode = false;
            code.classList.remove("selected");
        }
    }
});
