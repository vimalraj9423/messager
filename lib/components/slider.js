import React from 'react'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'

const Slider = () =>
  <div>
    <AutoRotatingCarousel label="Book">
      <Slide
        media={
          <img src="https://static.gobumpr.com/offers-imgs/interior-detailing-999-2017-min.jpg" />
        }
        subtitle="Offer Title!"
      />
      <Slide
        media={
          <img src="https://static.gobumpr.com/offers-imgs/interior-detailing-999-2017-min.jpg" />
        }
        subtitle="Offer Title!"
      />
      <Slide
        media={
          <img src="https://static.gobumpr.com/offers-imgs/interior-detailing-999-2017-min.jpg" />
        }
        subtitle="Offer Title!"
      />
    </AutoRotatingCarousel>
    <span>test</span>
  </div>

export default Slider
