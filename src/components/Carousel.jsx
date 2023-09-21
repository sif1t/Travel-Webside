import React, {useState} from 'react'

        const sliderData = [
            {
              url: 'https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            },
            {
              url: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
            {
              url: 'https://images.unsplash.com/photo-1693103846224-ff23e91ef751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }
          ];
const Carousel = () => {
      const [slide, setSlide] = useState(0)

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center '>
       {sliderData.map((item, index) => (
             <div className={index === slide ? 'opacity-100' : 'opacity-0'} >
                    {index === slide && (<img className='w-full rounded-md ' src={item.url} alt="/" />)}
             </div>
       ))}
    </div>
  );
};

export default Carousel
