import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from 'react';
import LeftArrow from '../images/icons/left-arrow.svg';
import RightArrow from '../images/icons/right-arrow.svg';
import Photos from '../data/GoodsPhotosData';

const GoodsPhotos = () => {
  const [data] = useState(Photos)
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className='bg-mainBackground overflow-hidden min-h-[488px] max-[576px]:relative'>
        <div className="relative max-w-[1220px] mx-auto">
            <div className='max-w-[1220px] mx-auto px-4 mb-16'>
                <span className='text-xs px-4 py-[6px] mb-3 rounded-[50px] inline-block bg-white'>
                    Фото грузов
                </span>
                <div className='flex justify-between mb-16'>

                    <h2 className='font-bold text-4xl max-w-[792px] max-[576px]:mb-[370px]'>
                        Наш подход к перевозкам
                    </h2>

                    <div className='flex gap-[32px] relative max-[576px]:hidden'>
                        <button onClick={() => (sliderRef.current as any).slickPrev()}>
                            <img className='cursor-pointer' src={LeftArrow} alt="LeftArrow" />
                        </button>
                        <button onClick={() => (sliderRef.current as any).slickNext()}>
                            <img className='cursor-pointer' src={RightArrow} alt="RightArrow" />
                        </button>
                    </div>


                </div>
            </div>
            <Slider ref={sliderRef} {...settings} className="max-w-[1520px] absolute top-[148px] left-[0px] forSlickGoodsPhotos">
                    {data.map((item, index) => (
                        <div key={index} className='w-[282px] h-[340px] rounded-[20px]'>  
                            <img className='w-full h-full object-cover rounded-[20px]' src={item.img} alt="" />
                        </div>
                    ))}
            </Slider>
            <div className='hidden gap-[32px] relative max-[576px]:flex max-[576px]:pt-10px max-[576px]:flex max-[576px]:justify-center'>
                        <button onClick={() => (sliderRef.current as any).slickPrev()}>
                            <img className='cursor-pointer' src={LeftArrow} alt="LeftArrow" />
                        </button>
                        <button onClick={() => (sliderRef.current as any).slickNext()}>
                            <img className='cursor-pointer' src={RightArrow} alt="RightArrow" />
                        </button>
            </div>
        </div>
    </div>
  )
}

export default GoodsPhotos









{/* {data.map((item, index) => (
                   
                        <div className='min-w-[282px] h-[340px] rounded-[20px]' key={index}>
                            <img className='w-full h-full object-cover rounded-[20px]' src={item.img} alt="" />
                        </div>
                   
                ))} */}

                {/* <div className='w-[282px] h-[340px] rounded-[20px]'>
                            <img className='w-full h-full object-cover rounded-[20px]' src={data[0].img} alt="" />
                        </div>

                        <div className='w-[282px] h-[340px] rounded-[20px]'>
                            <img className='w-full h-full object-cover rounded-[20px]' src={data[1].img} alt="" />
                        </div>

                        <div className='w-[282px] h-[340px] rounded-[20px]'>
                            <img className='w-full h-full object-cover rounded-[20px]' src={data[2].img} alt="" />
                        </div>

                        <div className='w-[282px] h-[340px] rounded-[20px]'>
                            <img className='w-full h-full object-cover rounded-[20px]' src={data[3].img} alt="" />
                        </div>

                        <div className='w-[282px] h-[340px] rounded-[20px]'>
                            <img className='w-full h-full object-cover rounded-[20px]' src={data[4].img} alt="" />
                        </div>
                        <div className='w-[282px] h-[340px] rounded-[20px]'>
                            <img className='w-full h-full object-cover rounded-[20px]' src={data[5].img} alt="" />
                        </div> */}