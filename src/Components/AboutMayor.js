// import mayorImage from '../../images/profile.jpeg';


const AboutMayor = () => {
	// const { aboutMe } = useContext(AboutMeContext);

	return (
	<div className="pt-8 px-4 md:px-[150px] lg:px-[150px] font-Lora bg-gray-100">
		<h1 className="text-black text-2xl md:text-4xl pb-2 font-bold uppercase text-left">
			Mayor Nelson Delos Santos
		</h1>
        <div className='h-[5px] bg-black mb-14'></div>

		
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20 px-8 items-center">
			<div className="w-full sm:w-1/2 mb-7 sm:mb-0">
				<img src={"/images/mayor.jpg"} className="rounded-lg w-[350px] mx-auto" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-1/2 text-left">
		
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
			
					>
						Dr. Nelson Delos Santors is the Mayor of San Lorenzo Ruiz, Camarines Norte. He is a son of immigrants, Boston Public Schools mom to two boys, MBTA commuter, and fierce believer that we can solve our deepest challenges through building community. 
						Mayor Wu has been a voice for accessibility, transparency, and community engagement in city leadership. First elected to the Boston City Council in November 2013 at the age of 28, Wu is the first Asian-American woman to serve on the Council. 
					</p>

			</div>
		</div>
	</div>
	);
};

export default AboutMayor;
