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
        const { ProfileInfo, Actions, router } = this.props;
        return (
            <div className="profile">
                <Head 
                    selectByMid={Actions.selectByMid} 
                    selectByNick={Actions.selectByNick}
                />
                <Tables 
                    ProfileInfo={ProfileInfo} 
                    router={router}
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { 
        ProfileInfo: state.ProfileInfo
    };
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(HandleActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);