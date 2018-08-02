import React, { Component } from 'react';
import Head from '../Components/Components_ClassDetails/head/head';
import Tables from '../Components/Components_ClassDetails/tables/tables';
import { bindActionCreators } from 'redux';
import * as HandleActions from '../Actions';
import { connect } from 'react-redux';


class ClassDetails extends Component {

    componentWillMount() {
        const { Actions } = this.props;
        const id = this.props.params.classId;//'765765';
        Actions.fetchClassInfo(id);
    }

    render() {
        const { ClassInfo } = this.props;
        return (
            <div >
                <Head ClassInfo ={ ClassInfo } />
                <Tables ClassInfo ={ ClassInfo }/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { 
        ClassInfo: state.ClassInfo,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(HandleActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassDetails);