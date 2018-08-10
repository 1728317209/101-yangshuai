import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

import ImgView from '../HomeworkImgs/ImgView';
import HomeworkInfo from '../HomeworkDescription/homeworkInfo';
import ReviewArea from '../ReviewArea/review';
import ReviewList from '../ReviewList/reviewList';

import './index.css';

const TabPane = Tabs.TabPane;
export default class TabBar extends Component {

    renderHomework = (homeworkInfo, TabKey) => {
        const { Actions } =this.props;
        return homeworkInfo.map(item => {
            return (
                <div className="left-right-Part" key={item.id}>
                    <div className="left-Part">
                        <ImgView 
                            photos={item.photos}
                        />
                        <HomeworkInfo 
                            thisHomeworkInfo={item}
                            Actions={Actions}
                        />
                        <ReviewArea 
                            Actions={Actions} 
                            homeworkId={item.id}
                            TabKey={TabKey}
                            comments={item.comments}
                        />
                    </div>
                    <div className="right-Part">
                        <ReviewList 
                            comments={item.comments}
                            HandleChangeCommentStatus={Actions.handleChangeCommentStatus}
                            Actions={Actions}
                        />
                    </div>
                </div>
            )
        })
    }

    render() {
        
        const { 
            MyWillReviewHomeworkInfo, 
            MyReviewedHomeworkInfo,
            AllWillReviewHomeworkInfo,
            ALLReviewedHomeworkInfo
        } = this.props;

        return (
            <Tabs className="Tabs" defaultActiveKey="1" key='1'>
                <TabPane tab="我的未点评" key="1">
                    {
                        this.renderHomework(MyWillReviewHomeworkInfo, 1)
                    }
                </TabPane>
                <TabPane tab="我的点评历史" key="2">
                    {
                        this.renderHomework(MyReviewedHomeworkInfo, 2)
                    }
                </TabPane>
                <TabPane tab="全部未点评" key="4">
                    {
                        this.renderHomework(AllWillReviewHomeworkInfo, 3)
                    }
                </TabPane>
                <TabPane tab="全部已点评" key="5">
                    {
                        this.renderHomework(ALLReviewedHomeworkInfo, 4)
                    }
                </TabPane>
            </Tabs>
        );
    }
}