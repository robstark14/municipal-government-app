import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const AboutCounter = () => {
	// useCountUp({ ref: 'area', end: 119, duration: 2 });
	// useCountUp({ ref: 'barangays', end: 12, duration: 2 });
	// useCountUp({ ref: 'population', end: 15757, duration: 2 });

	// useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	// useCountUp({ ref: 'projectsCounter', end: 77, duration: 2 });

	return (
		<div className="px-2 md:px-[200px] bg-[url('../public/images/gray-bg.jpg')] mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm ">
			<div className="font-general-medium container mx-auto py-10 block sm:flex sm:justify-between items-center">
				<div className="mb-20 sm:mb-0">
					<h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2 font-bold">
						<CountUp end={119} redraw className='font-bold' >
						{({ countUpRef, start }) => (
							<VisibilitySensor onChange={start} delayedCall>
								<span ref={countUpRef} />
							</VisibilitySensor>
						)}
						</CountUp>
						<span className='font-bold'>km<sup>2</sup></span>
					</h2>
					<span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
						Aggregated Area
					</span>
				</div>

				<div className="mb-20 sm:mb-0">
					<h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2 font-bold">
					<CountUp end={15757} redraw className='font-bold' >
						{({ countUpRef, start }) => (
							<VisibilitySensor onChange={start} delayedCall>
								<span ref={countUpRef} />
							</VisibilitySensor>
						)}
						</CountUp>
					</h2>
					<p className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
						Population
					</p>
					<small className='italic text-center w-full block'>{"(2020 Consensus)"}</small>
				</div>
				<div className="mb-20 sm:mb-0">
					<h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2 font-bold">
					<CountUp end={12} redraw className='font-bold' >
						{({ countUpRef, start }) => (
							<VisibilitySensor onChange={start} delayedCall>
								<span ref={countUpRef} />
							</VisibilitySensor>
						)}
						</CountUp>
					</h2>
					<span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
						Barangays
					</span>
				</div>

				
			</div>
		</div>
	);
};

export default AboutCounter;
