/**
 *
 * Checkbox
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Checkbox() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Checkbox.propTypes = {};

export default Checkbox;
