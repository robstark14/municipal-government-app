import Fade from "react-reveal/Fade";


const AboutMayor = () => {


	return (
		<div className="bg-gray-100 md:px-4 md:px-[150px] lg:px-[150px] md:py-20 mt-20">
	<div className="font-Lora bg-white text-stone-700 p-2 md:p-8 shadow-xl md:rounded-lg">
		<Fade bottom cascade>
		<h1 className="text-black text-2xl md:text-4xl pb-2 font-bold text-left font-Lora drop-shadow-md p-4">
			Welcome Message of the Local Chief Executive
		</h1>
		</Fade>
        {/* <div className='h-[5px] bg-black mb-14'></div> */}

		
		<div className="block sm:flex sm:gap-10 mt-4 sm:mt-10 px-8 items-center">
			<div className="w-full sm:w-1/3 mb-7 sm:mb-0">
				<img src={"https://firebasestorage.googleapis.com/v0/b/san-lorenzo-ruiz-landing.appspot.com/o/mayor.jpg?alt=media&token=e9e8c5ec-c9aa-486b-8f6b-1e685c1b33f2"} className="rounded-lg w-[350px] mx-auto" alt="" />
			</div>
			
			<div className="font-general-regular w-full sm:w-2/3 text-left">
				<div className="mb-4 text-ternary-dark dark:text-ternary-light text-lg ">

				<p className="text-justify indent-10">
				Welcome to the Official Website of the Municipality of San Lorenzo Ruiz! We are thrilled to present to you the beauty of this humble 5th class municipality in the province of 
				Camarines Norte through this website. Experience the rich biodiversity and vast ecosystem. 
				A good venue for relaxation, unwinding and getting away from the city life; a place where your heart will find peace and serenity.
				Community participation is the cornerstone of our local governance. The concerted efforts of local officials and active participation shared by our constituents
				are our instrument in fulfilling the dreams and common aspiration for our beloved municipality. Rest assured that the best ways of improving our local 
				governance are underway. Come! See the wonder of nature and feel the thrill of different adventurous activities that only SAN LORENZO RUIZ can offer. <span className="font-bold drop-shadow font-Josefin">Welcome and MABUHAY!</span> 
				</p>

				<div className="mt-20 text-right">
					<h1 className="font-bold ">HON. NELSON DELOS SANTOS</h1>
					<h1 className="">Municipal Mayor</h1>

				</div>
				</div>

			</div>
		</div>
	</div>
	</div>
	);
};

export default AboutMayor;
