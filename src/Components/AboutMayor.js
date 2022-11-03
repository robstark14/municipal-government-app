import Fade from "react-reveal/Fade";


const AboutMayor = () => {


	return (
		<div className="bg-white md:px-[50px] lg:px-[50px] md:py-2 mb-40">
	{/* <div className="font-Lora bg-gray-100 sm:bg-white text-stone-700 p-2 md:p-8 shadow-xl md:rounded-lg"> */}
		
        {/* <div className='h-[5px] bg-black mb-14'></div> */}

		
		<div className="block sm:flex sm:gap-10 mt-4 md:px-8 items-start">
			<div className="w-full sm:w-1/2 mb-7 sm:mb-0 justify-items-start place-items-start">
			<Fade cascade>

				<img src={"https://res.cloudinary.com/dsmtfnutw/image/upload/v1667488004/San%20Lorenzo%20Ruiz%20App/IMAGES/Others/mayor_lauzru.png"} 
				className="rounded-lg w-[1000px] overflow-hidden" alt="" />
								</Fade>

			</div>
			
			<div className="font-general-regular w-full sm:w-1/2 text-left">
				<div className="mb-4 text-ternary-dark dark:text-ternary-light text-lg md:pt-10 ">
				<Fade bottom cascade>
					<h1 className="text-3xl md:text-4xl pb-8 font-Cabin font-bold  drop-shadow-md p-4 break-keep text-[#202b5d] text-center">
						Welcome Message of the <br/> Local Chief Executive
					</h1>
				</Fade>
				<Fade cascade>

				<p className="text-justify indent-10 md:bg-stone-100 text-black rounded-lg p-8 shadow-lg font-Cabin">
				Welcome to the Official Website of the Municipality of San Lorenzo Ruiz! We are thrilled to present to you the beauty of this humble 5th class municipality in the province of 
				Camarines Norte through this website. Experience the rich biodiversity and vast ecosystem. 
				A good venue for relaxation, unwinding and getting away from the city life; a place where your heart will find peace and serenity.
				Community participation is the cornerstone of our local governance. The concerted efforts of local officials and active participation shared by our constituents
				are our instrument in fulfilling the dreams and common aspiration for our beloved municipality. Rest assured that the best ways of improving our local 
				governance are underway. Come! See the wonder of nature and feel the thrill of different adventurous activities that only SAN LORENZO RUIZ can offer. <span className="font-bold drop-shadow font-Josefin text-red-700 ">Welcome and MABUHAY!</span> 
				<div className="mt-10 text-right">
					<h1 className="font-bold ">HON. NELSON DELOS SANTOS</h1>
					<h1 className="">Municipal Mayor</h1>

				</div>
				</p>
				</Fade>


				
				</div>

			</div>
		</div>
	{/* </div> */}
	</div>
	);
};

export default AboutMayor;
