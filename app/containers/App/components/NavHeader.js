import React, { PropTypes } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import Brand from './Brand'
import NavHeaderWrapper from './NavHeaderWrapper'

export default class NavHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
  }

  handleNavClick (loc, e) {
    e.preventDefault()
    return this.props.push(loc)
  }

  renderLeftNavs () {
    const opts = [
      {label: 'FAE', link: '/fate'},
      {label: 'MoU', link: '/umdaar'}
    ]

    return this.renderNavs(opts)
  }

  renderRightNavs () {
    const opts = []

    return this.renderNavs(opts)
  }

  renderNavs (opts) {
    return opts.map((opt, i) => {
      return (<NavItem
        key={i}
        eventKey={i}
        onClick={this.handleNavClick.bind(this, opt.link)}>
        {opt.label}
      </NavItem>)
    })
  }

  render () {
    return (
      <NavHeaderWrapper>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#' onClick={this.handleNavClick.bind(this, '/')}>
                <Brand src='/assets/logo.png' />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {this.renderLeftNavs()}
            </Nav>
            <Nav pullRight>
              {this.renderRightNavs()}
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </NavHeaderWrapper>
    )
  }
}

NavHeader.defaultProps = {
}

NavHeader.propTypes = {
  push: PropTypes.func
}
