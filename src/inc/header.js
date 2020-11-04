// 로그인을 위한 js
// header.js 작성하고, App.css에 css 적용하고, index.js에 export 문장 추가 
import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import '../App.css';
// 모달창 적용위해 npm install react-awesome-modal, yarn add react-awesome-modal 설치 
import Modal from 'react-awesome-modal';

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // true면 모달 실행, false면 모달 종료 
            visible : false,
            // 아이디, 비번 가져올 변수 
            id : "",
            password : "",
        } 
    }

    // 모달창 실행, 종료를 위한 함수 선언 
    _openModal = function() {
        this.setState({
            visible : true
        });
    }

    _closeModal = function() {
        this.setState({
            visible : false
        });
    }

    _changeID = function() {
        const mid = document.getElementsByName('id')[0].value;
        console.log(mid);
        this.setState({
            id : mid
        });
    }

    _changePW = function() {
        const mpw = document.getElementsByName('password')[0].value;
        console.log(mpw);
        this.setState({
            password : mpw
        });
    }

    render() {
        return (
            // css 적용할 때는 className을 씀 
            <div className='header_grid'>
                <BrowserRouter>
                <div> </div>
                <div className='acenter'>
                    <Route path='/' />
                    <Link className='link_tit' to='/'><h3>리액트 블로그</h3></Link>
                </div>

                <div className='acenter'>
                    <h3 onClick={() => this._openModal()}>관리자 로그인</h3>
                        <Modal visible={this.state.visible} width="400" height="300" effect="fadeInDown" onClickAwar={() => this._closeModal()}>
                            <div>
                                <h4 className='acenter login_tit'>관리자 로그인</h4> 
                                <form>
                                    <div className='login_div'>
                                        <div className='login_input_div'>
                                            <p>관리자 아이디</p>
                                            <input type="text" name="id" onChange={() => this._changeID()} />
                                        </div>

                                        <div className="login_input_div" >
                                            <p>관리자 비밀번호</p>
                                            <input type="text" name="password" onChange={() => this._changePW()} />
                                        </div>

                                        <div className='submit_div'>
                                            <div> <input type="button" value="로그인" /> </div>
                                            <div> <input value="닫기" type="button" onClick={() => this._closeModal()} /> </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                </div>
                </BrowserRouter>
            </div>
        );
    }

}

export default header;