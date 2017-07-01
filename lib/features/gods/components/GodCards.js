import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Paper from 'material-ui/Paper'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const GodCardsWrapper = styled(Paper)`
  min-height: 450px ;
  width: 100% ;
  text-align: center ;
  display: inline-block ;
`
const CardWrapper = styled(Card)`
  width: 200px ;
  padding: 10px;
  margin: 10px ;
  text-align: center ;
  display:inline-block ;
`
const FullImg = styled.img`width: 100%;`

const GodCard = ({ title, description, imgSrc }) =>
  <CardWrapper>
    <CardMedia>
      <FullImg src={imgSrc} alt="" height="250" />
    </CardMedia>
    <CardContent>
      <Typography type="headline" component="h2">
        {title}
      </Typography>
      <Typography type="body1">
        {description}
      </Typography>
    </CardContent>
  </CardWrapper>

GodCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}

const GodCards = ({ gods }) =>
  <GodCardsWrapper elevation={5}>
    {gods.map(({ name, description, imgSrc }, index) =>
      <GodCard
        elevation={5}
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
