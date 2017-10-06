import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Link} from 'react-router'; // eslint-disable-line import/no-extraneous-dependencies
import 'font-awesome-webpack'; // eslint-disable-line import/no-extraneous-dependencies

import Button from '../components/Button';
import styles from '../playground/app.scss';

export default function ButtonStories () {
  return storiesOf('Button', module)
  .add('Types',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="default" text={<i className="fa fa-calendar" />} />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="primary" text="Primary Button" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="secondary" text="Secondary Button" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="info" text="Info Button" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="danger" text="Danger Button" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="link" text="Link Button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('Disabled',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="default" text="Default Button" disabled />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="primary" text="Primary Button" disabled />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="secondary" text="Secondary Button" disabled />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="info" text="Info Button" disabled />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="danger" text="Danger Button" disabled />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="link" text="Link Button" disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('Outlined',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="default" text="Default Button" outline />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="primary" text="Primary Button" outline />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="secondary" text="Secondary Button" outline />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="info" text="Info Button" outline />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="danger" text="Danger Button" outline />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="link" text="Link Button" outline />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('Outlined disabled',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="default" text="Default Button" outline disabled />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="primary" text="Primary Button" outline disabled />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="secondary" text="Secondary Button" outline disabled />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="info" text="Info Button" outline disabled />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="danger" text="Danger Button" outline disabled />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="link" text="Link Button" outline disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('Custom Theme',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="custom" text="Custom Button" onClick={() => {}} customTheme={styles.customThemeButton} />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="custom" text="Custom Button" onClick={() => {}} customTheme={styles.customThemeButton} disabled />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="custom" text="Custom Button" onClick={() => {}} customTheme={styles.customThemeButton} outline />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button type="custom" text="Custom Button" onClick={() => {}} customTheme={styles.customThemeButton} outline disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('Links',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button
                  type="default"
                  link={<Link to="/playground">Button Link</Link>} />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button
                  type="primary"
                  disabled
                  link={<Link to="/playground">Primary Link</Link>} />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button
                  type="secondary"
                  link={<Link to="/playground">Secondary Link</Link>}
                  outline />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button
                  type="info"
                  link={<Link to="/playground/huhuh">Info Link</Link>}
                  disabled
                  outline />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button
                  type="custom"
                  link={<Link to="/playground">Danger Link</Link>}
                  customTheme={styles.customThemeButton} />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 margin-bottom-third">
                <Button
                  type="link"
                  link={<Link to="/playground">Link Link</Link>} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  )
  .add('Full Width Buttons',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-lg-12 margin-bottom-third">
                <Button type="primary" text="Full width Button" fullWidth />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-12 margin-bottom-third">
                <Button type="primary" text="Mobile Full width Button" mobileFullWidth />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}
