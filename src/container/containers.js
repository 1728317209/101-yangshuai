import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as itemHandleFunctions from '../Actions/actions';
import HeadView from '../components/Head';
import FootView from '../components/Foot';
import MessageItemView from '../components/MessageItem';
import DialogView_B from '../components/DialogView_B';
import DialogView_C from '../components/DialogView_C';
import '../App.css'

class Container extends Component {

    render() {
        const { handleFunctions, state } = this.props;
        return (
            <div>            
                <HeadView 
                    handleFunctions={ handleFunctions } 
                />
                <MessageItemView
                    handleFunctions={ handleFunctions }
                    state={ state }
                />
                <FootView />
                <DialogView_B
                    handleFunctions={ handleFunctions }
                    state={ state }
                />
                <DialogView_C
                    handleFunctions={ handleFunctions }
                    state={ state }
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

export default connect(mapStateToProps, mapDispatchToProps)(Container);
