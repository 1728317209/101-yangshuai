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

    renderItems = (HomeworkIdx, HomeworkEntities) => {
        if(HomeworkIdx.length){
            return HomeworkIdx.map( id => {
                const { author, classInfo, teacherInfo} = HomeworkEntities.HomeworkReviewInfo[id];
                const commentIds = HomeworkEntities.HomeworkReviewInfo[id].comments;
                const comments = commentIds.map(id => {
                    return HomeworkEntities.commentsItem[id];
                })
                return (
                    <div className="left-right-Part">
                        <div className="left-Part">
                            <ImgView 
                                photos={HomeworkEntities.HomeworkReviewInfo[id].photos}
                            />
                            <HomeworkInfo 
                                HomeworkReviewInfo={HomeworkEntities.HomeworkReviewInfo[id]}
                                author={HomeworkEntities.author[author]}
                                classInfo={HomeworkEntities.classInfo[classInfo]}
                                teacherInfo={HomeworkEntities.teacherInfo[teacherInfo]}
                            />
                            <ReviewArea />
                        </div>
                        <div className="right-Part">
                            <ReviewList 
                                comments={comments}
                            />
                        </div>
                    </div>
                )
            })
        }
    }


    render() {
        
        // const { 
        //     HomeworkReviewInfo,
        //     author,
        //     classInfo,
        //     commentsItem,
        //     teacherInfo,
        // } = HomeworkEntities;
        const { HomeworkEntities, HomeworkIdx} = this.props;
        const { 
            MyWillReviewHomeworkIds,
            MyReviewedHomeworkIds,
            AllWillReviewHomeworkIds,
            ALLReviewedHomeworkIds
        } = HomeworkIdx;
        console.log(
            '000000000000000000000000',
            MyWillReviewHomeworkIds,
            MyReviewedHomeworkIds,
            AllWillReviewHomeworkIds,
            ALLReviewedHomeworkIds
        )
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="我的未点评" key="1">
                    {
                        this.renderItems(MyWillReviewHomeworkIds, HomeworkEntities)
                    }
                </TabPane>
                <TabPane tab="我的点评历史" key="2">
                    {
                        this.renderItems(MyReviewedHomeworkIds, HomeworkEntities)
                    }
                </TabPane>
                <TabPane tab="我的被退回" key="3">

                </TabPane>
                <TabPane tab="全部未点评" key="4">
                    {
                        this.renderItems(AllWillReviewHomeworkIds, HomeworkEntities)
                    }
                </TabPane>
                <TabPane tab="全部已点评" key="5">
                    {
                        this.renderItems(ALLReviewedHomeworkIds, HomeworkEntities)
                    }
                </TabPane>
            </Tabs>
        );
    }
}

