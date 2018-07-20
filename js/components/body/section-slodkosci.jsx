import React from 'react';
import {SlodkosciDetailedPost} from './section-slodkosci-post.jsx'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class SlodkosciSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            indexClicked: '0',
            galleryOnOff: true
        }
    }


    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleClick = (e, index) => {
        console.log('Kliknięto:', index);
        this.setState({
            indexClicked: index,
            galleryOnOff: false
        });
        console.log(this.state.indexClicked);
        return <div/>
    };



    render() {

        console.log(this.props.postsOnOff);
        const sorted = [];
        this.props.data.length > 0 &&
        this.props.data.forEach((item) => {
            return item.content.category === 'slodkosci' ? sorted.push(item) : null
        });
        const posts = sorted.length > 0 &&
            sorted.map( (elem, i) => {
                return <div data-aos="zoom-in"
                            data-aos-duration={600 + i*300}
                            data-aos-easing="ease-in-sine"
                            className="slodkosci-post" key={i}>
                    <Link to={`${this.props.routerProps.url}/${elem.content.title_post}`}>
                        <img className="slodkosci-post-img"
                             src={elem.content.image}
                             onClick={(e) => {this.handleClick(e, i)}}
                        />
                        <div className="slodkosci-post-title">{elem.content.title_image}</div>
                    </Link>
                </div>
            });

        return <section className="slodkosci">
                <h1>Nasze słodkości</h1>

                {/*<SlodkosciPosts data={this.props.data}/>*/}
                {/*<div style={{display: this.state.postsOnOff}} className="slodkosci-posts">*/}
                    {/*{posts}*/}
                {/*</div>*/}
                {this.state.galleryOnOff ? <div className="slodkosci-posts">
                    {posts}
                </div> : <SlodkosciDetailedPost data={this.props.data}
                                                index={this.state.indexClicked}
                                                action={()=>this.setState({galleryOnOff: true})}
                />}
        </section>
    }
}

export {SlodkosciSection}
