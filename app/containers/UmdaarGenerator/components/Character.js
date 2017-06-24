import React from 'react'
import { toTitleCase } from '../../../utils/strings'
import ladder from '../../../../api/umdaar/data/ladder'
import LabelValueItem from './LabelValueItem.js'
import Heading from './Heading'

export default class Character extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
  }

  handleNavClick (loc, e) {
    e.preventDefault()
    return this.props.push(loc)
  }

  renderSummary () {
    const {name, aspects} = this.props

    const summary = name + ' the ' + aspects.bioform
    return (<h2>
      {toTitleCase(summary)}
    </h2>)
  }

  renderApproaches () {
    const {approaches = []} = this.props
    return approaches.map((app, i) => {
      return <LabelValueItem key={i}><label>{app.approach}</label> <span> {toTitleCase(ladder[app.value])} (+{app.value})</span></LabelValueItem>
    })
  }

  renderStunts () {
    const {stunts = []} = this.props
    return stunts.map((stunt, i) => {
      return <LabelValueItem key={i}><label>{stunt.type}</label> <span>{stunt.value} ({stunt.approach})</span></LabelValueItem>
    })
  }

  renderAspects () {
    const { bioform, motivation, personal, shared } = this.props.aspects
    const rslt = []
    rslt.push(<LabelValueItem key='0'><label>Bioform</label> <span><em>{toTitleCase(bioform)}</em></span></LabelValueItem>)
    rslt.push(<LabelValueItem key='1'><label>Motivation</label> <span><em>{toTitleCase(motivation)}</em></span></LabelValueItem>)
    rslt.push(<LabelValueItem key='2'><label>Personal</label> <span><em>{toTitleCase(personal)}</em></span></LabelValueItem>)
    rslt.push(<LabelValueItem key='3'><label>Shared</label> <span><em>{toTitleCase(shared)}</em></span></LabelValueItem>)

    return rslt
  }

  render () {
    return (<div>

      <div className='summary'>
        {this.renderSummary()}
      </div>

      <div className='aspects text-left'>
        <Heading>Aspects</Heading>
        {this.renderAspects()}
      </div>

      <div className='approaches text-left'>
        <Heading>Approaches</Heading>
        {this.renderApproaches()}
      </div>

      <div className='stunts text-left'>
        <Heading>Stunts</Heading>
        {this.renderStunts()}
      </div>

    </div>)
  }
}
