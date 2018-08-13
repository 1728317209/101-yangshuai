import React, { Component } from 'react';
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;

export default class TreeMenu extends Component {

    state = {
        selectedIds: []
    }

    onSelect = (selectedKeys, info) => {
        // console.log('selected', selectedKeys, info);
        this.setState({
            selectedIds: [...this.state.selectedIds, ...selectedKeys]
        })
        console.log('999999999999', this.state.selectedIds);
    }

    renderGroup = (Groups) => Groups.map(Group => {
        return (
            <TreeNode title={Group.name} key={Group.name}>
                {
                    Group.Employee.map(item => {
                        return <TreeNode title={item.name} key={item.id} />
                    })
                }
            </TreeNode>
        )
    })

    renderDepartment = (AllDepartmentIds, AllDepartment) => AllDepartmentIds.map(id => {
        return (
            <TreeNode title={AllDepartment[id].name} key={AllDepartment[id].name}>
                {
                    this.renderGroup(AllDepartment[id].Groups)
                }
            </TreeNode>
        )
    })
    render() {
        const { AllDepartment, AllDepartmentIds } = this.props;
        return (
            <Tree
                showLine
                defaultExpandedKeys={['0-0-0']}
                onSelect={this.onSelect}
            >
            <TreeNode>
                {
                    this.renderDepartment(AllDepartmentIds, AllDepartment)
                }
            </TreeNode>
            </Tree>
        );
    }
}