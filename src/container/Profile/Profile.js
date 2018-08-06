import React, { Component } from 'react';
import Head from '../../Components/Components_Profile/Head/head';
import Tables from '../../Components/Components_Profile/tables/tables';
import { bindActionCreators } from 'redux';
import * as HandleActions from '../../Actions/index';
import { connect } from 'react-redux';
import './Profile.css';

class Profile extends Component {

    componentWillMount() {
        const { Actions } = this.props;
        const mid = '';
        Actions.fetchStudentsInfo(mid);
    }

    render() {
        const { Actions, router } = this.props;
        const { StudentsInfo, SelectedStudents, SelectedMids} = this.props;
        return (
            <div className="profile">
                <Head 
                    selectByMid={Actions.selectByMid} 
                    selectByNick={Actions.selectByNick}
                />
                <Tables 
                    StudentsInfo={StudentsInfo}
                    SelectedStudents={SelectedStudents}
                    SelectedMids={SelectedMids}
                    router={router}
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
    const {ProfileInfo} =  state;
    const { StudentsMids, StudentsEntities, SelectedMids } = ProfileInfo;
    return { 
        StudentsInfo: StudentsMids.map(mid => {
            return StudentsEntities[mid];
        }),
        SelectedStudents: SelectedMids.map(mid => {
            return StudentsEntities[mid];
        }),
        SelectedMids: SelectedMids
    };
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(HandleActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);