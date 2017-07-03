import React from 'react'
import SwipeableViews from 'react-swipeable-views'

const Swipeables = () =>
  <div>
    <SwipeableViews>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        slide n°1
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        slide n°2
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        slide n°3
      </div>
    </SwipeableViews>
  </div>

const url1 = 'https://static.gobumpr.com/offers-imgs/ac-service-999-thumb.jpg'
const url2 = 'https://static.gobumpr.com/offers-imgs/ac-service-999-thumb.jpg'
const url3 = 'https://static.gobumpr.com/offers-imgs/ac-service-999-thumb.jpg'

const styles = {
  slide: {
    padding: 15,
    minHeight: 300,
    maxHeight: 300,
    color: '#000'
  },
  slide1: {
    background: 'url(' + url1 + ') center no-repeat'
  },
  slide2: {
    background: 'url(' + url2 + ') center no-repeat'
  },
  slide3: {
    background: 'url(' + url3 + ') center no-repeat'
  }
}

export default Swipeables
