import React, { Component } from 'react';
import { Tree, Button, Input } from 'antd';
import './index.css';
const TreeNode = Tree.TreeNode;

export default class ReviewRigth extends Component {

    state = {
        // selectedIds: [],
        selectedBtn: [],
        inputVal: ''
    }

    renderButton = () => {
        const { AllEmployee, currentEmployee } = this.props;
        return currentEmployee.map(id => {
            if(AllEmployee[id]) {
                if(this.state.selectedBtn.indexOf(id) === -1) {
                    return <Button key={AllEmployee[id].id} type='primary' onClick={() => this.onClickBtn(id)}>{`${AllEmployee[id].name} ${AllEmployee[id].id}`}</Button>
                }else {
                    return <Button key={AllEmployee[id].id} >{`${AllEmployee[id].name} ${AllEmployee[id].id}`}</Button>
                }
            }else {
                return null;
            }
        })
    }

    onClickBtn = (id) => {
        const index = this.state.selectedBtn.indexOf(id);
        if(index === -1) {
            this.setState({
                selectedBtn: [
                    ...this.state.selectedBtn, 
                    id
                ]
            });
        }
        // else {
        //     const newSelectedBtn = this.state.selectedBtn;
        //     newSelectedBtn.splice(index, 1);
        //     this.setState({
        //         selectedBtn: [...newSelectedBtn]
        //     })
        // }
    }

    onSelect = (selectedKeys, info) => {
        const { Actions } = this.props;
        console.log('selected', selectedKeys, info);
        if(selectedKeys.length) {
            const index = selectedKeys[0].indexOf(':');
            const id = selectedKeys[0].substr(index+1, selectedKeys[0].length-index)
            Actions.handleOnTreeClick(id);
        }else {
            Actions.handleOnTreeClick('');
        }
    }

    onInputChange = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }

    onSearch = () => {
        const { Actions } = this.props;
        Actions.handleSearchEmp(parseInt(this.state.inputVal, 10));
        this.setState({
            inputVal: ''
        })
    }

    handleClick = () => {
        const { Actions } = this.props;
        if(this.state.selectedBtn.length) {
            Actions.handleSelectedEmployee(this.state.selectedBtn)
            this.setState({
                selectedBtn: []
            })
        }
    }

    renderDepTree = (root, prevIdx) => {
        if(!root || root.length===0) {
            return null;
        }
        return (
            root.map((item, idx) => {
                return (
                    <TreeNode title={item.name} key={`${prevIdx}-${idx}:${root[idx].id}`}>
                        {
                            this.renderDepTree(root[idx].children, `${prevIdx}-${idx}`)
                        }
                    </TreeNode>
                )
            })
        )
    }
    render() {
        const { departmentTree } = this.props;
        return (
            <div className="this-right-div">
                <div className="treeMenu">
                    <Tree
                        showLine
                        defaultExpandedKeys={['0']}
                        onSelect={this.onSelect}
                    >
                        {
                            this.renderDepTree(departmentTree, 'Dep')
                        }
                    </Tree>
                </div>
                <div className="rigth-all divider2">
                    <div className="this-opration">
                        <Input onChange={this.onInputChange} value={this.state.inputVal}/>
                        <Button onClick={this.onSearch}>搜索</Button>
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