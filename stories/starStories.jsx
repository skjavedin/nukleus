import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import 'font-awesome-webpack'; // eslint-disable-line import/no-extraneous-dependencies

import Stars from '../components/Stars';

export default function StarStories () {
  return storiesOf('Star', module)
  .add('Types',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-4">
                <Stars
                  value={3}
                  name="test"
                  selectable
                  colors={['red', 'green']} />

                <Stars
                  value={3}
                  name="test2"
                  selectable
                  colors={['red', 'green']} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('Not interactive',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-4">
                <Stars name="test" value={2.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}

