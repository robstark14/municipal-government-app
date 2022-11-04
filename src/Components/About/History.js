import React from 'react'
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function History() {
  return (
    <section className="text-gray-600 body-font pt-[100px] font-Cabin" id="history">
      <div className="container px-5 pt-3 mx-auto flex flex-col">
          <div className="mx-auto">
              <div className="rounded-lg h-64 overflow-hidden">
                  <Fade bottom cascade>

                    <img alt="content" className="object-cover object-center h-full w-full" src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667479638/San%20Lorenzo%20Ruiz%20App/IMAGES/About/History/env-park_alevq0.jpg" />
                  </Fade>              
              
              </div>
              <h1 className='font-bold text-4xl mb-20 text-center pt-20'>History of San Lorenzo Ruiz</h1>

              <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 sm:pr-8 sm:py-8">
                   {/* <Fade bottom cascade>

                    <img src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667477700/San%20Lorenzo%20Ruiz%20App/IMAGES/About/History/history_myefzk.jpg" alt="" className='w-full'/>
                   </Fade>               */}

                   {/* <Fade bottom cascade>

                    <img src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667477708/San%20Lorenzo%20Ruiz%20App/IMAGES/About/History/saint_qtxx7g.jpg" alt="" />
                   </Fade>               */}

                   <Slide left cascade>

                    <img src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667477701/San%20Lorenzo%20Ruiz%20App/IMAGES/About/History/saint2_erlmjg.png" alt="" />
                   </Slide>              

                   <Slide left cascade>

                    <img src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667477701/San%20Lorenzo%20Ruiz%20App/IMAGES/About/History/saint3_px9bzt.jpg" alt="" />
                   </Slide>              

                   <Slide left cascade>

                    <img src="https://res.cloudinary.com/dsmtfnutw/image/upload/v1667477701/San%20Lorenzo%20Ruiz%20App/IMAGES/About/History/saint4_iih19z.jpg" alt="" />
                   </Slide>              

                  
                  
                  </div>
        

                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 sm:text-left">
                      <div className="leading-relaxed text-lg mb-4 text-gray-500 indent">
                      
                      
                      <p className='indent-8 pb-4'>In the year 1800-1896 the municipality of Imelda was only a sitio. During the  Spanish regime it was a territorial park of Calasgasan an independent municipality which  was merged to Daet, now the capital town of Camarines Norte, as one of the leading  barrios after the American occupation.
                      The seat of the Municipal Government of Imelda  was as vast virgin forest during the Spanish time. A certain individual in the name of Juan  Aruljo, of Guinobatan, Albay, came to this place in the later part of 1896 and started  clearing the forested area which was a sitio of Barrio Mampurog.</p> 
                      <p className='indent-8 pb-4'>The place was called  Matacong which became a barrio in the year 1933 during the term of Mayor Santiago  Carranceja, of Daet. There were no functional bases from where the name Matacong  originated. According to the old folks it might have derived from the vernacular term  “matarom”, which means sharp.</p> 
                      <p className='indent-8 pb-4'>In those days there was a creek found in this place now  called Matacong Creek that’s leads to Daet River. Within this creek hunters from the  village usually place an instrument made of bamboo poles sharpen at the end. They use this  to catch wild game animals, commonly called “matarom” or “duhang”.</p>
                      <p className='indent-8 pb-4'>When these hunters  were as in going to this place, they reply to “Matarom”. Later, maybe due to difference in  pronunciation, like when they have some batel nut or cigar in their mouth, the last syllables  of “matarom” sound as “Kong”. This word was handed to succeeding generation referring  to the creek.</p> 
                      <p className='indent-8 pb-4'>Afterwards the surrounding area around this creek was called “Matacong”. In  1905, after clearing the area referred as Matacong, Juan Aruljo, the first settler sold the  place to Victor Abaño. On March 1919, after a series of divisions and fusions the so called  province of Ambos Camarines was divided into two province of Camarines Sur and  Camarines Norte.
                      Daet then become the capital town of the province of Camarines Norte.  That time Daet regained its barrio the former territory of the municipality of Calasgasan of  Spanish days. Meanwhile on 1917, Victor Abaño sold the area of Matacong to Victor  Racho. Years later in 1938, the settlers and residents which grew in great number formed  an organization 
                      called “Samahang Magsasaka” (farmers’ association). This organization by  their officers filed a resolution, asking for the separation and creation of Matacong into  barrio. This was approved by the municipal council during the term of Mayor Santiago  Carranceja of Daet. From the mother barrio of Mampurog the area of the new barrio of  Matacong was defined.</p> 
                      <p className='indent-8 pb-4'>Again Daet lost its extensive territory in 1911 and 1948, when its  most important barrios were created as new municipalities in these respective years to the  municipality of Basud and Mercedes. In November 8, 1970, upon the approval of Republic  Act No. 6144, by the House of Congress of the Philippines, The municipality of Imelda  was created. </p>
                      <p className='indent-8 pb-4'>The barrios of Daculangbolo, Laniton, Langga, Maisog, Dagotdotan,  Mampurog, and Matacong in the municipality of Daet and barrios of San Isidro, San  Antonio, San Ramon, Salvacion, and Manlimonsito in the municipality of Basud, were  separated from their respective municipality that constituted to form the municipality of  Imelda</p>

                      </div>
                  </div>
                                

              </div>
          </div>
      </div>
   </section>
  )
}

export default History