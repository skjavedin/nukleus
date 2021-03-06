import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Paginator} from 'nukleus';
import DocsRoot from 'components/DocsRoot';

import {default as propsDefinition} from './props-definition.txt';
import {default as propsDefault} from './props-default.txt';
import styles from './index.scss';

const PaginatorDocs = ({location: {pathname, search: query}}) => {
  const example = `<Paginator${'\n  '}totalPages={10}${'\n  '}pathname="${pathname}"${'\n  '}query={${JSON.stringify(query) || {}}}${'\n  '}baseLink={<Link to={{pathname: "${pathname}"}}>1</Link>} />`;

  return (
    <DocsRoot
      title="Paginator"
      component={
        <div className={styles.paginator} >
          <Paginator
            totalPages={10}
            pathname={pathname}
            query={query}
            baseLink={<Link to={{pathname}}>1</Link>} />
        </div>
      }
      example={example}
      propsDefinition={propsDefinition}
      propsDefault={propsDefault} />
  );
};

PaginatorDocs.propTypes = {
  location: PropTypes.object.isRequired
};

export default PaginatorDocs;
