import React from 'react';
import {browserHistory, Route, Router} from 'react-router'; // eslint-disable-line import/no-extraneous-dependencies

import AllComponents from './components/allcomponents';
// import Autocomplete from 'components/Autocomplete/index';
// import Button from 'components/Button/index';
// import Choice from 'components/Choice/index';
// import Combobox from 'components/Combobox/index';
// import DatePicker from 'components/DatePicker/index';
// import DropDown from 'components/DropDown/index';
// import InfoText from 'components/InfoText/index';
import MultipleChoice from 'components/MultipleChoice/index';
// import Notification from 'components/Notification/index';
// import Paginator from 'components/Paginator/index';
// import Table from 'components/Table/index';
import Tabs from 'components/Tabs/index';
// import TextField from 'components/TextField/index';
// import ToolTip from 'components/ToolTip/index';
// import Select from 'components/Select/index';
import Stars from 'components/Stars/index';

import styles from './components/allcomponents.scss';

import Logo from './Logo';
import {multipleChoiceManyItems, multipleChoiceTwoItems} from './data/MultipleChoice';
// import {
//   controlLabel
// } from 'components/index.scss';

export default ({
  logo: Logo(),
  views: [
    {
      center: true,
      component: (
        <div>
          <h1>About Nukleus</h1>
        </div>
      ),
      slug: 'about',
      title: 'About Nukleus'
    },
    {
      center: true,
      component: (
        <MultipleChoice
          choices={[]}
          name="choices[]"
          isRequired
          requiredLabel="Required" />
      ),
      props: [
        {
          description: `${multipleChoiceTwoItems.length} options`,
          forceProps: true,
          props: {
            choices: multipleChoiceTwoItems,
            heading: 'Multiple Choice - Buttons',
            inputStyle: 'buttons'
          },
          slug: 'multipleChoiceManyItems-buttons-two-items',
          title: 'with two items'
        },
        {
          description: `${multipleChoiceManyItems.length} options`,
          forceProps: true,
          props: {
            choices: multipleChoiceManyItems,
            heading: 'Multiple Choice - Buttons',
            inputStyle: 'buttons'
          },
          slug: 'multipleChoiceManyItems-buttons-many-items',
          title: 'with many items'
        },
        {
          description: `${multipleChoiceTwoItems.length} options`,
          forceProps: true,
          props: {
            choices: multipleChoiceTwoItems,
            heading: 'Multiple Choice - In Line',
            inputStyle: 'inline'
          },
          slug: 'multipleChoiceManyItems-inline-two-items',
          title: 'with two items'
        },
        {
          description: `${multipleChoiceManyItems.length} options`,
          forceProps: true,
          props: {
            choices: multipleChoiceManyItems,
            heading: 'Multiple Choice - In Line',
            inputStyle: 'inline'
          },
          slug: 'multipleChoiceManyItems-inline-many-items',
          title: 'with many items'
        }
      ],
      slug: 'multipleChoice',
      title: 'Multiple choice',
      wrapperStyle: {
        minWidth: '50%'
      }
    },
    {
      center: true,
      component: (
        <Stars name="star-name" />
      ),
      hide: false,
      props: [
        {
          forceProps: true,
          props: {
            name: 'test-0',
            selectable: true,
            value: 0
          },
          slug: 'simple-star-0',
          title: 'Value 0'
        },
        {
          forceProps: true,
          props: {
            name: 'test-1',
            selectable: true,
            value: 3
          },
          slug: 'simple-star',
          title: 'Value 3'
        },
        {
          forceProps: true,
          props: {
            colors: ['red', 'green', 'blue', 'tomato', 'orange'],
            name: 'test-2',
            selectable: true,
            value: 3
          },
          slug: 'color-star',
          title: 'Value 3 with colours'
        },
        {
          forceProps: true,
          props: {
            name: 'test-3',
            selectable: true,
            value: 5
          },
          slug: 'color-star-5',
          title: 'Value 5'
        },
        {
          description: 'buggy :( selectable false has an issue with the size',
          forceProps: true,
          props: {
            name: 'test-4',
            selectable: false,
            value: 5
          },
          slug: 'color-unselectable',
          title: 'Value 5 unselectable'
        }
      ],
      slug: 'stars',
      title: 'Rating starts',
      wrapperStyle: {
        maxWidth: '50%'
      }
    },
    {
      center: true,
      component: <Tabs items={[]} pathname="" />,
      props: [
        {
          forceProps: true,
          props: {
            items: [
              <span>First tab</span>,
              <span>Second tab</span>,
              <span>Third tab</span>
            ],
            pathname: 'playground/tabs/tabs-plain'
          },
          slug: 'tabs-plain',
          title: 'Tabs with plain text'
        },
        {
          forceProps: true,
          props: {
            items: [
              <a href="/playground/tabs/tabs-plain">First tab</a>,
              <a href="/playground/tabs/tabs-plain">Second tab</a>,
              <a href="/playground/tabs/tabs-plain">Third tab</a>
            ],
            pathname: 'playground/tabs/tabs-links'
          },
          slug: 'tabs-links',
          title: 'Tabs with links'
        },
        {
          forceProps: true,
          props: {
            items: [
              <a href="/playground/tabs/tabs-plain"><span className={styles.itemNumber}>1</span> First tab</a>,
              <a href="/playground/tabs/tabs-plain"><span className={styles.itemNumber}>2</span> Second tab</a>,
              <a href="/playground/tabs/tabs-plain"><span className={styles.itemNumber}>3</span> Third tab</a>
            ],
            pathname: 'playground/tabs/tabs-links-style'
          },
          slug: 'tabs-links-style',
          title: 'Tabs with styled links'
        }
      ],
      slug: 'tabs',
      title: 'Tabs'
    },
    {
      center: false,
      component: (() => {
        const routes = (
          <Route path="/playground/all-components" component={AllComponents}>
            <Route path="2" component={AllComponents} />
            <Route path="3" component={AllComponents} />
          </Route>
        );
        return (
          <Router
            routes={routes}
            history={browserHistory} />
        );
      })(),
      description: 'All nukleus together',
      slug: 'all-components',
      title: 'All together',
      wrapperStyle: {
        height: '100%',
        overflowY: 'auto',
        width: '100%'
      }
    },
    {
      // prototype
      center: true,
      component: (
        <div />
      ),
      hide: true,
      props: [
        {
          forceProps: true,
          props: {
            name: 'test-0',
            selectable: true,
            value: 0
          },
          slug: 'simple-star-0',
          title: 'Value 0'
        }
      ],
      slug: 'prototype!!!',
      title: 'Rating starts',
      wrapperStyle: {
        maxWidth: '50%'
      }
    }
  ]
});
