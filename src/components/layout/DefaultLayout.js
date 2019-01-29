import React from 'react';

const DefaultLayout = props => (
  <div>
    {React.cloneElement(React.Children.only(props.children))}
  </div>
);

export default DefaultLayout;
