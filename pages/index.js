import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';

function HomePage() {
  return(
    <div class= "relative bg-[#EBC761] w-[1920px] h-[1291px]">
      <h1 class= "absolute text-6xl top-40 left-32 text-[#6A7CC8] font-bold font-['Montserrat'] stroke-[2px]">Pilih games yang<br></br>kamu inginkan</h1>
      <h2 class= "absolute text-4xl top-[355px] left-32 text-[#FFFFFF] font-bold font-['MADE Sunflower'] stroke-[2px]">Games Individual</h2>
      <nav class= "flex-auto bg-[#F1D78E] w-[1920px] h-[93px]">
        <div class = 'flex'>
          <div class="absolute top-[14px] left-[44px]">
            <img src ="/logoperak.svg" width={66} height={66}/>
          </div>
          <p class= "absolute text-xl font-bold font-['Montserrat'] top-5 left-32">PESTA RAKYAT<br></br>KOMPUTER</p>
        </div>
        <div class = 'absolute top-8 font-bold'>
            <a href="#" class="absolute block font-['Montserrat'] text-xl left-[645px]">Score</a>
            <a href="#" class="absolute block whitespace-nowrap font-['Montserrat'] text-xl left-[799px]">Games Map</a>
            <a href="#" class="absolute block whitespace-nowrap font-['Montserrat'] text-xl left-[1027px]">Team Profile</a>
            <a href="#" class="absolute block font-['Montserrat'] text-xl left-[1267px]">News</a>
            <a href="#" class="absolute block whitespace-nowrap font-['Montserrat'] text-xl left-[1417px]">Explore Cafetaria</a>
            <a href="#" class="absolute block font-['Montserrat'] text-xl left-[1713px]">Merchandise</a>
        </div>
      </nav>
      <div class="static w-full h-full">
          <img class= "object-none w-[1920px] h-[1200px]"src ="/noise.svg"/></div>
      <div class="absolute top-[297px] left-[976px] w-[600px] h-[600px]">
        <img src ="/Group 108.svg"/></div>
      <div class="absolute top-[70px] left-[1409px]">
        <img class="object-none w-full h-[500px]" src ="/Group 109.svg"/></div>
      <div class="absolute top-[662px] left-[1275px] w-[650px] h-[421px]">
        <img src ="/Group 110.svg"/></div>
      <div class="absolute top-[844px] left-[831px]">
        <img src ="/Group 660.svg"/></div>
      <div class="absolute top-[840px] right-[780px]">
        <img class="object-none w-[1140px] h-[594.55px]" src ="/Group 659.svg"/></div>
      <div class="absolute top-[925px] right-[1590px] scale-[1.7]">
        <img class="object-none h-[272px] w-full" src ="/Group 661.svg"/></div>

      <Link href="/brawhallaweb"><div class="absolute h-[246px] w-[314px] bg-[#03BF67] top-[423px] left-[119px] rounded-[8px] border-2 border-black"></div></Link>
      <Link href="/brawhallaweb"><div class="absolute h-[221px] w-[292px] bg-[#028F4D] top-[434px] left-[129px] rounded-[8px]"></div></Link>
      <Link href="/brawhallaweb"><div class="absolute top-[466px] left-[156px]">
        <img src ="/brawhalla.svg" width={238} height={161}/></div></Link>

      <div class="absolute h-[246px] w-[314px] bg-[#8648BA] top-[423px] left-[476px] rounded-[8px] border-2 border-black"></div>
      <div class="absolute h-[221px] w-[292px] bg-[#2E1145] top-[434px] left-[486px] rounded-[8px]"></div>
      <div class="absolute top-[442px] left-[531px]">
        <img src ="/osu.svg" width={205} height={205}/>
      </div>
      <div class="absolute h-[246px] w-[314px] bg-[#8648BA] top-[423px] left-[831px] rounded-[8px] border-2 border-black"></div>
      <div class="absolute h-[221px] w-[292px] bg-[#2E1145] top-[434px] left-[841px] rounded-[8px]"></div>
      <div class="absolute top-[455px] left-[900px]">
        <img src ="/chess.svg" width={180} height={180}/>
      </div>
    </div>
  );
};

export default HomePage