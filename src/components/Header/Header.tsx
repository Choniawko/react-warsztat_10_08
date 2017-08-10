import * as React from 'react';
import { arr, appLogo, AppHeader } from './HeaderStyle';
const logo = require('../../logo.svg');

class Header extends React.Component<{}, {}> {
    render() {
        return (
            <div className={AppHeader}>
                {arr.map((el, i) => <img key={i} src={logo} className={appLogo(el)} alt="logo" />)}
                <h2>Welcome to React</h2>
            </div>
        );
    }
}

export default Header;