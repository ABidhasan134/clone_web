let music=new Audio('./song/6.mp3');
//making array object we also can fetch here by use fetch methord
const playListsong=[
    {
        id: 1,
        songName: 'Luka chuppi',
        Actres: 'kriti sonan & kartik',
        poster: "song-img/1.jpg",
    },
    {
        id: 2,
        songName: 'Kaabil',
        Actres: 'Hrithe & Kartik',
        poster: "song-img/2.jpg"
    },
    {
        id: 3,
        songName: 'Teri Gallyon',
        Actres: 'Raqibul Hasan Rana',
        poster: "song-img/3.jpg"
    },
    {
        id: 4,
        songName: 'Luka chuppi',
        Actres: 'kriti sonan & kartik',
        poster: "song-img/1.jpg"
    },
    {
        id: 5,
        songName: 'Kesariya',
        Actres: 'Ranbir & Alia',
        poster: "song-img/5.jpg"
    },
    {
        id: 6,
        songName: 'Gangubai',
        Actres: 'Alia song',
        poster: "song-img/6.jpg"
    },
    {
        id: 7,
        songName: 'Bella Ciao',
        Actres: 'Money Heist',
        poster: "song-img/7.jpg"
    },
    {
        id: 8,
        songName: 'কথা কয় না',
        Actres: 'Coke studio Bangla',
        poster: "song-img/8.jpg"
    },
    {
        id: 9,
        songName: 'Tere vaaste',
        Actres: 'Vki & sara',
        poster: "song-img/9.jpg"
    },
    {
        id: 10,
        songName: 'Tumse milke Dilka Hai jo Hall',
        Actres: 'sharuk Khan',
        poster: "song-img/10.jpg"
    },
    {
        id: 11,
        songName: 'Aye Khuda',
        Actres: 'silent ocean Lofi',
        poster: "song-img/11.jpg"
    },
    {
        id: 12,
        songName: 'Luka chuppi',
        Actres: 'kriti sonan & kartik',
        poster: "song-img/12.jpg"
    },
]
//taking Array from songimg by selecting all element
//if we select all element it will make array auto 
let songImg=document.querySelectorAll(".songimg");
const Titel=document.querySelectorAll('.songItems h3');
const subTitel=document.querySelectorAll('.subtitle');
// console.log(songImg);
//making new array from array object song 
const posters = playListsong.map(item => item.poster);
const Name=playListsong.map(item=>item.songName)
const Actres=playListsong.map(item=>item.Actres);
//set two array side by side use for loop
// we can't use i<=songImg.length becuse of index start with 0
for(let i=0;i<songImg.length;i++)
{
    songImg[i].src=posters[i];
    Titel[i].innerHTML=Name[i];
    subTitel[i].innerHTML=Actres[i];

}
const SongNumber=playListsong.map(item=>item.id)
const playPlayList=document.querySelector('.bi-pause-circle')
//master play contorl for exteranal song 
const masterImg=document.querySelector('#masterImg');
const masterTime=document.querySelector('.currentTime')
const masterTitel=document.querySelector('.MP-title');
const masterSubTitel=document.querySelector('.MP-subTitle')
// console.log(masterImg);//poper value got
SongIndex=0;
const SongInNumber=document.querySelectorAll('.bi-play-circle');
const playSymbol=document.querySelectorAll('.bi-pause-circle')
const playLists=document.querySelectorAll('.songItems');
const ListItem=document.querySelectorAll('.songMenu li');
// const mainPic=document.querySelector('.SSpic');

var val=0;
SongInNumber.forEach(event=>{
    event.addEventListener('click',(e)=>{
        //we can't not find value cause we never use value in html
        //this is html id
        let prevId=0;
        val=e.target.id;
    //    console.log(val);
    music.src=`./song/${val}.mp3`;
    masterImg.src=posters[val-1];
    masterTitel.innerHTML=Name[val-1];
    masterSubTitel.innerHTML=Actres[val-1];
    // mainPic.innerHTML=posters[val-1];
    // e.classList.add('bi-pause-circle');
    if(music.paused)
    {
        masterPlayerPlay();
        SongInNumber[val-1].classList.remove('bi-play-circle');
        SongInNumber[val-1].classList.add('bi-pause-circle');
        forBackground();
        prevId=val;
    }   
    else if (music.played)    
    {
        console.log("2020")
        masterPlayPasud();   
    }         
})
     
})
//this code is not working properly by 
//but it posibel to use in js that btn or icon with out using in html
// document.addEventListener('click', function (event) {
//     let clickedElement = event.target;

//     // Check if the clicked element has the class .bi-pause-circle
//     if (clickedElement.classList.contains('bi-pause-circle')) {
//         masterPlayPasud();
//         SongInNumber[val-1].classList.add('bi-play-circle');
//         SongInNumber[val-1].classList.remove('bi-pause-circle');
//         // masterPlayPasud();
//         console.log("clicked");
//     }
// });





// this variables for populer song area
const popLeft=document.querySelector("#popLeft")
const card=document.querySelector(".SScard");
const popLRight=document.querySelector("#popRight")
const cards=document.querySelector(".SSsong");
const songs=document.querySelector(".SSsong");

popLRight.addEventListener('click',()=>{
    // cards.scrollLeft +=100;
    songs.scrollLeft +=250;
    console.log("clicked");
})
popLeft.addEventListener('click',()=>{
    songs.scrollLeft -=250;
    console.log("clicked");
})
//making array for populersong also can fetch data.
const populerSong=[
    {
        id: 13,
        songName: 'Hero',
        Actres: 'Alan walker & Alex slon',
        poster: "song-img/A-13.jpg",
    },
    {
        id: 14,
        songName: 'Alone',
        Actres: 'Alan walker',
        poster: "song-img/A-14.jpg"
    },
    {
        id: 15,
        songName: 'It is not you it is you',
        Actres: 'It is not you it is you',
        poster: "song-img/A-15.jpg"
    },
    {
        id: 16,
        songName: 'পরিণীতা',
        Actres: 'Raj chakraboty',
        poster: "song-img/A-16.jpg"
    },
    {
        id: 17,
        songName: 'Radwimgs',
        Actres: 'Radwimgs',
        poster: "song-img/A-17.jpg"
    },
    {
        id: 18,
        songName: 'Ghodey pe sawaar',
        Actres: 'oAlA Ghodey pe sawaar',
        poster: "song-img/A-18.jpg"
    },
    {
        id: 19,
        songName: 'Jailer',
        Actres: 'Kaauaalaa',
        poster: "song-img/A-19.jpg"
    },
    {
        id: 20,
        songName: 'kaise',
        Actres: 'Kabir singh',
        poster: "song-img/A-20.jpg"
    },
    {
        id: 21,
        songName: 'Tere yaah hoon main',
        Actres: 'Remix',
        poster: "song-img/A-21.jpg"
    },
    {
        id: 22,
        songName: 'Ra. one',
        Actres: 'sharuk Khan',
        poster: "song-img/A-22.jpg"
    },
]

const populerSongImg=document.querySelectorAll('.SScard img');
const populerSongHeading=document.querySelectorAll('.SScard h3')
const populerSubHeading=document.querySelectorAll('.SSsubtitele')
// console.log(populerSubtitel);
const popularTitel=populerSong.map((item)=>item.songName);
//new array start index also in 0 that why we equetion songId-13=13-13=0,14-13=1
// console.log(popularTitel);
const popularSubTitel=populerSong.map((item)=>item.Actres)
const populerImg=populerSong.map((item)=>item.poster);
const Ssid=populerSong.map((itme)=>itme.id);

const SongSideSong=document.querySelectorAll('.SSsong');
const SsImg=document.querySelectorAll('.SS-img')


// console.log(popularSubTitel);
for(let i=0;i<populerSongImg.length;i++)
{   
    //
    populerSongImg[i].src=populerImg[i];
    populerSongHeading[i].innerHTML=popularTitel[i];
    populerSubHeading[i].innerHTML= popularSubTitel[i];
}
SsImg.forEach((event)=>{
    event.addEventListener('click',(e)=>{
        const songId=e.target.id;
        console.log(songId);
        music.src=`./song/a-${songId}.mp3`;
        masterImg.src= `song-img/A-${songId}.jpg`;
        masterTitel.innerHTML=popularTitel[songId-13];
        masterSubTitel.innerHTML=popularSubTitel[songId-13];
        
        if(music.paused)
        {
            // music.play();
            masterPlayerPlay();
          
        }
        else if(music.played)
        {
            masterPlayPasud();
        }
      
        })
})

// this variables for singer
const singerLeft=document.querySelector("#singerLeft");
const singerRight=document.querySelector("#singerRight");
const singerList=document.querySelector(".SSsinger");
//scroll only can be scrollLeft or scrollLdown 
//that why we use + and - operator as logic 
singerRight.addEventListener("click",()=>{
    singerList.scrollLeft += 250;
    console.log("clicked");
})
singerLeft.addEventListener("click",()=>{
    singerList.scrollLeft -= 250;
})
//music can add new Audio and Audio have so many poperty 
//

//FOR MASTER PLAY SIDE

// music.play();
// console.log(music);
const playMusic=document.querySelector("#play");
const pauseMusic=document.querySelector("#pause")
const wevs=document.querySelector('.wev');
//making array selecting all
const Subwevs=document.querySelectorAll('.sub-wev');
// console.log(Subwevs);
//Listener on paused icon also add animation and animatonDelay
playMusic.addEventListener('click',()=>{
    music.play();

    pauseMusic.classList.remove('pause-play');
    playMusic.classList.add('pause-play');
    //song from playList
    SongInNumber[val-1].classList.remove('bi-play-circle');
    SongInNumber[val-1].classList.add('bi-pause-circle');
    console.log("clicked");
    //forEach pass value and index
    //add animation and also Delay form here by index number using if condition 
    animet();
})

//Listener for play icon
pauseMusic.addEventListener('click',()=>{
    masterPlayPasud();
    //song from playList
    SongInNumber[val-1].classList.add('bi-play-circle');
    SongInNumber[val-1].classList.remove('bi-pause-circle');
})

const EndTime=document.querySelector('.EndTime');
const TimeCur=document.querySelector('.currentTime');
const MusicBar=document.querySelector('.MP-subplayer');
const MusicPoint=document.querySelector('.MP-dot');
const bar1=document.querySelector('.MP-input');
music.addEventListener('timeupdate',()=>{
    let musicCurr=music.currentTime;
    let musicDur=music.duration;
    let Durmin=Math.floor((musicDur/60));
    let Dursec=Math.round((musicDur%60));
    if(Dursec<10)
    {
        Dursec=`"0"${Dursec}`;
    }
    EndTime.innerHTML=`${Durmin}:${Dursec}`;
    let curMin=Math.floor((musicCurr/60));
    // console.log(curMin);
    let curSec=Math.floor((musicCurr%60));
    if(curSec<10)
    {
        curSec=`0${curSec}`;
        
    }
    TimeCur.innerHTML=`${curMin}:${curSec}`;
    //finding the time into parsenteg (%)
    let prograssBar=parseInt((musicCurr*100)/musicDur);
    bar1.value=prograssBar;
    let seekBar=bar1.value;
    // console.log(seekBar);
    // MusicBar.style.width=(seekBar)+'px';
    //must have px or % value
    MusicBar.style.width=`${seekBar}%`;
    MusicPoint.style.left=(seekBar)+'%';
});
bar1.addEventListener('change',()=>{
    music.currentTime=((bar1.value*music.duration)/100);
})



const volBar=document.querySelector('.MP-subvolum');
const volDot=document.querySelector('.MPV-dot');
const volIcon=document.querySelector('#volume');
const volInput=document.querySelector('.MPV-input');
console.log(volInput.value);
volInput.addEventListener('change',()=>{
    let volLevel=parseInt(volInput.value);
    if(volLevel===0){
        
        volIcon.classList.remove('bi-volume-up-fil');
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.add('bi-volume-mute-fill');
        console.log("Mute");
    }
    if(volLevel>0 && volLevel<=50)
    {
        volIcon.classList.remove('bi-volume-up-fil');
        volIcon.classList.remove('bi-volume-mute-fill');
        volIcon.classList.add('bi-volume-down-fill');
        console.log("Mid");
    }
    if(volLevel>50 )
    {
        
        
        volIcon.classList.remove('bi-volume-mute-fill');
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.add('bi-volume-up-fil');
        console.log("High");
    }
    volBar.style.width=`${volLevel}%`;
    volDot.style.left=`${volLevel}%`;
    music.volume=volLevel/100;

    console.log(volLevel);
})
const preSong=document.querySelector('.bi-skip-start-fill');
const nextSong=document.querySelector('.bi-skip-end-fill');
preSong.addEventListener('click',()=>{

})


//FUNCTION FOR MULTIPEL USE IN THIS PROJECT
const animet=()=>{Subwevs.forEach((element,key) => {
    element.style.animation=("waveAnimation 0.4s infinite");
    if(key===0)
    {
        element.style.animationDelay=("0.2s");
    }
    if(key===1)
    {
        element.style.animationDelay=("0.3s");
    }
    if(key===2)
    {
        element.style.animationDelay=("0.6s");
    }
    
    // console.log(key);
});
}
const masterPlayerPlay=()=>{
    music.play();
    playMusic.classList.add('pause-play');
    pauseMusic.classList.remove('pause-play')
    const musicTime=music.currentTime;
    masterTime.innerHTML=musicTime;
    
    //forEach pass value and index
    //add animation and also Delay form here by index number using if condition 
    animet();
}
const masterPlayPasud=()=>{
    music.pause();
    playMusic.classList.remove('pause-play');
    pauseMusic.classList.add('pause-play');
   
    Subwevs.forEach((element)=>{
    element.style.animation='none';
    })
}

//this code working by not properly as we went
// console.log(playLists);
/**
 * The function `forBackground` adds a click event listener to each element in the `ListItem` array,
 * and if the clicked element has a numeric id, it adds the class "background" to it.
 */
 const forBackground=()=>{
    ListItem.forEach((event)=>{
        event.addEventListener('click',(items)=>{
            const number=items.target.id;
            console.log(number);
            items.target.classList.add("background");
                // ListItem[number].classList.remove('pause-play');
            // if(!isNaN(number))        
            // {
            //     // items.target.style.background='red';
                
            // }
        })
    })
 }
//2nd try of this function 
// const forBackground=()=>{
//     ListItem.forEach((item)=>{
//         item.target.classList.add("background");
//     })
// }

// 
// playLists.forEach((event=>{
//     event.addEventListener('click',(items)=>{
//         const clickItem=items.target;
//         // const NumSong=clickItem.id;
//         // console.log(NumSong);
//         clickItem[NumSong].style.background="red";

//     })
       
// }))
//we have some work like prevous song and next song btn 
// 
