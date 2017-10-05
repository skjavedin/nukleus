import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from '../components/Button';

storiesOf('Buttons', module)
  .add('Calendar', () => (
    <Button type="default" text={<i className="fa fa-calendar" />} />
  ))
  .add('Default', () => (
    <div>
      <Button type="primary" text="Primary Button" />
      <Button type="secondary" text="Secondary Button" />
      <Button type="info" text="Info Button" />
      <Button type="danger" text="Danger Button" />
      <Button type="link" text="Link Button" />
    </div>
  ))
  .add('Disabled', () => (
    <div>
      <Button type="primary" text="Primary Button disabled" disabled />
      <Button type="secondary" text="Secondary Button disabled" disabled />
      <Button type="info" text="Info Button disabled" disabled />
      <Button type="danger" text="Danger Button disabled" disabled />
      <Button type="link" text="Link Button disabled" disabled />
    </div>
  ));
