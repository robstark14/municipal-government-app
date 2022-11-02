import React, { useEffect, useState } from 'react'
import Fade from "react-reveal/Fade";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from '../config/firebase_config';
function News() {
  
  const [photoUrl, setPhotoUrl] = useState({
    careers: "",
    news1: "",
    news2: "",
    news3: ""


  })
  useEffect(() => {
    // const getNewsPhotos = async () =>{
    //   try{
    //   const careersRef = ref(storage, '/careers.jpg');
    //   const news1Ref = ref(storage, '/assembly3.png');
    //   const news2Ref = ref(storage, '/assembly3.png');
    //   const news3Ref = ref(storage, '/assembly3.png');



    //   const career = await getDownloadURL(careersRef)
    //   const news1 = await getDownloadURL(news1Ref)
    //   const news2 = await getDownloadURL(news2Ref)
    //   const news3 = await getDownloadURL(news3Ref)


    //   // if (career.ok && news1.ok && news2.ok && news3.ok){

    //   setPhotoUrl({...photoUrl, careers: career })
    //   // setPhotoUrl({...photoUrl, news1: news1})
    //   // setPhotoUrl({...photoUrl, news2: news2})
    //   // setPhotoUrl({...photoUrl, news3: news3})
    //   // console.log('hello')
    //   // }

    //   }
    //   catch(err){
    //     console.log(err);
    //     console.log('error');
    //   }

    // }
    // getNewsPhotos()


    // return () => {
    //   getNewsPhotos()

    // }
  }, [])
  
  

  return (
    <div className="pt-[100px] bg-white lg:px-28 px-10 pb-10 ">
      <Fade bottom cascade>
      <h1 className="text-black text-4xl pb-2 font-bold uppercase text-left">
          Latest News
        </h1>
        <div className='h-[5px] bg-black mb-14'></div>
        {/* <p className="text-[#696984] pt-3 text-center pb-14">
          Trusted by 5000+ companies worldwide.
        </p> */}
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4">
          <div className="lg:pt-0 xl:pt-0">
            <div className='overflow-hidden w-4/5 rounded-2xl'>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/careers.jpg?alt=media&token=bbf705c5-ea7e-4c68-84c4-b0cb874f8488"
                className="duration-500 hover:scale-125"
              />
            </div>
            <p className="text-white pt-4 pb-7">
              <span className="px-6 py-2 bg-[#342F49] rounded-full font-thin">
                Careers
              </span>
            </p>
            <h3 className="text-black font-semibold">
              Apply now!
            </h3>
            <p className="pt-4 text-[#696984]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reprehenderit delectus reiciendis at facere perferendis nihil beatae sed ipsam earum aperiam eos dolore corporis, eaque pariatur! Omnis quidem sint itaque!
            </p>
            <p className="pt-4 text-[#ccc] text-semibold md:pb-4 pb-4">
              Read more
            </p>
          </div>

          <div className='grid gap-1'>
            <div className="lg:flex md:flex-col md:items-center xl:flex-row">
            <div className='overflow-hidden w-4/5 rounded-lg'>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/assembly1.jpg?alt=media&token=d4f085a1-e414-4168-9184-4c3ef7146d2d"
                className="duration-500 hover:scale-125"
              />            </div>

              <div className="lg:pl-5 pt-4">
                <h4 className="text-black font-semibold">
                  Municipal Admin held an assembly to discuss something..
                </h4>
                <p className="text-[#696984] pt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum nihil labore veritatis corrupti itaque....
                </p>
              </div>
            </div>

            <div className="lg:flex md:flex-col md:items-center xl:flex-row">
            <div className='overflow-hidden w-4/5 rounded-lg'>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/assembly2.jpg?alt=media&token=f75143a4-6a4e-442b-98eb-b2b98a887b5b"
                className="duration-500 hover:scale-125"
              />            </div>

              <div className="lg:pl-5 pt-4">
                <h4 className="text-black font-semibold">
                  Municipal Admin held an assembly to discuss something..
                </h4>
                <p className="text-[#696984] pt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum nihil labore veritatis corrupti itaque....
                </p>
              </div>
            </div>

            <div className="lg:flex md:flex-col md:items-center xl:flex-row">
            <div className='overflow-hidden w-4/5 rounded-lg'>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/party1.jpg?alt=media&token=4025c220-f98d-4af6-b203-480dda2b01e8"
                className="duration-500 hover:scale-125"
              />            </div>

              <div className="lg:pl-5 pt-4">
                <h4 className="text-black font-semibold">
                  Municipal Admin held an assembly to discuss something..
                </h4>
                <p className="text-[#696984] pt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum nihil labore veritatis corrupti itaque....
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default News