import React from 'react'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'

const slider = () =>
        <div>
            <AutoRotatingCarousel label="Book">
                <Slide
                    media={<img src="https://static.gobumpr.com/offers-imgs/interior-detailing-999-2017-min.jpg" />}
                    // mediaBackgroundStyle={{ backgroundColor: red400 }}
                    // contentStyle={{ backgroundColor: red600 }}
                    subtitle="Offer Title!"
                />
                <Slide
                    media={<img src="https://static.gobumpr.com/offers-imgs/interior-detailing-999-2017-min.jpg" />}
                    // mediaBackgroundStyle={{ backgroundColor: blue400 }}
                    // contentStyle={{ backgroundColor: blue600 }}
                    subtitle="Offer Title!"
                />
                <Slide
                    media={<img src="https://static.gobumpr.com/offers-imgs/interior-detailing-999-2017-min.jpg" />}
                    // mediaBackgroundStyle={{ backgroundColor: green400 }}
                    // contentStyle={{ backgroundColor: green600 }}
                    subtitle="Offer Title!"
                />
            </AutoRotatingCarousel>
        </div>

export default slider
