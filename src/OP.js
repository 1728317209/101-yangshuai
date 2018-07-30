import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as itemHandleFunctions from './Actions/index';

import './OP.css';

import Head from './Components/Head/Head';
import TabBar from './Components/TabBar/TabBar';

class OP extends Component {
    render() {
        const { state } = this.props;
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
        handleFunctions: bindActionCreators(itemHandleFunctions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OP);