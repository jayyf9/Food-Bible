import React, { Component } from 'react';


import Header from '../../components/header/header';


class Recipie extends Component {
    render() {
        return (
            <div>
                <Header />
                <h3>Title</h3>
                <p>Description</p>
                <span>Author</span>
            </div>
        )
    }
}

export default Recipie; 