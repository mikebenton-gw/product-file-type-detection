import React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

function FileAttributes({ fileName, fileExtension, fileType, fileSize }) {

  const truncatLength = 40;
  var truncated;
  if (fileName.length > truncatLength)
  {
    truncated = fileName.substring(0, truncatLength);
  }
  else
  {
    truncated = fileName;
  }

  return (
          <tr className={fileExtension !== fileType ? "type-danger" : ""}>
            <Tippy content={fileName}>
            <td>{fileName === truncated ? fileName : `${truncated}...${fileExtension}`}</td>
            </Tippy>
            <td>{fileExtension}</td>
            <td>{fileType}</td>
            <td>{fileSize}</td>
          </tr>
  );
}

export default FileAttributes;