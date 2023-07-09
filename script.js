let songindex=0;
let audioelement= new Audio("songs/1.mp3");
let mainplay= document.getElementById("mainplay");
let progressbar= document.getElementById("progressbar");
let songitems=document.getElementById("songitem");

let songs=[
    {songname: "Baarishein -Anuv Jain", filepath: "songs/Baarishein.mp3", coverpath: "images/song_banner.jpg"},
    {songname: "Kasoor -Prateek Kuhad", filepath: "songs/Kasoor.mp3", coverpath: "images/kasoor.jpeg"},
    {songname: "Ghar -Bharat Chauhan", filepath: "songs/Ghar.mp3", coverpath: "images/ghar.jpeg"},
    {songname: "Akhiyan -Mitraz", filepath: "songs/Akhiyan.mp3", coverpath: "images/akhiyan.jpeg"}
]

mainplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        mainplay.classList.remove('fa-play');
        mainplay.classList.add('fa-pause');
        document.getElementById(`${songindex}`).classList.remove('fa-play');
        document.getElementById(`${songindex}`).classList.add('fa-pause');

    }
    else{
        audioelement.pause();
        mainplay.classList.remove('fa-pause');
        mainplay.classList.add('fa-play');
        document.getElementById(`${songindex}`).classList.remove('fa-pause');
        document.getElementById(`${songindex}`).classList.add('fa-play');
    }
})

audioelement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value=progress;
    if(audioelement.currentTime==audioelement.duration){
        if(songindex>=3){
            songindex=0;
        }
        else{
            songindex=songindex+1;
        }
        audioelement.src=`songs/${songindex+1}.mp3`;
        bannername.innerText = songs[songindex].songname;
        bannerimage.src=`${songs[songindex].coverpath}`;
        audioelement.currentTime=0;
        audioelement.play();
        mainplay.classList.remove('fa-play');
        mainplay.classList.add('fa-pause');
        makeallplays();
        document.getElementById(`${songindex}`).classList.remove('fa-play');
        document.getElementById(`${songindex}`).classList.add('fa-pause');
    }
})

progressbar.addEventListener('change',()=>{
    audioelement.currentTime=progressbar.value * audioelement.duration /100;
})

const makeallplays= ()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songplay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        if(parseInt(e.target.id)==songindex && audioelement.paused){
            audioelement.play();
            mainplay.classList.remove('fa-play');
            mainplay.classList.add('fa-pause');
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
        }
        else if(parseInt(e.target.id)==songindex){
            audioelement.pause();
            mainplay.classList.remove('fa-pause');
            mainplay.classList.add('fa-play');
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
        }
        else{
            makeallplays();
            songindex=parseInt(e.target.id);
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            audioelement.src=`songs/${songindex+1}.mp3`;
            bannername.innerText = songs[songindex].songname;
            bannerimage.src=`${songs[songindex].coverpath}`;
            audioelement.currentTime=0;
            audioelement.play();
            mainplay.classList.remove('fa-play');
            mainplay.classList.add('fa-pause');
        }
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=3){
        songindex=0;
    }
    else{
        songindex=songindex+1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
    bannername.innerText = songs[songindex].songname;
    bannerimage.src=`${songs[songindex].coverpath}`;
    audioelement.currentTime=0;
    audioelement.play();
    mainplay.classList.remove('fa-play');
    mainplay.classList.add('fa-pause');
    makeallplays();
    document.getElementById(`${songindex}`).classList.remove('fa-play');
    document.getElementById(`${songindex}`).classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=3;
    }
    else{
        songindex=songindex-1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
    bannername.innerText = songs[songindex].songname;
    bannerimage.src=`${songs[songindex].coverpath}`;
    audioelement.currentTime=0;
    audioelement.play();
    mainplay.classList.remove('fa-play');
    mainplay.classList.add('fa-pause');
    makeallplays();
    document.getElementById(`${songindex}`).classList.remove('fa-play');
    document.getElementById(`${songindex}`).classList.add('fa-pause');
})

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        if(audioelement.paused || audioelement.currentTime<=0){
            audioelement.play();
            mainplay.classList.remove('fa-play');
            mainplay.classList.add('fa-pause');
            document.getElementById(`${songindex}`).classList.remove('fa-play');
            document.getElementById(`${songindex}`).classList.add('fa-pause');
    
        }
        else{
            audioelement.pause();
            mainplay.classList.remove('fa-pause');
            mainplay.classList.add('fa-play');
            document.getElementById(`${songindex}`).classList.remove('fa-pause');
            document.getElementById(`${songindex}`).classList.add('fa-play');
        }
    }
  }