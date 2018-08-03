import React, { Component } from 'react';
import ButtonBox from '../ButtonBox/ButtonBox';
import Tables from '../Tables/Tables';
import SatisfiledButton from '../SatisfiledButton/Button';
import SatisfiledTable from '../SatisfiledTable/Tables';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
export default class TabBar extends Component {
    render() {
        const { LearningCourse, HistoryData, router, SatisfiledList, Actions } = this.props;
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="课程信息" key="1">
                    <ButtonBox                         
                        router={router}
                    />
                    <Tables 
                        LearningCourse={LearningCourse}
                        HistoryData={HistoryData}
                        router={router}
                    />
                </TabPane>
                <TabPane tab="满意度反馈" key="2">
                    <SatisfiledButton />
                    <SatisfiledTable 
                        SatisfiledList={SatisfiledList}
                        Actions={Actions}
                    />
                </TabPane>
            </Tabs>
        );
    }
}

