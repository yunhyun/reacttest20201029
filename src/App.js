//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
// react router에서 제공하는 BrowserRouter, Route 태그 추가 
// 중복호출 방지를 위해 Switch 태그 추가
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

// import Home from './inc/home.js';
// import Test from './inc/test.js';
// index.js 파일 만들어서 파일 두개를 동시에 불러오기 
//import {Home, Test} from './inc';

// header.js 사용을 위해 import 
import { Head } from './inc';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // header.js 만 사용하기 위해 render() 다시 작성 
      render() {
        return(
          <div>
            <Head />
          </div>
        )
      }

  // render() {
  //   return(
  //     <div className='App'>
  //       <BrowserRouter>
  //         <Route path="/" component={Home} exact/>
  //         {/* exact가 없으면 /test 경로로 갔을 때 / 경로도 함께 인식해서 두 파일의 내용이 같이 출력됨  */}
  //         {/* <Route path="/test" component={Test} /> */}
  //         {/* Router를 이용해서 페이지로 데이터 전달하기 아래 방식으로 전달하면 /test 요청과 중복으로 두번 호출됨 */}
  //         {/* <Route path="/test/:param1" component={Test} /> */}

  //         {/* 중복방지를 위해 Switch 태그 사용. 데이터가 있는 path를 먼저 써야 함*/}
  //         <Switch>
  //           <Route path="/test/:param1" component={Test} />
  //           <Route path="/test" component={Test} />
  //         </Switch>

  //         {/* Link 태그 추가 */}
  //         {/* Link 태그를 사용하면 페이지를 리로드하지 않고 새로운 페이지를 불러올 수 있음 */}
  //         <ul>
  //           <li> <Link to='/'> Home </Link> </li>
  //           <li> <Link to='/test'> Test </Link> </li>
  //         </ul>

  //       </BrowserRouter>
  //     </div>
  //   )

  // }
}
export default App;


