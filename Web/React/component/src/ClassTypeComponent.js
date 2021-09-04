import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 클래스형 컴포넌트
class ClassTypeComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    };

    render() {
        const { name, children, favoriteNumber } = this.props;

        return (
            <div>
                안녕하세요 제 이름은 {name}입니다.<br />
                children 값은 {children}입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        )
    }
}

export default ClassTypeComponent;
