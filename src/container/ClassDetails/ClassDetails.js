import React, { Component } from 'react';
import Head from '../../Components/Components_ClassDetails/head/head';
import Tables from '../../Components/Components_ClassDetails/tables/tables';
import { bindActionCreators } from 'redux';
import * as HandleActions from '../../Actions/index';
import { connect } from 'react-redux';


class ClassDetails extends Component {

    componentWillMount() {
        const { Actions } = this.props;
        const id = this.props.params.classId;//'765765';
        Actions.fetchClassInfo(id);
    }

    render() {
        const { courses, basic_info, real_teacher, virtual_teacher } = this.props;
        return (
            <div className="ClassDetails">
                <Head 
                    basic_info ={ basic_info } 
                    real_teacher={real_teacher}
                    virtual_teacher={virtual_teacher}
                />
                <Tables courses ={ courses }/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { coursesList, basic_info, virtual_teacher, real_teacher } = state.ClassInfo;
    const { courseEntities, courseTimes } = coursesList;
    return { 
        courses: courseTimes.map(time => {
            return courseEntities[time];
        }),
        basic_info: basic_info,
        virtual_teacher: virtual_teacher,
        real_teacher: real_teacher
    };
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(HandleActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassDetails);