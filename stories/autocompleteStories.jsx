import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import 'font-awesome-webpack'; // eslint-disable-line import/no-extraneous-dependencies
import {Link} from 'react-router'; // eslint-disable-line import/no-extraneous-dependencies

import Autocomplete from '../components/Autocomplete';

export default function AutocompleteStories () {
  return storiesOf('Autocomplete', module)
  .add('Default',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-4">
                <form>
                  <Autocomplete
                    autoFocus
                    data={{
                      items: [
                        {item: 'meow', itemInfo: 'hard'},
                        {item: 'meowing', itemInfo: 'harder'}
                      ]
                    }}
                    scrollTo
                    id="test"
                    value="purrr"
                    placeholder="Type something..."
                    suggestionsFooter={<Link href="hi">No suggestions found?</Link>}
                    label="Autocomplete"
                    isRequired
                    requiredLabel="Required"
                    name="autocomplete" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('With error',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-4">
                <Autocomplete
                  onKeyDown={e => { console.log('test', e); }}
                  data={{
                    items: [
                      {item: 'meow', itemInfo: 'hard'},
                      {item: 'meowing', itemInfo: 'harder'}
                    ]
                  }}
                  scrollTo
                  id="test-error"
                  value="purrr"
                  error="An Error"
                  errorSubInfo="with useful hints"
                  onSelectSuggestion={suggestion => { console.log('You have chosen ', suggestion); }} // eslint-disable-line no-console
                  placeholder="Type something..."
                  suggestionsFooter={<Link href="hi">No suggestions found?</Link>}
                  label="Autocomplete with Error"
                  isRequired
                  requiredLabel="Required"
                  name="autocomplete" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}

