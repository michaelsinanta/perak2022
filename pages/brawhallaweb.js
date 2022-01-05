import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';

function toggleModal() {
  document.getElementById('modal').classList.toggle('hidden')
}

function NextPage() {
  return(
      <div class= "relative bg-[#EBC761] w-[1920px] h-[1590px]">
        <h1 class= "absolute text-shadow text-6xl top-[190px] left-[121px] text-[#6A7CC8] font-bold font-['Montserrat']">Pendaftaran Games Individual</h1>
        <h2 class= "absolute text-4xl top-[273px] left-[122px] text-[#FFFFFF] font-bold font-['MADE Sunflower'] stroke-[2px]">Brawlhalla</h2>
        <nav class= "inline-block flex bg-[#F1D78E] w-[1920px] h-[93px]">
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
          <div class="absolute top-[1283px]">
            <img class="w-full h-full" src ="/Group 659.svg"/></div>
          <div>
            <a class= "absolute text-[22px] top-[345px] left-[121px] font-bold font-['Montserrat']">Biaya pendaftaran : Rp xx.xxx</a>
            <a class= "absolute text-[18px] top-[378px] left-[121px] font-['Montserrat'] font-[500]">Instruksi pembayaran diberikan setelah mengisi form pendaftaran</a>
            <div class="absolute mb-4 top-[443px] left-[121px]">
              <label class="inline-flex items-center">
                <input type="radio" class="form-radio w-[33px] h-[33px] border-black" name="accountType" value="1"></input>
                <span class="ml-2 font-['Montserrat'] text-[22px] font-[500]">Elemen Staf/Dosen</span>
              </label>
              <label class="inline-flex items-center ml-[104px]">
                <input type="radio" class="form-radio w-[33px] h-[33px] border-black" name="accountType" value="2"></input>
                <span class="ml-2 font-['Montserrat'] text-[22px] font-[500]">Mahasiswa</span>
              </label>
            </div>
            <a class= "absolute text-[22px] top-[498px] left-[121px] font-['Montserrat'] font-[500]">Nama Lengkap</a>
            <div class="absolute left-[121px] top-[532px] bg-[#FBFBFB] border-[3px] border-black">
            <input class="w-[671px] h-[49px] text-[18px] font-['Montserrat'] text-[#7E7E7E] font-[500] ml-3" placeholder="Nama Lengkap"></input>
            </div>
            <a class= "absolute text-[22px] top-[617px] left-[121px] font-['Montserrat'] font-[500]">Nama Panggilan</a>
            <div class="absolute left-[121px] top-[652px] bg-[#FBFBFB] border-[3px] border-black">
            <input class="w-[671px] h-[49px] text-[18px] font-['Montserrat'] text-[#7E7E7E] font-[500] ml-3" type="text" name="name" placeholder="Nama Panggilan"></input>
            </div>
            <a class= "absolute text-[22px] top-[751px] left-[121px] font-['Montserrat'] font-[500]">Profile Picture</a>
            <a class= "absolute text-[18px] top-[943px] left-[370px] font-['Montserrat'] font-[500]">Pilih Gambar</a>

            <Link href="#"><div class="relative h-[223px] w-[224px] bg-[#8648BA] top-[796px] left-[121px] rounded-[8px] border-[3px] border-black"></div></Link>
            <Link href="#"><div class="absolute h-[208px] w-[201px] bg-[#2E1145] top-[803.5px] left-[132.5px] rounded-[8px] border-2 border-black"></div></Link>

            <dev class="flex">
            <Link href="#"><div class="relative h-[49px] w-[223px] bg-[#F1D78E] top-[830px] left-[121px] rounded-[8px] border-[3px] border-black"></div></Link>
            <Link href="#"><div class="absolute h-[37px] w-[205px] bg-[#CC9D1A] top-[1058px] left-[130px] rounded-[8px] border-2 border-black"></div></Link>
            <a href="#" class="absolute block font-['Montserrat'] text-[18px] top-[1065px] left-[180px] font-bold font-[600]">Upload File</a>
            </dev>

            <div class="absolute left-[370px] top-[971px] bg-[#FBFBFB] border-[3px] border-black">
            <input class="w-[422px] h-[49px] text-[18px] font-['Montserrat'] text-[#7E7E7E] font-[500] ml-3" type="text" name="name" placeholder="Pilih Gambar"></input>
            </div>
            <a class= "absolute text-[22px] top-[1155px] left-[121px] font-['Montserrat'] font-[500]">NPM</a>
            <div class="absolute left-[121px] top-[1190px] bg-[#FBFBFB] border-[3px] border-black">
            <input class="w-[671px] h-[49px] text-[18px] font-['Montserrat'] text-[#7E7E7E] font-[500] ml-3" type="text" name="name" placeholder="NPM"></input>
            </div>
            <a class= "absolute text-[22px] top-[1293px] left-[121px] font-['Montserrat'] font-[500]">ID Line / WhatsApp</a>
            <div class="absolute left-[121px] top-[1328px] bg-[#FBFBFB] border-[3px] border-black">
            <input class="w-[671px] h-[49px] text-[18px] font-['Montserrat'] text-[#7E7E7E] font-[500] ml-3" type="text" name="name" placeholder="ID Line / WhatsApp"></input>
            </div>

            <button class="flex">
            <div class="relative h-[74px] w-[671px] bg-[#03F182] top-[1187px] left-[121px] rounded-[8px] border-[3px] border-black" onClick={toggleModal}></div>
            <div class="absolute h-[50px] w-[646px] bg-[#028F4D] top-[1471px] left-[133px] rounded-[8px] border-2 border-black" onClick={toggleModal}></div>
            <a class="absolute block font-['Montserrat'] text-[18px] top-[1484px] left-[369px] font-[600] text-white" onClick={toggleModal}>Daftar Sekarang</a>
            </button>

            <div class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="modal">
              <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity">
                  <div class="absolute inset-0 bg-[#000000] opacity-50" />
                </div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div class="inline-block bg-[#E5B632] border-black border-[2px] transform transition-all sm:h-[539px] sm:align-middle sm:w-[1251px]" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <h1 class= "relative text-shadow top-[43px] text-[64px] text-[#6A7CC8] font-bold font-['Montserrat'] stroke-[2px]">Apakah Anda Yakin Ingin<br></br>Mendaftar di Permainan Ini?</h1>
                <h1 class= "relative top-[40px] text-[28px] text-black font-bold font-['Montserrat'] font-[700]">Pastikan semua data yang telah anda masukkan tidak ada yang<br></br>salah. Anda tidak bisa mengubah data setelah pendaftaran<br></br>tersimpan.</h1>
                
                <button class="static">
                <div class="fixed h-[85px] w-[407px] bg-[#FAA299] top-[370px] left-[212px] rounded-[8px] border-[3px] border-black" onClick={toggleModal}></div>
                <div class="fixed h-[63px] w-[373px] bg-[#EE200C] top-[380.85px] left-[228px] rounded-[8px] border-2 border-black" onClick={toggleModal}></div>
                <a class="fixed font-['Montserrat'] text-[36px] top-[387px] left-[361.26px] font-[600] text-white" onClick={toggleModal}>Batal</a>
                </button>

                <button class="flex inline-block" href="/hasil">
                <div class="fixed h-[85px] w-[407px] bg-[#03F182] top-[370px] left-[645.48px] rounded-[8px] border-[3px] border-black" href="/hasil"></div>
                <div class="fixed h-[63px] w-[373px] bg-[#028F4D] top-[380.85px] left-[660.76px] rounded-[8px] border-2 border-black" href="/hasil"></div>
                <a class="fixed font-['Montserrat'] text-[36px] top-[387px] left-[775.98px] font-[600] text-white" href="/hasil">Simpan</a>
                </button>

                </div>
              </div>
            </div>
          </div>
        </nav>
      <div class="static">
        <img class="object-none w-[1920px] h-[1495px]" src ="/noise2.svg"/></div>
      <div class="absolute top-[586px] left-[833px] w-[600px] h-[600px]">
        <img src ="/Group 108.svg"/></div>
      <div class="absolute bottom-[1103.87px] left-[1409px]">
        <img class="object-none w-full h-[392px]" src ="/Group 109.svg"/></div>
      <div class="absolute top-[925px] left-[1153px] right-[86.05px]">
        <img class="w-full h-full" src ="/Group 110.svg"/></div>
      <div class="absolute top-[1144px] left-[831px]">
        <img class="w-full h-full" src ="/Group 660.svg"/></div>
      <div class="absolute top-[290px] left-[1004px] w-[758px] h-[661px]">
        <img src ="/Group 752.svg"/></div>
      <div class="absolute top-[570px] left-[1260px] scale-[2.4]">
        <img src ="/brawhalla.svg"/></div>
      
      </div>
    );
};
  
export default NextPage