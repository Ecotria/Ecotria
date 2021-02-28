import React, { Component } from 'react';
import ShortPost from './ShortPost'
import './ShortPostFeed.css'


class ShortPostFeed extends Component {
      

    render() {
        return (
            <React.Fragment>
                <div className="shortpostfeed">
                    <ShortPost/>
                </div>
            </React.Fragment>
            
        );
    }
}



export default ShortPostFeed;
