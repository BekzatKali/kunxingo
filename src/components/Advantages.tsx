import AdvantagesGirl from '../images/advantagesgirlphoto.png'
import AdvantagesContainer from '../images/advantagescontainerphoto.png'

const Advantages = () => {
  return (
    <div className="bg-mainBackground">
        <div className="max-w-[1220px] mx-auto px-4 pb-[140px]">
            <div className="mb-16">
                <span className='text-xs px-4 py-[6px] mb-3 rounded-[50px] inline-block bg-white'>Наши преимущества</span>
                <h2 className='font-bold text-4xl max-w-[792px] mb-16'>
                Почему клиенты работают с нами и рекомендуют своим партнерам
                </h2>
            </div>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-4 max-sm:grid-cols-1">
                <div className="col-span-1 row-span-3 bg-white rounded-[20px] max-lg:row-span-2 max-lg:col-1 p-4 relative min-h-[460px] max-sm:col-span-1 max-sm:row-span-1">
                    <h4 className="font-bold mb-[20px]">Юридическая и бухгалтерская <br /> поддержка</h4>
                    <p className='max-w-[336px] z-20'>Мы предоставляем полный пакет документов в соответствии с законодательством РФ и возможность принятия налога к вычету по всем приобретаемым товарам и услугам</p>
                    <img className='absolute right-0 bottom-0 max-sm:w-[160px] max-sm:h-[279px] object-cover' src={AdvantagesGirl} alt="" />
                </div>
                <div className="row-span-2 col-span-2 bg-white max-lg:row-span-1 max-lg:col-span-2 rounded-[20px] p-4 order-last relative max-sm:col-span-1 max-sm:row-span-1 overflow-hidden">
                    <h4 className="font-bold mb-[20px]">Контроль качества и упаковка</h4>
                    <p className='max-w-[359px] max-sm:max-w-[186px]'>Мы проводим тщательную проверку и упаковку товара перед его отправкой в Россию</p>
                    <img className='absolute top-0 right-0 rounded-[20px] object-cover max-sm:right-[-150px] h-full' src={AdvantagesContainer} alt="" />
                </div>
                <div className="row-span-1 bg-white rounded-[20px] p-4 max-lg:row-span-1 max-lg:col-span-1 max-sm:col-span-1 max-sm:row-span-1">
                    <h4 className="font-bold mb-[20px]">Складские комплексы в Китае</h4>
                    <p>Наши собственные склады на территории Китая предоставляют возможность консолидации грузов, что оптимизирует логистические расходы</p>
                </div>
                <div className="row-span-1 bg-white rounded-[20px] p-4 max-lg:row-span-1 max-lg:col-span-1 max-sm:col-span-1 max-sm:row-span-1">
                    <h4 className="font-bold mb-[20px]">Таможенное оформление</h4>
                    <p>Мы берем на себя все процедуры, связанные с таможенной очисткой грузов</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advantages