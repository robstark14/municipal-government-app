import React, { useEffect, useState } from 'react'
import Fade from "react-reveal/Fade";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { headline, newsData } from './NewsData';
import { Link } from 'react-router-dom';

function News() {
  
  const [photoUrl, setPhotoUrl] = useState({
    careers: "",
    news1: "",
    news2: "",
    news3: ""


  })

  const headline =newsData.find(news => news.id === 0)
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
    <div className="pt-[100px] bg-white lg:px-28 px-4 pb-10 font-Cabin" id="news">
      
      <h1 className="text-[#202b5d] font-Cabin text-4xl pb-2 font-bold uppercase text-left">
          Latest News
        </h1>
        <div className='h-[5px] bg-[#324597]  w-[70px] '></div>
        <h1 className="text-gray-500 font-Cabin text-md pb-2 font-bold text-left mb-14 mt-4">
        Read the latest News from San Lorenzo Ruiz and upcoming events from the Municipal Government
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 mb-10 mt-20">
          <div className="lg:pt-0 xl:pt-0">
          <Link to={`/news/${headline.id}`}>

            <div className='overflow-hidden w-4/5 rounded-2xl mx-auto'>
              <img
                src={headline.image}
                className="duration-500 hover:scale-125"
                />
            </div>
          </Link>
            {/* <p className="text-white pt-4 pb-7">
              <span className="px-6 py-2 bg-[#342F49] rounded-full font-thin">
                Careers
              </span>
            </p> */}
            <h3 className="text-black font-semibold pt-8">
              {headline.title}
            </h3>
            <p className="pt-4 text-[#696984] pb-8">{headline.body.substring(0,200)}...</p>
            <Link to={`/news/${headline.id}`} className="pt-2 text-[#ccc] text-semibold md:pb-4 pb-4 text-right hover:text-[darkBlue]">
              Read more
            </Link>
          </div>

          <div className='grid gap-4'>
            {newsData.map((news)=>{ if (news.id > 0){
              return(
            <Link to={`/news/${news.id}`} key={news.id} className="grid lg:grid-cols-2 md:items-center xl:flex-row md:bg-gray-50 py-8 rounded-2xl">
              <div className='overflow-hidden w-4/5 rounded-lg mx-auto'>
                <img
                    src={news.image}
                    className="duration-500 hover:scale-125 object-cover w-full h-[150px] mx-auto"/>            
              </div>

              <div className="lg:pl-5 pt-4">
                <h4 className="text-black font-semibold">
                  {news.title}
                </h4>
                <p className="text-[#696984] pt-3">
                  {news.body.substring(0,100)}...
                </p>
              </div>
            </Link>)}})}

            
          </div>
        </div>
        <Fade bottom cascade>
        <iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fsanlorenzoruizlgu&width=1000&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=435" 
          scrolling="yes"
          className='overflow-hidden w-full md:w-[600px] h-[430px] bg-white mx-auto'
          allowtransparency="true" frameBorder="0"
          >
        </iframe>
        </Fade>
    </div>
  );
}

export default News