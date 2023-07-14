import React from 'react';
import ReactDOM from 'react-dom';

import { Margin, Select } from '@ds.e/react';
import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/Text.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/global.css';
import '@ds.e/scss/lib/Select';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

ReactDOM.render(
  <Margin space="xxxl">
    <Select options={options} />
  </Margin>,
  document.getElementById('root'),
);
