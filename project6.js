var arr=[
        { songName: "Hamari Adhuri kahani", url: "./songs/Hamari Adhuri Kahani.mp3", img: "./images/hamari.jpg",Dur:"6:30" },
         { songName: "Aye Dil Hai Mushkil", url: "./songs/Ae Dil Hai Mushkil.mp3", img: "./images/aye.jpg",Dur:"4:30"  },
        { songName: "Tera Zikr", url: "./songs/Tera Zikr.mp3", img: "./images/tera.jpg",Dur:"5:30"  },
        { songName: "Ajj Bhi", url: "./songs/Aaj Bhi.mp3", img: "./images/ajj.jpg",Dur:"4:20"  },
        { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg",Dur:"5:00"  },
        { songName: "Hush", url: "./songs/Husn.mp3", img: "./images/husn.jpg",Dur:"3:10"  }
]

var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var play=document.querySelector("#play")
var back=document.querySelector("#back")
var forw=document.querySelector("#forw")

var audio=new Audio();
var selectedsong=0;

function mainfunction(){
        var clutter="";
arr.forEach(function(song,idx){
        clutter+=` <div class="song-card" id="${idx}">
                                       
        <div class="part1"> 
         <img src="${song.img}" alt="">
         <h2>${song.songName}</h2></div>
         <div>
                 <h6>${song.Dur}</h6>
         </div>

 </div>`;


})
allSongs.innerHTML=clutter;
audio.src=arr[selectedsong].url;

poster.style.backgroundImage = `url(${arr[selectedsong].img})`

}
mainfunction();
var flag=0

document.querySelector("#all-songs").addEventListener("click",function(dets){
       
           selectedsong=dets.target.id;
           
           mainfunction();
           play.innerHTML = `<i class="ri-pause-mini-line"></i>`
          flag=0
           audio.play();
})


play.addEventListener("click",function(){
        if(flag==0){
                play.innerHTML = `<i class="ri-play-fill"></i>`
        
        audio.pause()
         flag=1
        }else{
         play.innerHTML = `<i class="ri-pause-mini-line"></i>`
            audio.play()
            flag=0

        }

})

forw.addEventListener("click",function(){
if(selectedsong<arr.length-1){
        selectedsong++
        mainfunction();
        audio.play()
} 
else{
        forw.style.opacity=0.4
}  
})
back.addEventListener("click",function(){
        if(selectedsong>0){
                selectedsong--
                mainfunction();
                audio.play()
        }  
        else{
                back.style.opacity=0.4
        }  
        })