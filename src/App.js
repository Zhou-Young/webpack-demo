import React from 'react';
// import Loadable from 'react-loadable';
import style from './app.scss';
// import Pre from './Pre';/* webpackPrefetch: true */
const Pre = React.lazy(() => import('./Pre'));
// import('./Pre');

// const Loading = ({ isLoading, error }) => {
//   // Handle the loading state
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   // Handle the error state
//   if (error) {
//     return <div>Sorry, there was a problem loading the page.</div>;
//   }

//   return null;
// };

// const Pre = Loadable({
//   loader: () => import('./Pre'),
//   loading: Loading,
// });


class App extends React.Component {
  state = {
    fold: true,
    text: 'text',
  }

  aclick = () => {
    // 有参数要用箭头函数，，没参数就直接this.
    this.setState(prevState => ({
      fold: !prevState.fold,
    }));
  }

  render() {
    const { fold, text } = this.state;

    return (
      <div className={style.App}>
        <p onClick={this.aclick}>Hello World!~~~</p>
        {
          fold ? <p>{text}</p> : <Pre />
        }
      </div>
    );
  }
}


export default App;
