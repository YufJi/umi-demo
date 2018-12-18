import React, { Fragment } from 'react';

function BasicLayout(props) {
  return (
    <Fragment>
      {props.children}
    </Fragment>
  );
}

export default BasicLayout;
