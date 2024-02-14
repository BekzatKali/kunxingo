import ArrowBottom from '../images/icons/arrow-bottom.svg'

const Costs = () => {
    return (
        <div className="bg-mainBackground py-[140px] -z-40">
            <div className="max-w-[1220px] mx-auto px-4 flex justify-between items-center gap-10 max-lg:flex-col">
                <div className="max-w-[486px] max-lg:max-w-full">
                    <span className='text-xs px-4 py-[6px] mb-3 rounded-[50px] inline-block bg-white'>
                        Наши тарифы
                    </span>
                    <h2 className='font-bold text-4xl mb-8'>
                        Стоимость услуг зависит от нескольких ключевых факторов
                    </h2>
                    <p className="mb-12">
                    Мы понимаем, что каждый бизнес уникален, и именно поэтому наши тарифы рассчитываются индивидуально для каждого клиента. Для точного расчета тарифа и выбора оптимального варианта доставки, пожалуйста, обратитесь к нашим сотрудникам.
                    </p>
                    <a className='bg-green-400 text-white px-6 py-4 rounded-[100px] flex items-center w-fit' href="#">Получить консультацию
                        <span className='pl-2'><img src={ArrowBottom} alt="" /></span>
                    </a>
                </div>
                <div className='grid grid-cols-2 gap-6 max-[576px]:grid-cols-1'>
                    <div className='bg-white p-6 rounded-[20px] row-span-1 col-span-1 max-[576px]:row-span-1 max-[576px]:col-span-1'>
                        <h4 className='font-bold text-xl mb-4'>Вес и плотность груза</h4>
                        <p>Зависимость стоимости от массы и объема груза позволяет оптимизировать расходы на логистику</p>
                    </div>
                    <div className='bg-white p-6 rounded-[20px] row-span-1 col-span-1 max-[576px]:row-span-1 max-[576px]:col-span-1' >
                        <h4 className='font-bold text-xl mb-4'>Срок доставки</h4>
                        <p>Время, за которое требуется доставить груз, влияет на итоговую стоимость</p>
                    </div>
                    <div className='bg-white p-6 rounded-[20px] row-span-1 col-span-2 max-[576px]:row-span-1 max-[576px]:col-span-1'>
                        <h4 className='font-bold text-xl mb-4'>Номенклатура товара</h4>
                        <p>Тип и характеристики товара могут повлиять на требования к транспортировке и, соответственно, на тариф</p>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Costs