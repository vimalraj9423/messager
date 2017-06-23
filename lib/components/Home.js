import React from 'react'
import ListComp from './List.js'
import PropTypes from 'prop-types'

const Home = ({ data }) =>
  <div>
    <div> Home </div>
    <ListComp data={data} />
  </div>

Home.propTypes = {
  data: PropTypes.array.isRequired
}
export default Home
