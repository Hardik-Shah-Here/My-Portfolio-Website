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

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const h3_1 = document.querySelector('.h3-1');
const h3_2 = document.querySelector('.h3-2');
const h3_3 = document.querySelector('.h3-3');
const h3_4 = document.querySelector('.h3-4');
const h4 = document.querySelectorAll('.h4');


web_dev.addEventListener('click', (e)=>{
    //To prevent going to the top of the page
    e.preventDefault();
    if(!isWebDev)
    {
        web_dev.classList.add('selected');
        isWebDev = true;

        img1.src = "images/web-dev4.png";
        img2.src = "images/web-dev5.png";
        img3.src = "images/web-dev7.png";
        img3.style.objectFit = "cover";
        img4.src = "images/web-dev1.png";
        h3_1.innerText = "Ice Cream Parlot Project - Django";
        h3_2.innerText = "React Js Weather App";
        h3_3.innerText = "To Do List App in React.js";
        h3_4.innerText = "JavaScript Music Player";
        for(var i=0; i<4; i++)
            h4[i].innerText = "Web Development";
        
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

        img1.src = "images/code1.png";
        img2.src = "images/code2.png";
        img3.src = "images/code4.png";
        img3.style.objectFit = "contain";
        img4.src = "images/code3.png";
        h3_1.innerText = "Codechef";
        h3_2.innerText = "HackerRank";
        h3_3.innerText = "GeeksForGeeks";
        h3_4.innerText = "Github";
        for(var i=0; i<4; i++)
            h4[i].innerText = "Coding Profiles";

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

        img1.src = "images/csi-2.jpeg";
        img2.src = "images/csi-1.jpeg";
        img3.src = "images/csi-3.png";
        img3.style.objectFit = "cover";
        //img4.src = "images/code3.png";
        h3_1.innerText = "Talk To Leads";
        h3_2.innerText = "Django Webinar";
        h3_3.innerText = "Art of Living";
        //h3_4.innerText = "Github";
        for(var i=0; i<4; i++)
            h4[i].innerText = "CSI - Computer Society Of India";

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
