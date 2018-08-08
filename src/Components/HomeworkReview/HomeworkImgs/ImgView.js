import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel } from 'antd';

export default class ImgView extends Component {

    onChange = (a, b, c) => {
        console.log('...............', a, b, c);
    }
    
    render() {
        const { photos } = this.props;
        return (
            <div>
                {/* <div>123</div> */}
                <Carousel autoplay>
                    {
                        photos.map((src, idx) => {
                            return <div key={idx}><img className="img" src={src} alt="" /></div>
                        })
                    }
                </Carousel>
                {/* <div>456</div> */}
            </div>
        );
    }
}