import * as React from 'react';
import {GatewayContext} from './GatewayProvider';

class GatewayDest extends React.Component {
  state = {children: null}

  componentDidMount() {
    this.props.gatewayRegistry.addContainer(this.props.name, this);
  }

  componentWillUnmount() {
    this.props.gatewayRegistry.removeContainer(this.props.name, this);
  }

  render() {
    const { component, tagName, gatewayRegistry, ...attrs } = this.props;
    delete attrs.name;
    return React.createElement(component || tagName || 'div', attrs, this.state.children);
  }
}

export default (props) => (
    <GatewayContext.Consumer>
      {({ gatewayRegistry }) => (
        <GatewayDest gatewayRegistry={gatewayRegistry} {...props} />
      )}
    </GatewayContext.Consumer>
  );
