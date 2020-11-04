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
            visible : false
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
                                모달창 
                                <input value="닫기" type="button" onClick={() => this._closeModal()} />
                            </div>
                        </Modal>
                </div>
                </BrowserRouter>
            </div>
        );
    }

}

export default header;