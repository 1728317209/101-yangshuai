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
            MyWillReviewHomeworkInfo,
            MyReviewedHomeworkInfo,
            AllWillReviewHomeworkInfo,
            ALLReviewedHomeworkInfo,
            Actions
        } = this.props;
        console.log('ccccccccccccccccccccccc', ALLReviewedHomeworkInfo);
        return (
            <div>
                <Head 
                    MyWillReviewHomeworkInfo={MyWillReviewHomeworkInfo}
                />
                <TabBar 
                    MyWillReviewHomeworkInfo={MyWillReviewHomeworkInfo}
                    MyReviewedHomeworkInfo={MyReviewedHomeworkInfo}
                    AllWillReviewHomeworkInfo={AllWillReviewHomeworkInfo}
                    ALLReviewedHomeworkInfo={ALLReviewedHomeworkInfo}
                    Actions={Actions}
                />
            </div>
        );
    }
}

const mapComments = (comments, commentsItem) => comments.map(commentId => {
    return commentsItem[commentId]
})
const mapEntities = (ids, entities) => ids.map(id => {
    const { 
        HomeworkReviewInfo, 
        author,
        classInfo,
        commentsItem,
        teacherInfo
    } = entities;
    return {
        ...HomeworkReviewInfo[id],
        author: author[HomeworkReviewInfo[id].author],
        classInfo: classInfo[HomeworkReviewInfo[id].classInfo],
        teacherInfo: teacherInfo[HomeworkReviewInfo[id].teacherInfo],
        comments: mapComments(HomeworkReviewInfo[id].comments, commentsItem)
    }
})

function mapStateToProps(state) {
    const { HomeworkInfo } = state;
    const { HomeworkIdx, HomeworkEntities } = HomeworkInfo;
    const { 
        MyWillReviewHomeworkIds, 
        MyReviewedHomeworkIds,
        AllWillReviewHomeworkIds,
        ALLReviewedHomeworkIds
    } = HomeworkIdx;

    return { 
        MyWillReviewHomeworkInfo: mapEntities(MyWillReviewHomeworkIds, HomeworkEntities),
        MyReviewedHomeworkInfo: mapEntities(MyReviewedHomeworkIds, HomeworkEntities),
        AllWillReviewHomeworkInfo: mapEntities(AllWillReviewHomeworkIds, HomeworkEntities),
        ALLReviewedHomeworkInfo: mapEntities(ALLReviewedHomeworkIds, HomeworkEntities)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(HandleActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkReview);