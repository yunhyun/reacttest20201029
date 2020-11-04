import React, {Component} from 'react';
// 중복호출 방지를 위해 npm install query-string, yarn add query-string 으로 설치 
import queryString from 'query-string';

class test extends Component {
    // 링크로 넘어온 데이터 출력하기, 데이터를 props로 조회  
    /* props는 property의 약자로 부모에게 받아온 데이터. react는 부모에서 자식으로만 데이터 전달 
       따라서 수정이 불가능하고 읽기만 가능. 
    */ 
    constructor(props) {
        super(props)
        console.log("test.js 생성자");
        console.log(props);
        // App.js 에서 링크로 넘어온 param1 값 출력
        console.log(props.match.params.param1);
    }
    
    render() {

        // 중복으로 호출되는 것을 방지
        const qry = queryString.parse(this.props.location.search);

        return (
            <div>
                <h2>test page</h2>
                <h2>test.js</h2>
                <h3>전송된 데이터는 {this.props.match.params.param1}</h3>
                {/* 여기서 데이터가 출력되려면 localhost:3000/test/?param1=aaa 형식으로 주소 호출해야 함  
                    localhost:3000/test?param1=aaa 형식도 가능하며, 2개 이상의 데이터를 전송하려면 
                    localhost:3000/test?param1=aaa&param2=bbb */}
                <h3>queryString 사용 후 전송된 데이터 {qry.param1}</h3>
                <h3>추가 데이터 {qry.param2}</h3>
            </div>
        );
    }
}

export default test;