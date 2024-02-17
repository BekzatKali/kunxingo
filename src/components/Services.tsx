import { useState, useRef } from "react"
import FirstItem from '../images/iconsServices/First.svg'
import SecondItem from '../images/iconsServices/Second.svg'
import ThirdItem from '../images/iconsServices/Third.svg'
import FourthItem from '../images/iconsServices/Fourth.svg'
import FifthItem from '../images/iconsServices/Fifth.svg'
import SixthItem from '../images/iconsServices/Sixth.svg'
import SeventhItem from '../images/iconsServices/Seventh.svg'
import EighthItem from '../images/iconsServices/Eighth.svg'
import NinethItem from '../images/iconsServices/Nineth.svg'
import ServicesItem from '../components/ServicesItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from '../images/icons/left-arrow.svg';
import RightArrow from '../images/icons/right-arrow.svg';

const Services = () => {
  const [data] = useState([
    {
        title: 'Выкуп товара',
        img: FirstItem,
        itemsArray: [
          'Прямые закупки товаров у проверенных фабрик-производителей в Китае'
        ]
    },
    {
        title: 'Консультации',
        img: SecondItem,
        itemsArray: [
          'Согласование технических и коммерческих условий',
          'Помощь в переговорах с китайскими партнерами'
        ]
    },
    {
        title: 'Логистика и склад',
        img: ThirdItem,
        itemsArray: [
          'Собственные склады на территории Китая для консолидации и хранения груза',
          'Оптимизация логистических маршрутов для минимизации затрат и времени доставки'
        ]
    },
    {
        title: 'Контроль качества и упаковка',
        img: FourthItem,
        itemsArray: [
          'Предварительная проверка качества товара',
          'Профессиональная упаковка для безопасной транспортировки'
        ]
    },
    {
        title: 'Страховка груза',
        img: FifthItem,
        itemsArray: [
          'Предлагаем полный спектр страховых услуг для обеспечения безопасности вашего груза на всех этапах транспортировки'
        ]
    },
    {
        title: 'Таможенное управление',
        img: SixthItem,
        itemsArray: [
          'Полное сопровождение таможенного оформления грузов согласно законодательству РФ'
        ]
    },
    {
        title: 'Юридическая и финансовая поддержка',
        img: SeventhItem,
        itemsArray: [
          'Предоставление полного пакета документов',
          'Возможность применения НДС к вычету'
        ]
    },
    {
        title: 'Техническая поддержка',
        img: EighthItem,
        itemsArray: [
          'Поддержка клиентов в рабочее время на всех этапах сотрудничества'
        ]
    },
    {
        title: 'Бухгалтерская отчетность',
        img: NinethItem,
        itemsArray: [
          'Подготовка и предоставление полной бухгалтерской отчетности согласно требованиям РФ'
        ]
    }
  ])

  const sliderRef = useRef(null);
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          slidesPerRow: 1,
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1,
          centerPadding: '50px',
        },
      },
    ],
  };
  
  return (
    <div className="bg-mainBackground">
      <div className="max-w-[1220px] mx-auto pb-[140px]">
        <div className="mb-16">
        <div className="px-4">
          <span className='text-xs px-4 py-[6px] mb-3 rounded-[50px] inline-block bg-white'>Наши услуги</span>
          <h2 className='font-bold text-4xl max-w-[792px] mb-16'>
            Мы предоставляем полный комплекс логистических услуг по доставке грузов из Китая в Россию
          </h2>
        </div>

        
        <div className="max-lg:hidden grid grid-cols-3 max-lg:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div key={index}>
              <ServicesItem title={item.title} img={item.img} />
            </div>
          ))}
        </div>


        <Slider ref={sliderRef} {...settings} className="forSlickServices hidden max-lg:block mb-12">
              {data.map((item, index) => (
                <div key={index}>
                  <ServicesItem title={item.title} img={item.img} itemsArray={item.itemsArray} />
                </div>
              ))}
        </Slider>


        <div className='max-lg:flex max-lg:justify-center gap-[32px] relative hidden'>
                <button onClick={() => (sliderRef.current as any).slickPrev()}>
                    <img className='cursor-pointer' src={LeftArrow} alt="LeftArrow" />
                </button>
                <button onClick={() => (sliderRef.current as any).slickNext()}>
                    <img className='cursor-pointer' src={RightArrow} alt="RightArrow" />
                </button>
        </div>


        </div>
    </div>
    </div>
  )
}

export default Services






















// import { useState } from "react"
// import FirstItem from '../images/iconsServices/First.svg'
// import SecondItem from '../images/iconsServices/Second.svg'
// import ThirdItem from '../images/iconsServices/Third.svg'
// import FourthItem from '../images/iconsServices/Fourth.svg'
// import FifthItem from '../images/iconsServices/Fifth.svg'
// import SixthItem from '../images/iconsServices/Sixth.svg'
// import SeventhItem from '../images/iconsServices/Seventh.svg'
// import EighthItem from '../images/iconsServices/Eighth.svg'
// import NinethItem from '../images/iconsServices/Nineth.svg'
// import ServicesItem from '../components/ServicesItem'

// const Services = () => {
//   const [data, setData] = useState([
//     {
//         title: 'Выкуп товара',
//         img: FirstItem
//     },
//     {
//         title: 'Консультации',
//         img: SecondItem
//     },
//     {
//         title: 'Логистика и склад',
//         img: ThirdItem
//     },
//     {
//         title: 'Контроль качества и упаковка',
//         img: FourthItem
//     },
//     {
//         title: 'Страховка груза',
//         img: FifthItem
//     },
//     {
//         title: 'Таможенное управление',
//         img: SixthItem
//     },
//     {
//         title: 'Юридическая и финансовая поддержка',
//         img: SeventhItem
//     },
//     {
//         title: 'Техническая поддержка',
//         img: EighthItem
//     },
//     {
//         title: 'Бухгалтерская отчетность',
//         img: NinethItem
//     }
  
//   ])
  
//   return (
//     <div className="bg-mainBackground">
//       <div className="max-w-[1220px] mx-auto px-4 pb-[140px]">
//         <div className="mb-16">
//         <span className='text-xs px-4 py-[6px] mb-3 rounded-[50px] inline-block bg-white'>Наши услуги</span>
//         <h2 className='font-bold text-4xl max-w-[792px] mb-16'>
//           Мы предоставляем полный комплекс логистических услуг по доставке грузов из Китая в Россию
//         </h2>
//         <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-6">
//           {data.map((item, index) => (
//             <div key={index}>
//               <ServicesItem title={item.title} img={item.img} />
//             </div>
//           ))}
//         </div>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Services