import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as HandleActions from '../../Actions'
import { connect } from 'react-redux';
import Head from '../../Components/Components_Op/Head/Head';
import TabBar from '../../Components/Components_Op/TabBar/TabBar';
import './OP.css';

class OP extends Component {
    componentDidMount() {
        const { Actions } = this.props;
        const mid = this.props.params.mid;
        Actions.fetchUserInfo(mid);
        Actions.fetchLessonInfo(mid);
        Actions.fetchSatisfiledList(mid)
    }
    render() {
        const { Students_Info, router, Actions, currentLessons, historyLessons, SatisfiledList } = this.props;
        return (
            <div className="OP">
                <Head Students_Info={Students_Info}/>
                <TabBar 
                    Actions={Actions}
                    router={router}
                    currentLessons={currentLessons}
                    historyLessons={historyLessons}
                    SatisfiledList={SatisfiledList}
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { Students_Info, currentLessonIds, historyLessonIds, lessonEntities, SatisfiledLessonTimes, satisfiledEntities } = state.OpInfo;
    const { classes, teachers, entities } = lessonEntities;
    return { 
        currentLessons: currentLessonIds.map(id => {
            return {
                ...entities[id],
                classInfo: classes[entities[id].classInfo],
                teacherInfo: teachers[entities[id].teacherInfo]
            }
        }),
        historyLessons: historyLessonIds.map(id => {
            return {
                ...entities[id],
                classInfo: classes[entities[id].classInfo],
                teacherInfo: teachers[entities[id].teacherInfo]
            }
        }),
        SatisfiledList: SatisfiledLessonTimes.map(time => {
            const SatisfiledInfo = satisfiledEntities.SatisfiledInfo[time];
            return {
                ...SatisfiledInfo,
                teacher_info: satisfiledEntities.teachers[SatisfiledInfo.teacher_info],
                class_info: satisfiledEntities.classes[SatisfiledInfo.class_info]
            }
        }),
        Students_Info: Students_Info
    };
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(HandleActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OP);