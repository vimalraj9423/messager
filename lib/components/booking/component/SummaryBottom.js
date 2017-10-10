import React from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import { FormControl, FormLabel, FormControlLabel } from 'material-ui/Form'
import Radio, { RadioGroup } from 'material-ui/Radio'
import Paper from 'material-ui/Paper'
import classNames from 'classnames/bind'

const styles = theme => ({
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
      boxShadow: 'none',
      paddingLeft: '0px !important',
      paddingRight: '0px !important'
    }
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  b: {
    padding: '0% 3% 3% 3%'
  },
  summaryTitle: {
    textAlign: 'center'
  },
  bookSummaryTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.down('xs')]: {
      background: '#eeeeee',
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  totalPrice: {
    color: '#ffa800',
    fontWeight: 'bold'
  },
  paddWidth: {
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      paddingLeft: '0px !important',
      paddingRight: '0px !important',
      paddingBottom: '0px !important'
    }
  }
})

class SummaryBottom extends React.Component {
  state = {
    direction: 'row',
    justify: 'center',
    align: 'center',
    gutter: '16',
    data: null
  };
  constructor(props) {
    super(props)
    this.state.data = this.props
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
                <div className={classes.bookSummaryTitle}> ESTIMATE</div>
                <div className={classes.totalPrice}>
                  {' '}
                  ₹ {this.state.data.price}*
                </div>
                <div>
                  {' '}
                  Price shown includes labour charges only.Parts and consumables
                  may be charged separately . Taxes applicable Final bill may
                  vary
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
export default withStyles(styles)(SummaryBottom)
