window.onload=function(){
    now=0;
    next=0;
    let lia=document.querySelectorAll(".ban li")
    let lib=document.querySelectorAll(".nav li")
    let aaa=document.querySelectorAll(".aaa")
    console.log(aaa)
    function move(){
        next++;
        if(next>lia.length-1){
            next=0;
        }
        lia[next].style.zIndex=15;
        lib[next].classList.add("hot");
        aaa[next].style.zIndex=1;
        lia[now].style.zIndex=0;
        lib[now].classList.remove("hot");
        aaa[now].style.zIndex=0;
        now=next;
    }
    let t=setInterval(move,2000)
    for(let j=0;j<lib.length;j++){
        lib[j].onmouseenter=function(){
            if(j==now){
                return;
            }
            else if(j>now){
                lia[now].style.zIndex=0;
                lia[j].style.zIndex=15;
                aaa[now].style.zIndex=0;
                aaa[j].style.zIndex=1;
                lib[now].classList.remove("hot");
                lib[j].classList.add("hot");
                next=now=j;
            }
            else if(j<now){
                lia[now].style.zIndex=0;
                lia[j].style.zIndex=15;
                aaa[now].style.zIndex=0;
                aaa[j].style.zIndex=1;
                lib[now].classList.remove("hot");
                lib[j].classList.add("hot");
                next=now=j;
            }
        }
    }







    window.onscroll=function(){
        sh=document.body.scrollTop || document.documentElement.scrollTop;
        let yfive=document.querySelector(".yfive")
        if(sh>150){
            yfive.style.display="block";
        }
        else if(sh==0){
             yfive.style.display="none";
        }
        yfive.onclick=function(){
			animate(document.body,{scrollTop:0},2000);
			animate(document.documentElement,{scrollTop:0},2000);
		}

    }













}