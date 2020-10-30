//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
// react router에서 제공하는 BrowserRouter, Route 태그 추가 
import { BrowserRouter, Route, Link } from 'react-router-dom';

// import Home from './inc/home.js';
// import Test from './inc/test.js';
// index.js 파일 만들어서 파일 두개를 동시에 불러오기 
import {Home, Test} from './inc';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div className='App'>
        <BrowserRouter>
          <Route path="/" component={Home} exact/>
          {/* exact가 없으면 /test 경로로 갔을 때 / 경로도 함께 인식해서 두 파일의 내용이 같이 출력됨  */}
          <Route path="/test" component={Test} />

          {/* Link 태그 추가 */}
          <ul>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/test'> Test </Link> </li>
          </ul>

        </BrowserRouter>
      </div>
    )

  }
}
export default App;


