/* @flow */
// dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Step,
  StepLabel,
  Stepper,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

// styles
import style from './Home.scss'

// JSS
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
}

type Props = {
  classes: any
}

type State = {
  activeStep: number,
  auth: boolean,
  anchorEl: ?string,
  value: number
}

function getSteps() {
  return ['Paso 1', 'Paso 2', 'Paso 3']
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'El primer paso'
    case 1:
      return 'El segundo paso'
    case 2:
      return 'El tercer paso'
    default:
      return 'Paso no reconocido'
  }
}

class Home extends Component<Props, State> {
  state = {
    activeStep: 0,
    auth: true,
    anchorEl: null,
    value: 0
  }

  handleBack = () => {
    const { activeStep } = this.state
    this.setState({
      activeStep: activeStep - 1
    })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleChange = (event: any, value: number) => {
    this.setState({ value })
  }

  handleChangeIndex = (index: number) => {
    this.setState({ value: index })
  }

  handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleNext = () => {
    const { activeStep } = this.state
    this.setState({
      activeStep: activeStep + 1
    })
  }

  handleReset = () => {
    this.setState({
      activeStep: 0
    })
  }

  componentDidMount = () => {
    /* *** */
  }

  render(): any {
    const { classes } = this.props
    const { activeStep, auth, anchorEl, value } = this.state
    const steps = getSteps()
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={style.home}>
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}>
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Home" />
                <Tab label="About" component={Link} to="/about" />
                <Tab label="Blog" component={Link} to="/blog" />
              </Tabs>
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={this.handleClose}>
                  <MenuItem onClick={this.handleClose}>Perfil</MenuItem>
                  <MenuItem onClick={this.handleClose}>Mi cuenta</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        {/** *** */}
        <Stepper activeStep={activeStep}>
          {steps.map(label => {
            const props = {}
            const labelProps = {}
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Todos los pasos han sido completados - haz finalizado
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reiniciar
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}>
                  Regresar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}>
                  {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
