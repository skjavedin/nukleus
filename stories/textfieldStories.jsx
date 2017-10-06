import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import 'font-awesome-webpack'; // eslint-disable-line import/no-extraneous-dependencies

import {controlLabel} from '../components/index.scss';
import TextField from '../components/TextField';
import InfoText from '../components/InfoText';
import ToolTip from '../components/ToolTip';


export default function TextfieldStories () {
  return storiesOf('Textfield', module)
  .add('Default',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-8">
                <TextField
                  id="text-field"
                  label="TextField"
                  name="text-field"
                  isRequired
                  highlightList={{bad: 'bad', fuck: 'fuck', shit: 'shit', test: 'test'}}
                  requiredLabel="Required" />
                <InfoText
                  text="I am the info text for the TextField component." />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('With char count',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-8">
                <TextField
                  id="text-field-limited"
                  label="TextField with Char Limit"
                  name="text-field-limited"
                  displayLength
                  maxLength={120}
                  isRequired
                  requiredLabel="Required" />
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
              <div className="col-md-8">
                <TextField
                  id="text-field-error"
                  label="TextField with error"
                  name="text-field-error"
                  error="This is an error message"
                  errorSubInfo="Some useful hints"
                  isRequired
                  requiredLabel="Required" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('With password',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-8">
                <TextField
                  id="text-field-password"
                  label="TextField (password)"
                  name="text-field-password"
                  type="password" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('Multiline',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-8">
                <TextField
                  id="text-area"
                  label="TextField (multiLine)"
                  name="text-area"
                  multiLine
                  highlightList={{ass: 'ass', fuck: 'fuck', shit: 'shit', test: 'test'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('Large',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-8">
                <TextField
                  id="text-area-large"
                  label="TextArea Large"
                  name="text-area-large"
                  maxLength={120}
                  displayLength
                  inputStyle="inline mediumSize"
                  minHeight={80}
                  highlightList={{fuck: 'fuck'}}
                  multiLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('With info',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-8">
                <TextField
                  id="text-field"
                  label={
                    (<span>
                      <label className={controlLabel} htmlFor="text-field">TextField</label>
                      <ToolTip position="bottomLeft" label="TextField Info" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                    </span>
                    )
                  }
                  name="text-field"
                  isRequired
                  requiredLabel="Required" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}
