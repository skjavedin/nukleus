import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Link} from 'react-router'; // eslint-disable-line import/no-extraneous-dependencies

import 'font-awesome-webpack'; // eslint-disable-line import/no-extraneous-dependencies

import styles from '../components/Tabs/index.scss';
import Tabs from '../components/Tabs';

export default function PaginatorStories () {
  return storiesOf('Tabs', module)
  .add('Default',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-8">
                <Tabs
                  items={[
                    <Link to={{pathname: '/'}}>First Tab</Link>,
                    <Link to={{pathname: '/'}}>Second Tab</Link>,
                    <Link to={{pathname: '/'}}>Third Tab</Link>
                  ]}
                  pathname="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('Block',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-8">
                <Tabs
                  theme="block"
                  items={[
                    <Link to={{pathname: '/'}}>First Tab</Link>,
                    <Link to={{pathname: '/'}}><span className={styles.itemNumber}>10</span> Second Tab</Link>,
                    <Link to={{pathname: '/'}}>Third Tab</Link>
                  ]}
                  pathname="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}
