import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias molestias iusto ducimus in magni! Numquam, accusamus. Earum minus nam, quas corrupti error porro! Quae modi quia nulla maiores labore veniam.'
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias molestias iusto ducimus in magni! Numquam, accusamus. Earum minus nam, quas corrupti error porro! Quae modi quia nulla maiores labore veniam.'
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Smith Noval',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse illum ipsam molestias hic a labore consequatur cumque error sint!'
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Shanum Bimantara',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias molestias iusto ducimus in magni! Numquam, accusamus. Earum minus nam, quas corrupti error porro! Quae modi quia nulla maiores labore veniam.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({id,avatar,name,review}, index) => {
            return(
              <SwiperSlide className='testimonials' id={index}>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          } )
        }
      </Swiper>

    </section>
  )
}

export default Testimonials