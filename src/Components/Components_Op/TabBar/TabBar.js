import React, { Component } from 'react';
import ButtonBox from '../ButtonBox/ButtonBox';
import Tables from '../Tables/Tables';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
export default class TabBar extends Component {
    render() {
        const { LearningCourse, HistoryData } = this.props;
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="课程信息" key="1">
                    <ButtonBox />
                    <Tables 
                        LearningCourse={LearningCourse}
                        HistoryData={HistoryData}
                    />
                </TabPane>
                <TabPane tab="满意度反馈" key="2"></TabPane>
            </Tabs>
        );
    }
}

