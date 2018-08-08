import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';

export default class ImgView extends Component {

    render() {
        const { photos } = this.props;
        console.log('...............', Carousel.slickPrev);
        return (
            <div>
                <Carousel autoplay arrows={true}>
                    {
                        photos.map((src, idx) => {
                            return <div key={idx}><img className="img" src={src} alt="" /></div>
                        })
                    }
                </Carousel>
            </div>
        );
    }
}

