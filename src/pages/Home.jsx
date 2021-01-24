import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ShortPost from '../components/ShortPost/ShortPost'

class HomePage extends React.Component {
    componentDidMount() {
        
    }


    render() {
        return (
            <div className="home_short_posts">
                <h1>Home Page</h1>
              <ShortPost/>
            </div>
        );
    }
}

function mapState(state) {
}

const actionCreators = {
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };