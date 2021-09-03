import React, { Component } from 'react'

// 클래스형 컴포넌트, state 사용
class CounterComponentWithState extends Component {
    constructor(props) {
        super(props);

        // state의 초기값 설정
        this.state = {
            number: 0,
            fixedNumber: 0,
        };
    }

    render() {
        const { number, fixedNumber } = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button onClick={() => {
                    this.setState({
                            number: number + 1
                        }, () => {
                        console.log('방금 setState가 호출되었습니다.')
                    });
                }}>
                    +1
                </button>
                <button onClick={() => {
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        };
                    });
                    // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
                    // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }}>
                    +2
                </button>
            </div>
        )
    }
}

export default CounterComponentWithState;