import TelegramIcon from '../images/icons/telegram-icon.svg'
import WhatsappIcon from '../images/icons/whatsapp-icon.svg'

const Contacts = () => {
    return (
        <div className="bg-mainBackground pb-12">
            <div className="max-w-[1220px] mx-auto px-4">
                <div className="mb-16 max-w-[792px]">
                    <span className='text-xs px-4 py-[6px] mb-3 rounded-[50px] inline-block bg-white'>Наши контакты</span>
                    <h2 className='font-bold text-4xl mb-16'>
                    Вы можете связаться с нами любым удобным для вас способом
                    </h2>
                </div>
                <div className='flex gap-[80px] max-[576px]:grid max-[576px]:gap-[40px]'>
                    <div className='max-[576px]:col-span-1 max-[576px]:row-span-1'>
                        <h4 className='font-bold text-xl mb-4'>Контакты</h4>
                        <a className='block mb-[10px]' href="tel:89222927772">8-922-292-777-2</a>
                        <a className='block mb-[10px]' href='mailto:info@kunxingo.com'>info@kunxingo.com</a>
                        <div className='flex items-center gap-[10px]'>
                            <a href="#">
                                <img src={TelegramIcon} alt="TelegramIcon" />
                            </a>
                            <a href="#">
                                <img src={WhatsappIcon} alt="WhatsappIcon" />
                            </a>
                        </div>
                    </div>
                    <div className='max-[576px]:col-span-2 max-[576px]:row-span-1 order-last'>
                        <h4 className='font-bold text-xl mb-4'>Адрес</h4>
                        <p>г. Москва пер. 1-й Неопалимовский д.9/15</p>
                    </div>
                    <div className='max-[576px]:col-span-1 max-[576px]:row-span-1'>
                        <h4 className='font-bold text-xl mb-4'>Режим работы</h4>
                        <p>c 7:00 до 19:00 по МСК</p>
                    </div>
                </div>
               
            </div>
        </div>
      )
}

export default Contacts