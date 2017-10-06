import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import MultipleChoice from '../components/MultipleChoice';

export default function MultipleChoiceStories () {
  return storiesOf('MultipleChoice', module)
  .add('Types',
    withInfo({})(() => (
      <div className="app-container container">
        <div className="panel">
          <div className="panel-body">
            <div className="row">
              <div className="col-lg-12">
                <MultipleChoice
                  name="choices[]"
                  heading="MultipleChoice"
                  inputStyle="buttons"
                  isRequired
                  requiredLabel="Required"
                  choices={
                  [{
                    id: 'option-1',
                    isChecked: true,
                    label: 'flex. Arbeitszeit',
                    value: 'option-1'
                  },
                  {
                    id: 'option-2',
                    isChecked: false,
                    label: 'Homeoffice',
                    value: 'option-2'
                  },
                  {
                    id: 'option-3',
                    isChecked: false,
                    label: 'Kantine',
                    value: 'option-2'
                  },
                  {
                    id: 'option-4',
                    isChecked: false,
                    label: 'Essenszulagen',
                    value: 'option-2'
                  },
                  {
                    id: 'option-5',
                    isChecked: false,
                    label: 'Kinderbetreuung',
                    value: 'option-2'
                  },
                  {
                    id: 'option-6',
                    isChecked: false,
                    label: 'Betr. Altersvorsorge',
                    value: 'option-2'
                  },
                  {
                    id: 'option-7',
                    isChecked: false,
                    label: 'Barrierefreiheit',
                    value: 'option-2'
                  },
                  {
                    id: 'option-8',
                    isChecked: false,
                    label: 'Gesundheitsmaßnahmen',
                    value: 'option-2'
                  },
                  {
                    id: 'option-9',
                    isChecked: false,
                    label: 'Betriebsartzt',
                    value: 'option-4'
                  },
                  {
                    id: 'option-10',
                    isChecked: false,
                    label: 'Coaching',
                    value: 'option-4'
                  },
                  {
                    id: 'option-11',
                    isChecked: false,
                    label: 'Parkplatz',
                    value: 'option-4'
                  },
                  {
                    id: 'option-12',
                    isChecked: false,
                    label: 'gute Verkehrsanbindung',
                    value: 'option-4'
                  },
                  {
                    id: 'option-13',
                    isChecked: false,
                    label: 'Mitarbeiterrabatte',
                    value: 'option-4'
                  },
                  {
                    id: 'option-14',
                    isChecked: false,
                    label: 'Firmenwagen',
                    value: 'option-4'
                  },
                  {
                    id: 'option-15',
                    isChecked: false,
                    label: 'Mitarbeiterhandy',
                    value: 'option-4'
                  },
                  {
                    id: 'option-16',
                    isChecked: false,
                    label: 'Mitarbeiterbeteiligung',
                    value: 'option-4'
                  },
                  {
                    id: 'option-17',
                    isChecked: false,
                    label: 'Mitarbeiterevents',
                    value: 'option-4'
                  },
                  {
                    id: 'option-18',
                    isChecked: false,
                    label: 'Internetnutzung',
                    value: 'option-4'
                  },
                  {
                    id: 'option-19',
                    isChecked: false,
                    label: 'Hunde geduldet',
                    value: 'option-4'
                  }
                  ]} />

              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}
