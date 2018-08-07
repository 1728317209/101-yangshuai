import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';

export default class ImgView extends Component {

    render() {
        const { photos } = this.props;
        return (
            <div>
                <Carousel autoplay>
                    {
                        photos.map(src => {
                            return <div><img className="img" src={src} alt="" /></div>
                        })
                    }
                </Carousel>
            </div>
        );
    }
}