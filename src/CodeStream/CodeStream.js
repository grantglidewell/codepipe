import React from 'react';
import MonacoEditor from 'react-monaco-editor';

import codeSrc from './codeSrc';
export default ({ progress }) => {
  return (
    <aside>
      <MonacoEditor
        width="600"
        height="360"
        language="javascript"
        theme="vs-dark"
        options={{ readOnly: true }}
        value={codeSrc[progress]}
      />
    </aside>
  );
};
