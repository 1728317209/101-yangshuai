import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import * as itemHandleFunctions from '../Actions/index'
import { connect } from 'react-redux'
import Head from '../Components/Head/Head';
import TabBar from '../Components/TabBar/TabBar';
import * as api from '../api/index';
import './OP.css';

class OP extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        api.fetchUserInfo(dispatch);
        api.fetchLessonInfo(dispatch);
    }
    render() {
        const { state } = this.props;
        console.log('123',state)
        return (
            <div>
                <Head Students_Info={state.Students_Info[0]}/>
                <TabBar 
                    LearningCourse={state.LearningCourse}
                    HistoryData={state.HistoryData}
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { state };
}
function mapDispatchToProps(dispatch) {
    return {
        // handleFunctions: bindActionCreators(itemHandleFunctions, dispatch)
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OP);