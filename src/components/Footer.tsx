import Logo from '../images/icons/logo-footer.svg'
import TelegramIcon from '../images/icons/telegram-icon.svg'
import WhatsappIcon from '../images/icons/whatsapp-icon.svg'

const Footer = () => {
  return (
    <div className=' bg-mainBackground'>
        <div className='bg-black text-white py-12 rounded-t-[60px]'>
        <div className='max-w-[1220px] mx-auto px-4 flex justify-between gap-[60px] max-lg:grid max-lg: grid-cols-3 max-lg:grid-rows-2 max-[576px]:grid-cols-1'>
            <div className='flex flex-col max-[576px]:items-center max-lg:text-center'>
                <a href="#" className='mb-9 w-[121px] h-[27px] max-lg:mx-auto'>
                    <img src={Logo} alt="Logo" />
                </a>
                <span className='mb-4 text-xl font-bold'>Курс</span>
                <span className='mb-[10px]'>1 ¥ = 12,53 ₽</span>
                <span>1 $ = 92,02 ₽</span>
            </div>
            <div className='flex flex-col max-[576px]:items-center max-lg:text-center'>
                <h4 className='mb-4 text-xl font-bold'>Доставка</h4>
                <ul className='flex flex-col gap-[10px]'>
                    <li><a href="#">Доставка из Гуанчжоу</a></li>
                    <li><a href="#">Доставка автотранспортом</a></li>
                    <li><a href="#">Доставка поездом</a></li>
                    <li><a href="#">Доставка по морю</a></li>
                </ul>
            </div>
            <div className='hidden max-lg:flex max-lg:flex-col max-[576px]:flex max-[576px]:flex-col max-[576px]:items-center max-lg:text-center'>
                <h4 className='mb-4 text-xl font-bold'>
                    Режим работы
                </h4>
                <span className='block'>c 7:00 до 19:00 по МСК</span>
            </div>
            <div className='flex flex-col max-[576px]:items-center max-lg:text-center'>
                <h4 className='mb-4 text-xl font-bold'>Услуги</h4>
                <ul className='flex flex-col gap-[10px]'>
                    <li><a href="#">Выкуп товара</a></li>
                    <li><a href="#">Поиск поставщика</a></li>
                    <li><a href="#">Инспекция фабрики поставщика</a></li>
                    <li><a href="#">Страхование груза</a></li>
                    <li><a href="#">Таможенное оформление</a></li>
                </ul>
            </div>
            
            <div className='flex flex-col max-[576px]:items-center max-lg:text-center'>
                <h4 className='mb-4 text-xl font-bold'>Информация</h4>
                <ul className='flex flex-col gap-[10px]'>
                    <li><a href='#'>Отзывы</a></li>
                    <li><a href="#">Требования к грузу</a></li>
                    <li><a href="#">Договор-оферта</a></li>
                    <li><a href="#">Как заключить договор</a></li>
                    <li><a href="#">Способы оплаты услуг</a></li>
                    <li><a href="#">Блог</a></li>
                </ul>
            </div>
            <div className='max-w-[188px] max-[576px]:mx-auto max-lg:text-center'>
                <h4 className='mb-4 text-xl font-bold max-[576px]:text-center'>Контакты</h4>
                <a className='block mb-[10px]' href="tel:89222927772">8-922-292-777-2</a>
                <a className='block mb-[10px]' href='mailto:info@kunxingo.com'>info@kunxingo.com</a>
                <span className='mb-[10px] inline-block'>
                г. Москва пер. 1-й Неопалимовский д.9/15
                </span>
                <div className='flex items-center gap-[10px] mb-5 max-lg:justify-center'>
                    <a href="#">
                        <img src={TelegramIcon} alt="TelegramIcon" />
                    </a>
                    <a href="#">
                        <img src={WhatsappIcon} alt="WhatsappIcon" />
                    </a>
                </div>
                <h4 className='mb-4 text-xl font-bold max-lg:hidden'>
                    Режим работы
                </h4>
                <span className='max-lg:hidden'>c 7:00 до 19:00 по МСК</span>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Footer