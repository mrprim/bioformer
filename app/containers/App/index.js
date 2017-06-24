import React from 'react'
import Helmet from 'react-helmet'
import NavHeader from './components/NavHeader'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Helmet >
          <title>Mindfog</title>
        </Helmet>
        <NavHeader push={this.props.push} />
        {React.Children.toArray(this.props.children)}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({})
function mapDispatchToProps (dispatch) {
  return {
    ...bindActionCreators({push}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
