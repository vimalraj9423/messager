import React from 'react'
import SwipeableViews from 'react-swipeable-views'

const Swipeable = () =>
  <SwipeableViews>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
  </SwipeableViews>

const url1 = 'https://static.gobumpr.com/offers-imgs/ac-service-999-thumb.jpg'
const url2 = 'https://static.gobumpr.com/offers-imgs/ac-service-999-thumb.jpg'
const url3 = 'https://static.gobumpr.com/offers-imgs/ac-service-999-thumb.jpg'

const styles = {
  slide: {
    padding: 15,
    minHeight: 300,
    maxHeight: 300,
    color: '#fff'
  },
  slide1: {
    backgroundImage: 'url(' + url1 + ')'
  },
  slide2: {
    backgroundImage: 'url(' + url2 + ')'
  },
  slide3: {
    backgroundImage: 'url(' + url3 + ')'
  }
}

export default Swipeable
