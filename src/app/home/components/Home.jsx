/* @flow */
// dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// Components
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
// Icons
import AccountCircle from '@material-ui/icons/AccountCircle'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import SettingsIcon from '@material-ui/icons/Settings'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import Webcam from 'react-webcam'

// styles
// import style from './Home.scss'

// JSS
const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  drawerPaper: {
    position: 'relative',
    width: 240
  },
  instructions: {
    textAlign: 'center'
  },
  grow: {
    flexGrow: 1
  },
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar
})

type Props = {
  classes: any
}

type State = {
  activeStep: number,
  auth: boolean,
  anchorEl: ?string,
  screenshot: ?string,
  value: number
}

function getSteps() {
  return [
    'Iniciar',
    'Tomar Selfie',
    'Tomar foto INE frontal',
    'Tomar foto INE posterior',
    'Enviar'
  ]
}

function getStepContent(step) {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
  }

  switch (step) {
    case 0:
      return 'Regístrate para covertirte en conductor'
    case 1:
      return (
        <div>
          <Webcam
            audio={false}
            height={350}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
        </div>
      )
    case 2:
      return (
        <div>
          <Webcam
            audio={false}
            height={350}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
        </div>
      )
    case 3:
      return (
        <div>
          <Webcam
            audio={false}
            height={350}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
        </div>
      )
    case 4:
      return 'Da clic en finalizar para finalizar con el proceso'
    default:
      return 'Paso no reconocido'
  }
}

class Home extends Component<Props, State> {
  state = {
    activeStep: 0,
    auth: true,
    anchorEl: null,
    screenshot: null,
    value: 0
  }

  handleBack = () => {
    const { activeStep } = this.state
    this.setState({
      activeStep: activeStep - 1
    })
  }

  handleClick = () => {
    const screenshot = this.Webcam.getScreenshot()
    this.setState({ screenshot })
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
    const { activeStep, auth, anchorEl, screenshot, value } = this.state
    const steps = getSteps()
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <AppBar position="absolute" className={classes.appBar}>
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
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}>
            <div className={classes.toolbar} />
            <List>
              <div>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inicio" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Identidades" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Configuración" />
                </ListItem>
              </div>
            </List>
            <Divider />
            <List>
              <div>
                <ListItem button>
                  <ListItemIcon>
                    <FingerprintIcon />
                  </ListItemIcon>
                  <ListItemText primary="Web SDK" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <FingerprintIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mobile SDK" />
                </ListItem>
              </div>
            </List>
          </Drawer>
          {/** Stepper */}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography noWrap>
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
                    <Button
                      onClick={this.handleReset}
                      className={classes.button}>
                      Reiniciar
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep)}
                    </Typography>
                    <div>
                      <Button onClick={this.handleClick}>Tomar foto</Button>
                      {screenshot ? <img src={screenshot} alt="" /> : null}
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
                        {activeStep === steps.length - 1
                          ? 'Finalizar'
                          : 'Siguiente'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Typography>
          </main>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
