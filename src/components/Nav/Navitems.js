import React, { Component } from 'react';

class Navitems extends Component {

    state = {
        items: [
            {
                name: 'Campaigns', link: '#'
            },
            {
                name: 'About', link: '#'
            },
            {
                name: 'Contact Us', link: '#'
            }
        ]
    }

    render() {
        return <div>
                { this.state.items.map((item, index) => <a key={index} href={item.link}>{item.name}</a>) }
            </div>
    }
}

export default Navitems;