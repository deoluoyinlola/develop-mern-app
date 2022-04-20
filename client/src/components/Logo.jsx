import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://deoluoyinlola.netlify.app">
                <img src={logo} width="50" height="50" alt="deoluoyinlola.netlify.app" />
            </Wrapper>
        )
    }
}

export default Logo