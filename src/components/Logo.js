import React from 'react';

class Logo extends React.Component {
    render() {
        return <div className="logo">
            <div><img style={{ width: "70%" }} src="../img/logoBeer.svg" alt="Beer" /></div>
        </div>;
    }
}

export default Logo;