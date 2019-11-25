// import * as React from 'react';


// interface AppContextInterface {
//     name: string,
//     author: string,
//     url: string
//   }


// // const {Provider, Consumer} = React.createContext<AppContextInterface | null>(null);

// const ctxt = React.createContext<AppContextInterface | null>(null);

// export const AppContextProvider = ctxt.Provider;
// export const AppContextConsumer = ctxt.Consumer;

import React from 'react';

// We define our type for the context properties right here
type ContextProps = { 
  authenticated: boolean,
  lang?: string,
  theme?: string
};

// we initialise them without default values, to make that happen, we
// apply the Partial helper type.
export const AppContext = 
  React.createContext<Partial<ContextProps>>({});