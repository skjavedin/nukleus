import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import 'font-awesome-webpack'; // eslint-disable-line import/no-extraneous-dependencies
import {Link} from 'react-router'; // eslint-disable-line import/no-extraneous-dependencies

import Paginator from '../components/Paginator';

export default function PaginatorStories () {
  return storiesOf('Pagination', module)
  .add('Types',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-8">
                <Paginator
                  totalPages={10}
                  pathname="/"
                  query={'page:4'}
                  baseLink={<Link to={{pathname: '/playground/'}}>1</Link>} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}
