import React from 'react'

type PropsType = {
  title: string;
  img: string;
  itemsArray?: string[];
};

const ServicesItem: React.FC<PropsType> = ({title, img, itemsArray}) => {

  return (
    <div className='bg-white min-h-[307px] p-6 flex justify-between flex-col rounded-[20px] max-lg:m-4'>
      <img className='w-[96px] h-[96px] max-lg:w-[48px] max-lg:h-[48px]' src={img} alt="" />
      <h4 className='font-bold text-2xl'>{title}</h4>
      {itemsArray && itemsArray.map((item, index) => (
        <p key={index}>- {item}</p>
      ))}
    </div>
  )
}

export default ServicesItem