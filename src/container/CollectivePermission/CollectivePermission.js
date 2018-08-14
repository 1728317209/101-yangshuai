import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as HandleActions from '../../Actions'
import { connect } from 'react-redux';
import PartTop from '../../Components/CollectivePermission/partTop/partTop';
import PartReview from '../../Components/CollectivePermission/partReview/review';
import './index.css';
class ColPermission extends Component {

    render() {
        const { isShowView, currentEmployee, departmentTree, Actions, selectedEmployee, AllEmployee } = this.props;
        return (
            <div className="reviewBody"> 
                <PartTop 
                    isShowView={isShowView}
                    Actions={Actions}
                />
                <PartReview 
                    AllEmployee={AllEmployee}
                    selectedEmployee={selectedEmployee}
                    Actions={Actions}
                    departmentTree={departmentTree}
                    currentEmployee={currentEmployee}
                    isShowView={isShowView}
                />
            </div>
        );
    }
}

const mapEntities = (ids, departments, AllEmployee) => {
    if(!ids || ids.length === 0) {
        return null;
    }else {
        return (
            ids.map(id => {
                return {
                    ...departments[id],
                    employee: departments[id].employee.map(empId => AllEmployee[empId]),
                    children: mapEntities(departments[id].children, departments, AllEmployee)
                }
            })
        )
    }
}

function mapStateToProps(state) {
    const { ColPermission } = state;
    const { 
        isShowView,
        currentEmployee,
        selectedEmployee,
        DepartmentIds,
        DepartmentEntities: {
            departments,
            AllEmployee
        }
    } = ColPermission;
    return {
        departmentTree: mapEntities(DepartmentIds, departments, AllEmployee),
        selectedEmployee: selectedEmployee,
        currentEmployee: currentEmployee,
        AllEmployee: AllEmployee,
        isShowView: isShowView
    };
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(HandleActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ColPermission);