import * as React from 'react';
import GatewayRegistry from './GatewayRegistry';

export const GatewayContext = React.createContext(null);
const gatewayRegistry = new GatewayRegistry();

export default ({children}) => <GatewayContext.Provider value={{gatewayRegistry}}>{children}</GatewayContext.Provider>;
