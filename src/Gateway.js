import * as React from 'react'
import {GatewayContext} from './GatewayProvider'

class Gateway extends React.Component {
  componentWillUnmount() {
    this.props.gatewayRegistry.unregister(this.props.into, this.id)
  }

  renderIntoGatewayNode(props) {
    this.props.gatewayRegistry.addChild(this.props.into, this.id, props.children)
  }

  render() {
    if (!this.id) {
      this.id = this.props.gatewayRegistry.register(this.props.into, this.props.children)
    }
    this.props.gatewayRegistry.clearChild(this.props.into, this.id)
    this.renderIntoGatewayNode(this.props)
    return null
  }
}

export default props => (
  <GatewayContext.Consumer>
    {({gatewayRegistry}) => <Gateway gatewayRegistry={gatewayRegistry} {...props} />}
  </GatewayContext.Consumer>
)
