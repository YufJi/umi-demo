import React from 'react';

export default (Componet) => {
  return class WrapComponent extends React.Component {
    render() {
      return (
        <Componet {...this.props} dpi={2} />  
      );
    }
  };
};