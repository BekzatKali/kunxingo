import Person1 from '../images/Person1.jpg'
import Person2 from '../images/Person2.jpg'
import Person3 from '../images/Person3.jpg'
import Person4 from '../images/Person4.jpg'
import Person5 from '../images/Person5.jpg'
import Person6 from '../images/Person6.jpg'

const OurTeam = () => {
  return (
    <div className="bg-mainBackground">
        <div className="max-w-[1220px] mx-auto px-4 pb-[140px]">
            <div className="mb-16">
                <span className='text-xs px-4 py-[6px] mb-3 rounded-[50px] inline-block bg-white'>
                    Наша команда
                </span>
                <h2 className='font-bold text-4xl max-w-[792px] mb-16'>
                Каждый наш сотрудник является специалистом в своей сфере
                </h2>
                <div className='grid grid-cols-2 gap-6 max-sm:grid max-[576px]:grid-cols-1'>
                    <div className='flex items-center'>
                        <img className='rounded-[20px] mr-6 max-md:w-[110px] max-md:h-[110px] object-cover' src={Person1} alt="" />
                        <div>
                            <h3 className='font-bold text-2xl mb-6'>Александр Липович</h3>
                            <p>Бухгалтер финансист</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className='rounded-[20px] mr-6 max-md:w-[110px] max-md:h-[110px] object-cover' src={Person2} alt="" />
                        <div>
                            <h3 className='font-bold text-2xl mb-6'>Александр Липович</h3>
                            <p>Бухгалтер финансист</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className='rounded-[20px] mr-6 max-md:w-[110px] max-md:h-[110px] object-cover' src={Person3} alt="" />
                        <div>
                            <h3 className='font-bold text-2xl mb-6'>Александр Липович</h3>
                            <p>Бухгалтер финансист</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className='rounded-[20px] mr-6 max-md:w-[110px] max-md:h-[110px] object-cover' src={Person4} alt="" />
                        <div>
                            <h3 className='font-bold text-2xl mb-6'>Александр Липович</h3>
                            <p>Бухгалтер финансист</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className='rounded-[20px] mr-6 max-md:w-[110px] max-md:h-[110px] object-cover' src={Person5} alt="" />
                        <div>
                            <h3 className='font-bold text-2xl mb-6'>Александр Липович</h3>
                            <p>Бухгалтер финансист</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img className='rounded-[20px] mr-6 max-md:w-[110px] max-md:h-[110px] object-cover' src={Person6} alt="" />
                        <div>
                            <h3 className='font-bold text-2xl mb-6'>Александр Липович</h3>
                            <p>Бухгалтер финансист</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam