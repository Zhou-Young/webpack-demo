import React from 'react';
import img from './image.png';
// import Loadable from 'react-loadable';

// const LoadableComponent = Loadable({

// });

class Pre extends React.Component {
  render() {
    console.log('pre?');
    return (
      <div>
       hi
        <img src={img} alt="img" />
      </div>
    );
  }
}


export default Pre;
