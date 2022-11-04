import React, { useState } from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';

import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';



function DocumentViewer({pdfUrl}) {
  return (
    <div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
            <div className='w-[600px] h-[600px]'>
                <Viewer fileUrl={pdfUrl} />
            </div>
        </Worker>
    </div>
  )
}

export default DocumentViewer