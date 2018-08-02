import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as HandleActions from '../Actions'
import { connect } from 'react-redux';
import Head from '../Components/Components_Op/Head/Head';
import TabBar from '../Components/Components_Op/TabBar/TabBar';
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
        const { OpInfo, router, Actions } = this.props;
        return (
            <div>
                <Head Students_Info={OpInfo.Students_Info}/>
                <TabBar 
                    LearningCourse={OpInfo.LearningCourse}
                    HistoryData={OpInfo.HistoryData}
                    SatisfiledList={OpInfo.SatisfiledList}
                    Actions={Actions}
                    router={router}
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { 
        OpInfo: state.OpInfo 
    };
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(HandleActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OP);