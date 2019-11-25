import React, { Component } from 'react';
import { Experiment, Variant, emitter } from 'react-ab-test'

import { AppContext } from '../contextApi/AppContext';

import { HomeSplit_A,HomeSplit_B } from './index';

interface props {


}

class Home extends Component<props, any> {

    render(): any {
        return (
        <AppContext.Provider value={{
                authenticated: false,
            }}>
              <Experiment name="My experiment" 
              onChoice={(experimentName, variantName) => console.log(experimentName, variantName)}>
            <Variant name="A">
              <div>Section A</div>
            </Variant>
            <Variant name="B">
              <div>Section B</div>
            </Variant>
          </Experiment>
        </AppContext.Provider>
        );
    }
}

export default Home;