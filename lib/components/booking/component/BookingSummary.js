import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import { FormControl, FormLabel, FormControlLabel } from 'material-ui/Form'
import Radio, { RadioGroup } from 'material-ui/Radio'
import Paper from 'material-ui/Paper'
import classNames from 'classnames/bind'
import compose from 'recompose/compose'
import withWidth from 'material-ui/utils/withWidth'
import { green, red, orange } from 'material-ui/colors'

const styles = theme => ({
  paddWidth: {
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      paddingLeft: '0px !important',
      paddingRight: '0px !important'
    }
  },
  root: {
    margin: 0,

    [theme.breakpoints.down('sm')]: {
      padding: '0px !important',
      width: '100% !important',
      background: '#eeeeee'
    }
  },
  demo: {
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      paddingLeft: '0px !important',
      paddingRight: '0px !important',
      margin: 0
    }
  },
  paper: {
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      boxShadow: 'none'
    }
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  b: {
    padding: '2% 3%',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingRight: 0,
      background: '#eeeeee'
    }
  },
  summaryTitle: {
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      background: '#eeeeee'
    }
  },
  bookSummaryTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.down('xs')]: {
      background: '#eeeeee'
    }
  },
  summaryDescription: {
    paddingLeft: 106,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 6
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0
    }
  },
  gridDescription: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'max-content',
      paddingRight: '13px !important',
      paddingTop: '0px !important',
      paddingTop: '4px !important',
      paddingBottom: '4px !important',
      paddingRight: '13px !important'
    }
  },
  gridBookingDetails: {
    paddingLeft: 34,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'max-content',
      paddingLeft: '2px !important',
      fontSize: 15,
      paddingTop: '4px !important',
      paddingBottom: '4px !important',
      paddingRight: '13px !important'
    }
  }
})
const FloatLeft = { float: 'right' }
const SemiColon = () => {
  return <span style={FloatLeft}>:</span>
}

const paddingPriceTag = {
  paddingLeft: 34
}
const summaryPriceContentbg = {
  background: 'white',
  width: '100% !important',
  paddingLeft: '0px !important',
  paddingRight: '0px !important',
  margin: 0
}
class PriceTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }
  render() {
    const PriceSummary = {}
    return (
      <div>
        {this.state.PriceTag.map((text, index) => {
          return (
            <Grid
              container
              spacing={24}
              key={index}
              style={summaryPriceContentbg}
            >
              <Grid
                item
                xs={6}
                sm={6}
                style={paddingPriceTag}
                className={this.props.classes.gridDescription}
              >
                <b>
                  {' '}
                  <span className={this.props.classes.summaryDescription}>
                    {' '}
                    {text.description}{' '}
                  </span>
                </b>
                <SemiColon />
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                className={this.props.classes.gridBookingDetails}
              >
                {text.value}
              </Grid>
            </Grid>
          )
        })}
      </div>
    )
  }
}

class BookingSummary extends React.Component {
  state = {
    direction: 'row',
    justify: 'center',
    align: 'center',
    gutter: '16'
  };
  constructor(props) {
    super(props)
    this.state.bookingDetails = this.props.bookingDetails
  }

  bookSummary() {
    return [
      {
        description: 'Service Provider',
        value: 'Vishnu AutoMobiles'
      },
      {
        description: 'Service Type',
        value: 'General Serivice'
      },
      {
        description: 'Booking ID',
        value: '12345'
      },
      {
        description: ' Vechicle',
        value: 'Maruti Alto'
      },
      {
        description: ' Service Date',
        value: '08 May, 2017'
      },
      {
        description: 'Registration No',
        value: 'TN/06/L/1245'
      }
    ]
  }

  render() {
    const classes = this.props.classes
    const { align, direction, justify } = this.state
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.paddWidth}>
          <Grid
            container
            className={classes.demo}
            align={align}
            direction={direction}
            justify={justify}
          >
            <Grid item md={8} sm={10} xs={12} className={classes.paddWidth}>
              <Paper className={classNames(classes.paper, classes.b)}>
                <div className={classes.summaryTitle}>
                  {' '}
                  Hola! Your booking has been confirmed
                </div>
                <div className={classes.summaryTitle}>
                  Track Your service with our Real Time Tracking.
                </div>
                <div className={classes.bookSummaryTitle}> Booking Summary</div>
                <div className={classes.divSummary}>
                  <PriceTag
                    PriceTag={this.state.bookingDetails}
                    classes={this.props.classes}
                  />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

BookingSummary.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(BookingSummary)
