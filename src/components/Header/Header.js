import React, { PureComponent } from 'react';
import Nav from '../Nav/Nav';
import classes from './Header.css';

class Header extends PureComponent {
    state = {
        buttonlinks: [
            {
                name: 'register',
                link: '#'
            },
            {
                name: 'learn more',
                link: '#'
            }
        ]
    }

    render() {
        return (
            <header className={classes.header}>
                <Nav />
                <div className={classes.header_body}>
                    <h2>
                        We are Cheerful Nigerians
                    </h2>
                    <p>
                        A community of good people in Nigeria 
                    </p>
                    <p>
                        Become a part of our movement for change
                    </p>
                    <div className={classes.button_group}>
                        {
                            this.state.buttonlinks.map((item, index) => <a key={index} href={item.link}><button>{item.name}</button></a>)
                        }
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;