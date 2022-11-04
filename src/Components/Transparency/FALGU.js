import React from 'react'
import Banner from '../Banner'
import DocumentViewer from '../DocumentViewer'
import TransparencyCard from './TransparencyCard'


function FALGU() {
  return (
  <div>
    <Banner bannerTitle={"Financial Assistance for LGU"}  imageUrl={'https://res.cloudinary.com/dsmtfnutw/image/upload/v1667588730/San%20Lorenzo%20Ruiz%20App/IMAGES/Transparency/falgu_dnhhnr.jpg'}/>
    <div className='grid md:grid-cols-2 justify-items-center items-center justify-center h-max md:p-20 gap-4'>         
          <div className='grid items-center'>
            <TransparencyCard />
            {/* <TransparencyCard /> */}
            
            </div>
          <DocumentViewer className="col-2" pdfUrl={"https://res.cloudinary.com/dsmtfnutw/image/upload/v1667477544/San%20Lorenzo%20Ruiz%20App/DOCUMENTS/Transparency/Executive%20Orders/EO_sample_aq5764.pdf"} />   
    </div>
 </div>
  )
}

export default FALGU