import React, { Component } from 'react';

class ShortPost extends Component {
    constructor(props) {
        super(props);

        //Build short post properties for display
        //this.props.fetchpost()

        this.state = {
            titlePost: 'Hard Coded',
            category:'Transport',
            poster: 'Frank',
            price: '$10,000',
        };
    }    

    



    render() {
        const { titlePost, category, poster, price } = this.state
        return (
            <div>
                <ul>
                    <li>{titlePost}</li>
                    <li>{poster}</li>
                    <li>{category}</li>
                    <li>{price}</li>
                </ul>
            </div>
        );
    }
}

export default ShortPost;