import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: "INSERT NAME HERE",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi obcaecati dolore rem voluptatem delectus quod quam minus in deleniti."
  },
  {
    avatar: AVTR2,
    name: "INSERT NAME HERE",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi obcaecati dolore rem voluptatem delectus quod quam minus in deleniti."
  },
  {
    avatar: AVTR3,
    name: "INSERT NAME HERE",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi obcaecati dolore rem voluptatem delectus quod quam minus in deleniti."
  },
  {
    avatar: AVTR4,
    name: "INSERT NAME HERE",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi obcaecati dolore rem voluptatem delectus quod quam minus in deleniti."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container' modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      autoplay ={
        delay:2500
      }
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={index} />
                </div>
                <h5>{name}</h5>
                <small>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials