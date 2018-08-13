import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as HandleActions from '../../Actions'
import { connect } from 'react-redux';
import PartTop from '../../Components/CollectivePermission/partTop/partTop';
import PartReview from '../../Components/CollectivePermission/partReview/review';
import './index.css';
class ColPermission extends Component {

    render() {
        const { Actions, selectedEmployee, AllEmployee, AllDepartmentIds, AllDepartment, GeneralManage, Finance,Develop } = this.props;
        console.log('99999999999999', AllDepartment)
        return (
            <div className="reviewBody"> 
                <PartTop />
                <PartReview 
                    AllDepartmentIds={AllDepartmentIds}
                    AllDepartment={AllDepartment}
                    GeneralManage={GeneralManage}
                    Finance={Finance}
                    Develop={Develop}
                    AllEmployee={AllEmployee}
                    selectedEmployee={selectedEmployee}
                    Actions={Actions}
                />
            </div>
        );
    }
}

const mapEntities = (department, Groups, AllEmployee) => {
    
    return {
        ...department,
        Groups: Groups.map( Group => {
            let thisEmployee = department.Groups[Group].Employee.map(id => {
                return AllEmployee[id];
            });
            return { ...department.Groups[Group], Employee: thisEmployee }
        })
    }
}

function mapStateToProps(state) {
    const { ColPermission } = state;
    const { DepartmentIds, DepartmentEntities, selectedEmployee } = ColPermission;
    const { 
        DevelopGroups, 
        GeneralManageGroups,
        FinanceGroups,
        AllDepartment
    } = DepartmentIds;
    const { 
        GeneralManage, 
        Finance,
        Develop,
        AllEmployee 
    } = DepartmentEntities;
    return {
        AllDepartment: {
            GeneralManage: mapEntities(GeneralManage, GeneralManageGroups, AllEmployee),
            Finance: mapEntities(Finance, FinanceGroups, AllEmployee),
            Develop: mapEntities(Develop, DevelopGroups, AllEmployee)
        },
        AllDepartmentIds: AllDepartment,
        AllEmployee: AllEmployee,
        selectedEmployee: selectedEmployee
    };
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(HandleActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ColPermission);