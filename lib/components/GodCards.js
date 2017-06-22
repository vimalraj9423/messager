import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Paper from 'material-ui/Paper'
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card'

const GodCardsWrapper = styled(Paper)`
  min-height: 450px !important;
  width: 100% !important;
  text-align: center !important;
  display: inline-block !important;
`
const CardWrapper = styled(Card)`
  width: 200px !important;
  padding: 10px!important;
  margin: 10px !important;
  text-align: center !important;
  display:inline-block !important;
`
const GodCard = ({ title, description, imgSrc }) =>
  <CardWrapper>
    <CardMedia overlay={<CardTitle title={title} />}>
      <img src={imgSrc} alt="" height="250" width="50" />
    </CardMedia>
    <CardText>
      {description}
    </CardText>
  </CardWrapper>

GodCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}

const GodCards = ({ gods }) =>
  <GodCardsWrapper zDepth={5}>
    {gods.map(({ name, description, imgSrc }, index) =>
      <GodCard
        key={index}
        title={name}
        description={description}
        imgSrc={imgSrc}
      />
    )}
  </GodCardsWrapper>

GodCards.propTypes = {
  gods: PropTypes.array.isRequired
}

export default GodCards
