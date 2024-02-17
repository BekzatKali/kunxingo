import { useState } from 'react'
import LeftArrow from '../images/icons/left-arrow.svg'
import RightArrow from '../images/icons/right-arrow.svg'
import HeroData from '../data/HeroData'
import Header from './Header'
import HeroDataSmall from '../data/HeroDataSmall'

const Hero = () => {
  const [info] = useState(HeroData)
  const [smallInfo] = useState(HeroDataSmall)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const prevSlide = () => {
    const isFirst = currentIndex === 0
    const nextIndex = isFirst ? info.length - 1 : currentIndex - 1
    setCurrentIndex(nextIndex)
  }

  const nextSlide = () => {
    const isLast = currentIndex === info.length - 1
    const nextIndex = isLast ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  return (
    <div className='relative w-full min-h-[800px] max-lg:min-h-[1000px] max-sm:min-h-[0px] max-sm:h-[640px] pt-[32px] px-4'>
        <Header  />

            <div className='max-w-[1220px] mx-auto relative'>
                <div className='min-h-[364px] max-[360px]:max-h-[364px]'>
                    <div className='mt-[154px] max-lg:mt-[210px] max-sm:mt-[110px] max-w-[598px] text-white max-[576px]:hidden max-sm:max-w-[400px] '>
                        <h1 className='font-bold text-6xl mb-[32px] max-[685px]:text-4xl max-md:max-w-[600px]'>
                        {info[currentIndex].title}
                        </h1>
                        <p className='mb-[48px]'>
                            {info[currentIndex].description}
                        </p>
                        <a className='bg-green-400 px-6 py-4 rounded-[100px] inline-block' href="#">Получить консультацию</a>
                    </div>
                    <div className='hidden max-[576px]:block mt-[154px] max-lg:mt-[210px] max-sm:mt-[110px] max-w-[598px] text-white max-[576px]:max-w-[400px]'>
                        <h1 className='font-bold text-6xl mb-[32px] max-sm:text-4xl'>
                        {smallInfo[currentIndex].title}
                        </h1>
                        <p className='mb-[48px]'>
                            {smallInfo[currentIndex].description}
                        </p>
                        <a className='bg-green-400 px-6 py-4 rounded-[100px] inline-block' href="#">Получить консультацию</a>
                    </div>
                </div>
                <div className='max-w-[1220px] mx-auto flex justify-end gap-[32px] absolute right-0 bottom-[-60px] max-[360px]:absolute max-[360px]:right-[0] max-[360px]:bottom-[-80px]'>
                    <img onClick={prevSlide} className='cursor-pointer' src={LeftArrow} alt="LeftArrow" />
                    <img onClick={nextSlide} className='cursor-pointer' src={RightArrow} alt="RightArrow" />
                </div>
            </div>
       
        <img className='max-[576px]:hidden absolute top-0 left-0 w-full h-full object-cover -z-20' src={info[currentIndex].img} alt="HeroImage" />
        <img className='hidden max-[576px]:block absolute top-0 left-0 w-full h-full object-cover -z-20' src={smallInfo[currentIndex].img} alt="HeroImage" />
    </div>
  )
}

export default Hero










{/* <div className='w-full h-[1400px]'>
        <img className='absolute top-0 left-0 w-full h-full object-cover -z-20' src={info[currentIndex].img} alt="HeroImage" />
        <div className='relative max-w-[1220px] mx-auto'>
            <div className='min-h-[364px]'>
                <div className='mt-[154px] max-w-[598px] text-white'>
                    <h1 className='font-bold text-6xl mb-[32px]'>
                    {info[currentIndex].title}
                    </h1>
                    <p className='mb-[48px]'>
                        {info[currentIndex].description}
                    </p>
                    <a className='bg-green-400 px-6 py-4 rounded-[100px] inline-block' href="#">Получить консультацию</a>
                </div>
            </div>
            <div className='max-w-[1220px] mx-auto flex justify-end gap-[32px] absolute right-0 bottom-[-50px]'>
                <img onClick={prevSlide} className='cursor-pointer' src={LeftArrow} alt="LeftArrow" />
                <img onClick={nextSlide} className='cursor-pointer' src={RightArrow} alt="RightArrow" />
            </div>
        </div>
    </div>*/}