import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as HandleActions from '../../Actions'
import { connect } from 'react-redux';
import Head from '../../Components/HomeworkReview/Head/head';
import TabBar from '../../Components/HomeworkReview/TabBar/TabBar';

class HomeworkReview extends Component {

    componentDidMount() {
        const { Actions } = this.props;
        Actions.fetchHomeworkInfo(1, 0);
        Actions.fetchHomeworkInfo(1, 1);
        Actions.fetchHomeworkInfo(0, 0);
        Actions.fetchHomeworkInfo(0, 1);
    }

    render() {
        const { 
            MyWillReviewHomeworkIds,
            MyReviewedHomeworkIds,
            AllWillReviewHomeworkIds,
            ALLReviewedHomeworkIds,
            HomeworkReviewInfo,
            author,
            classInfo,
            commentsItem,
            teacherInfo,
            HomeworkIdx,
            HomeworkEntities
        } = this.props;
        return (
            <div>
                <Head 
                    MyWillReviewHomeworkIds={MyWillReviewHomeworkIds}
                    HomeworkReviewInfo={HomeworkReviewInfo} 
                />
                <TabBar 
                    HomeworkIdx={HomeworkIdx}
                    HomeworkEntities={HomeworkEntities}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('333333333333333333333333', state.HomeworkInfo)
    const { HomeworkInfo } = state;
    const { HomeworkIdx, HomeworkEntities } = HomeworkInfo;
    const { 
        MyWillReviewHomeworkIds, 
        MyReviewedHomeworkIds,
        AllWillReviewHomeworkIds,
        ALLReviewedHomeworkIds
    } = HomeworkIdx;
    const { 
        HomeworkReviewInfo, 
        author,
        classInfo,
        commentsItem,
        teacherInfo
    } = HomeworkEntities;

    return { 
        MyWillReviewHomeworkIds,
        MyReviewedHomeworkIds,
        AllWillReviewHomeworkIds,
        ALLReviewedHomeworkIds,
        HomeworkReviewInfo,
        author,
        classInfo,
        commentsItem,
        teacherInfo,
        HomeworkIdx,
        HomeworkEntities
    };
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(HandleActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkReview);