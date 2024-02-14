import { useState } from 'react'
import Logo from '../images/icons/Logo.svg'
import TelegramIcon from '../images/icons/telegram-icon.svg'
import WhatsappIcon from '../images/icons/whatsapp-icon.svg'
import BurgerMenu from '../images/icons/menu-hamburger.svg'
import Cross from '../images/icons/cross.svg'
import Call from '../images/icons/call.svg';

const Header = () => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className='max-w-[1220px] mx-auto bg-white rounded-[20px] realtive max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:rounded-none'>
      <nav className='flex items-center justify-between p-[20px]'>
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
        <div className='hidden max-[1080px]:flex gap-3 items-center'>
          <img className='max-[1080px]:hidden max-sm:block' src={Call} alt="" />
          <img onClick={() => setShow((prev) => !prev)} src={BurgerMenu} alt="" />
          <span className='max-sm:hidden'>Меню</span>
        </div>
        <ul className='flex gap-[32px] max-[1080px]:hidden'>
          <li><a href="#">Выкуп</a></li>
          <li><a href="#">Доставка</a></li>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Партнеры</a></li>
        </ul>
        <div className='flex flex-col max-sm:hidden'>
          <span>1 ¥ = <span className='text-green-400'>12,53 ₽</span>
          </span>
          <span>1 $ = <span className='text-green-400'>92,02 ₽</span></span>
        </div>
        <div className='flex items-center gap-[10px] max-sm:hidden'>
            <a href="#">
              <img src={TelegramIcon} alt="TelegramIcon" />
            </a>
            <a href="#">
              <img src={WhatsappIcon} alt="WhatsappIcon" />
            </a>
        </div>
        <div className='max-md:hidden'>
          <p className=' text-xs text-right'>Cвяжитесь с нами</p>
          <a href="tel:89222927772">8-922-292-777-2</a>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {
        show ? 
        <div className='fixed z-30 top-0 left-0 w-full h-screen bg-mainBackground duration-300'>
           
            <img className='absolute top-4 right-4' onClick={() => setShow((prev) => !prev)} src={Cross} alt="" />
            
            <nav className='pt-[70px] pl-[40px]'>
              <ul className='flex flex-col gap-[24px]  mb-[65px]'>
                <li><a onClick={() => setShow((prev) => !prev)} href="#">Выкуп</a></li>
                <li><a onClick={() => setShow((prev) => !prev)} href="#">Доставка</a></li>
                <li><a onClick={() => setShow((prev) => !prev)} href="#">Услуги</a></li>
                <li><a onClick={() => setShow((prev) => !prev)} href="#">О нас</a></li>
                <li><a onClick={() => setShow((prev) => !prev)} href="#">Контакты</a></li>
                <li><a onClick={() => setShow((prev) => !prev)} href="#">Партнеры</a></li>
              </ul>
              <div className='mb-8'>
                <h5 className='font-bold mb-4'>Курс</h5>
                <div className='flex flex-col'>
                  <span className='mb-2'>1 ¥ = <span className='text-green-400'>12,53 ₽</span></span>
                  <span>1 $ = <span className='text-green-400'>92,02 ₽</span></span>
                </div>
              </div>

              <div>
                 <p className='text-xs mb-1'>Cвяжитесь с нами</p>
                 <a className='mb-4 inline-block' href="tel:89222927772">8-922-292-777-2</a>
                 <div className='flex items-center gap-[10px]'>
                    <a href="#">
                      <img src={TelegramIcon} alt="TelegramIcon" />
                    </a>
                    <a href="#">
                      <img src={WhatsappIcon} alt="WhatsappIcon" />
                    </a>
                </div>
              </div>

            </nav>
        </div> 
        : 
        <div className='fixed top-0 left-[-100%] w-full h-screen bg-mainBackground duration-150'>
        </div>
      }
      


    </div>
  )
}

export default Header














// import { useState } from 'react'
// import Logo from '../images/icons/Logo.svg'
// import TelegramIcon from '../images/icons/telegram-icon.svg'
// import WhatsappIcon from '../images/icons/whatsapp-icon.svg'
// import BurgerMenu from '../images/icons/menu-hamburger.svg'
// import Cross from '../images/icons/cross.svg'
// import Call from '../images/icons/call.svg';

// const Header = () => {
//   const [show, setShow] = useState<boolean>(false)
//   return (
//     <div className='max-w-[1220px] mx-auto bg-white rounded-[20px] realtive max-sm:w-full max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:rounded-none'>
//       <nav className='flex items-center justify-between p-[20px]'>
//         <a href="#">
//           <img src={Logo} alt="Logo" />
//         </a>
//         <div className='hidden max-[1080px]:flex gap-3 items-center'>
//           <img className='max-[1080px]:hidden max-sm:block' src={Call} alt="" />
//           <img onClick={() => setShow((prev) => !prev)} src={BurgerMenu} alt="" />
//           <span className='max-sm:hidden'>Меню</span>
//         </div>
//         <ul className='flex gap-[32px] max-[1080px]:hidden'>
//           <li><a href="#">Выкуп</a></li>
//           <li><a href="#">Доставка</a></li>
//           <li><a href="#">Услуги</a></li>
//           <li><a href="#">О нас</a></li>
//           <li><a href="#">Контакты</a></li>
//           <li><a href="#">Партнеры</a></li>
//         </ul>
//         <div className='flex flex-col max-sm:hidden'>
//           <span>1 ¥ = <span className='text-green-400'>12,53 ₽</span>
//           </span>
//           <span>1 $ = <span className='text-green-400'>92,02 ₽</span></span>
//         </div>
//         <div className='flex items-center gap-[10px] max-sm:hidden'>
//             <a href="#">
//               <img src={TelegramIcon} alt="TelegramIcon" />
//             </a>
//             <a href="#">
//               <img src={WhatsappIcon} alt="WhatsappIcon" />
//             </a>
//         </div>
//         <div className='max-md:hidden'>
//           <p className=' text-xs text-right'>Cвяжитесь с нами</p>
//           <a href="tel:89222927772">8-922-292-777-2</a>
//         </div>
//       </nav>

//       {/* MOBILE MENU */}
//       {
//         show ? 
//         <div className='fixed z-30 top-0 left-0 w-full h-screen bg-mainBackground duration-300'>
//             <div className='flex justify-end p-4'>
//             <img onClick={() => setShow((prev) => !prev)} src={Cross} alt="" />
//             </div>
//             <nav className='pt-[70px] pl-[40px]'>
//               <ul className='flex flex-col gap-[32px]  mb-[65px]'>
//                 <li><a onClick={() => setShow((prev) => !prev)} href="#">Выкуп</a></li>
//                 <li><a onClick={() => setShow((prev) => !prev)} href="#">Доставка</a></li>
//                 <li><a onClick={() => setShow((prev) => !prev)} href="#">Услуги</a></li>
//                 <li><a onClick={() => setShow((prev) => !prev)} href="#">О нас</a></li>
//                 <li><a onClick={() => setShow((prev) => !prev)} href="#">Контакты</a></li>
//                 <li><a onClick={() => setShow((prev) => !prev)} href="#">Партнеры</a></li>
//               </ul>
//               <div className='mb-8'>
//                 <h5 className='font-bold mb-4'>Курс</h5>
//                 <div className='flex flex-col'>
//                   <span className='mb-2'>1 ¥ = <span className='text-green-400'>12,53 ₽</span></span>
//                   <span>1 $ = <span className='text-green-400'>92,02 ₽</span></span>
//                 </div>
//               </div>

//               <div>
//                  <p className='text-xs mb-1'>Cвяжитесь с нами</p>
//                  <a className='mb-4 inline-block' href="tel:89222927772">8-922-292-777-2</a>
//                  <div className='flex items-center gap-[10px]'>
//                     <a href="#">
//                       <img src={TelegramIcon} alt="TelegramIcon" />
//                     </a>
//                     <a href="#">
//                       <img src={WhatsappIcon} alt="WhatsappIcon" />
//                     </a>
//                 </div>
//               </div>

//             </nav>
//         </div> 
//         : 
//         <div className='fixed top-0 left-[-100%] w-full h-screen bg-mainBackground duration-150'>
//         </div>
//       }
      


//     </div>
//   )
// }

// export default Header