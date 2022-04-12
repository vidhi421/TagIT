function run(){

    let htmlcode=document.querySelector(" .editor #htmlcon").value;
    let csscode= "<style>" + document.querySelector(" .editor #csscon").value + "</style>";
    let jscode=document.querySelector(" .editor #jscon").value;
    let output= document.querySelector(" .editor #resultcon");

    output.contentDocument.body.innerHTML = htmlcode + csscode ;
    output.contentWindow.eval(jscode);
}

let sel=document.querySelectorAll(".btn");
for(let i=0;i<sel.length;i++)
{
       sel[i].addEventListener('click', function(){
       this.classList.toggle("selected");
       var containerId = "#" + this.id + "con";

       document.querySelector(containerId).classList.toggle("hidden");
       document.querySelector(containerId).classList.toggle("nh");

        let con=document.querySelector('#container');
        let heightcon=con.offsetHeight;
        let wh=window.innerHeight;
        let he=document.getElementsByClassName("panel");
        for(let i=0;i<he.length;i++)
        {
            he[i].style.height=((wh - heightcon)+"px");
        }

    
        
 });
}

let con=document.querySelector('#container');
let heightcon=con.offsetHeight;
let wh=window.innerHeight;
let he=document.getElementsByClassName("panel");
for(let i=0;i<he.length;i++)
{
    he[i].style.height=((wh - heightcon)+"px");
}
    
document.getElementById("flexCheckDefault").onclick = function(){
    if(this.checked)
    {
        document.querySelector(".editor #htmlcon").addEventListener("keyup",run);
        document.querySelector(".editor #csscon").addEventListener("keyup",run);
        document.querySelector(".editor #jscon").addEventListener("keyup",run);
    }
}

