import React from 'react'
import Helmet from 'react-helmet'

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Helmet >
          <title>Mindfog</title>
        </Helmet>

        {React.Children.toArray(this.props.children)}
      </div>
    )
  }
}
