import React from 'react';

class Main404 extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return <section className="main-404">
            <div className="container">
                <h1>404 <br/> Nic nie znaleziono :(</h1>
            </div>
        </section>
    }
}

export {Main404}