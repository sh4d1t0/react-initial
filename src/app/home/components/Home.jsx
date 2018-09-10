/* @flow */
// dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
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
  grow: {
    flexGrow: 1
  }
}

type Props = {
  classes: any
}

type State = {
  auth: boolean,
  anchorEl: ?string,
  value: number
}

class Home extends Component<Props, State> {
  state = {
    auth: true,
    anchorEl: null,
    value: 0
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

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  componentDidMount = () => {
    /* *** */
  }

  render(): any {
    const { classes } = this.props
    const { auth, anchorEl, value } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={style.home}>
        <AppBar position="static" color="default">
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
      </div>
    )
  }
}

export default withStyles(styles)(Home)
