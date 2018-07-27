import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as itemHandleFunctions from '../Actions/actions';
import HeadView from '../components/Head/Head';
import FootView from '../components/Foot/Foot';
import MessageItemView from '../components/ItemList/MessageItem';
import DialogViewB from '../components/DialogView/DialogView_B';
import DialogViewC from '../components/DialogView/DialogView_C';
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
                <DialogViewB
                    handleFunctions={ handleFunctions }
                    state={ state }
                />
                <DialogViewC
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
        //自动调用dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
