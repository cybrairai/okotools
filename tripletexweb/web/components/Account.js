import React from 'react'

import { amount as amountFormatter } from '../formatter'

export default class Account extends React.Component {
  static propTypes = {
    datasets: React.PropTypes.array.isRequired,
    department: React.PropTypes.object.isRequired,
    kontoSet: React.PropTypes.array.isRequired,
    level: React.PropTypes.number.isRequired,
    project: React.PropTypes.object.isRequired,
  }

  static contextTypes = {
    accounts: React.PropTypes.object.isRequired,
  }

  calculateAmount(dataset, fnSum, forceText=false) {
    const amount = this.props.kontoSet
      .filter(dataset.filter)
      .reduce((prev, entry) => prev + fnSum(entry), 0)

    if (amount !== 0 || forceText) {
      return amountFormatter(amount, 0)
    }
  }

  render() {
    const onlyIn = entry => -entry['BeløpInn']
    const onlyOut = entry => entry['BeløpUt']
    const inAndOut = entry => -entry['BeløpInn'] - entry['BeløpUt']
    const name = this.context.accounts[this.props.kontoSet[0].Kontonummer].name

    return (
      <tr className="project-account">
        <td>{Array(this.props.level).join('      ').replace(/ /g, '\u00a0')}{this.props.kontoSet[0].Kontonummer} {name}</td>
        {this.props.datasets.map(dataset => [
          <td key={`${dataset['key']}-in`}>{this.calculateAmount(dataset, onlyIn)}</td>,
          <td key={`${dataset['key']}-out`}>{this.calculateAmount(dataset, onlyOut)}</td>,
          <td key={`${dataset['key']}-inout`} className="project-result">
            <a href={dataset.ledgerLink(this.props.department.id, this.props.project.sysid, this.props.kontoSet[0].Kontonummer)} target="_blank">
              {this.calculateAmount(dataset, inAndOut, true)}
            </a>
          </td>
        ])}
      </tr>
    )
  }
}