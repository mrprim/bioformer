import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import GiantGoogleButton from '../../components/GiantGoogleButton'
import PageWrapper from './components/PageWrapper'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import { createStructuredSelector } from 'reselect'
import { fetchRandomWeapon } from './actions'
import { toTitleCase } from '../../utils/strings'
import {
  makeSelectWeapons
} from './selectors'

export class Fate extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    this.generateWeapon()
  }

  generateWeapon () {
    this.props.actions.fetchRandomWeapon()
  }

  handleGenerateWeaponClick () {
    this.generateWeapon()
  }

  renderWeapons () {
    const { weapons = [] } = this.props

    if (weapons.length === 0) return null

    return weapons.map((w, i) => {
      if (!w) return null

      return <div key={i}>{this.renderWeapon(w)}</div>
    })
  }

  renderWeapon (w) {
    const { category, technology } = w
    const title = toTitleCase(technology.name + ' ' + category.name)
    return (<div>
      <h2>{title}</h2>
    </div>)
  }

  render () {
    console.log(this.props)

    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Helmet title='Fate' />
          <CSSTransitionGroup
            transitionName='fate'
            transitionAppear
            transitionAppearTimeout={800}
            transitionEnterTimeout={800}
            transitionLeaveTimeout={800} />

          {this.renderWeapons()}

          <GiantGoogleButton onClick={this.handleGenerateWeaponClick.bind(this)}>
            &#9861;
          </GiantGoogleButton>
        </PageWrapper>

      </ThemeProvider>
    )
  }
}

Fate.defaultProps = {
  weapons: []
}

Fate.propTypes = {
  weapons: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
  weapons: makeSelectWeapons()
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({fetchRandomWeapon}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fate)
