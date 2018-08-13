import React, { Component } from 'react';
import { Tree, Button, Input } from 'antd';
// import TreeMenu from './treeMenu';
import './index.css';
const TreeNode = Tree.TreeNode;

export default class ReviewRigth extends Component {

    state = {
        selectedIds: [],
        selectedBtn: []
    }

    renderButton = () => {
        const { AllEmployee } = this.props;
        return this.state.selectedIds.map(id => {
            if(AllEmployee[id]) {
                if(this.state.selectedBtn.indexOf(id) === -1) {
                    return <Button onClick={() => this.onClickBtn(id)}>{`${AllEmployee[id].name} ${AllEmployee[id].id}`}</Button>
                }else {
                    return <Button disabled>{`${AllEmployee[id].name} ${AllEmployee[id].id}`}</Button>
                }
            }
        })
    }

    onClickBtn = (id) => {
        this.setState({
            selectedBtn: [...this.state.selectedBtn, id]
        });
        console.log(this.state.selectedBtn)
    }

    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
        this.setState({
            selectedIds: [...this.state.selectedIds, ...selectedKeys]
        })
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

    handleClick = () => {
        const { Actions } = this.props;
        Actions.handleSelectedEmployee(this.state.selectedBtn)
    }

    render() {
        const { AllDepartment, AllDepartmentIds } = this.props;
        return (
            <div className="this-right-div">
                <div className="treeMenu">
                    <Tree
                        showLine
                        defaultExpandedKeys={['0-0-0']}
                        onSelect={this.onSelect}
                    >
                        <TreeNode title="AllDepartment" key='001'>
                            {
                                this.renderDepartment(AllDepartmentIds, AllDepartment)
                            }
                        </TreeNode>
                    </Tree>
                </div>
                <div className="this-rigth-div">
                    <div className="this-opration">
                        <Input />
                        <Button>搜索</Button>
                    </div>
                    <div className="this-rigth-btn">
                        {
                            this.renderButton()
                        }
                    </div>
                    <Button className="sure" onClick={this.handleClick}>确定</Button>
                </div>
            </div>
        );
    }
}