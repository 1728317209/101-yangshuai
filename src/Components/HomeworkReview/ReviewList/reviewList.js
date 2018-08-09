import React, { Component } from 'react';
import { List, Spin, Button, Modal, Input } from 'antd';
// import reqwest from 'reqwest';
import './index.css';
import InfiniteScroll from 'react-infinite-scroller';
import './index.css';
// const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
const { TextArea } = Input;

export default class InfiniteListExample extends Component {
    state = {
        loading: false,
        hasMore: true,
        visible: false,
        commentId: null,
        reason: ''
    }

    showModal = (commentId) => {
        this.setState({
            visible: true,
            commentId: commentId
        });
    }

    handleOk = (e) => {
        console.log(e);
        const { Actions } = this.props;
        if(this.state.reason) {
            Actions.handleChangeCommentStatus(this.state.commentId, this.state.reason)
            this.setState({ 
                visible: false, 
                reason: null 
            });
        }else {
            alert('Please Input Something, OK?')
        }
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
            reason: null
        });
    }

    handleInfiniteOnLoad = () => {
        // let data = this.state.data;
        this.setState({
            loading: false,
        });
    }

    handleReviewChange = (e) => {
        this.setState ({
            reason: e.target.value
        });
    }

    isReject = (comment) => {
        if (comment.status === "unrevised") {
            return (
                <div>
                    <Button type="primary" onClick={this.showModal.bind(this, comment.id)} className="Button">退回</Button>
                    <Modal
                        title='退回原因：'
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        closable={false}
                        okText='退回'
                        cancelText='取消'
                    >
                    <TextArea autosize={true} value={this.state.reason} onChange={this.handleReviewChange}/>
                    </Modal>
                </div>
            )
        } else if (comment.status === "reject") {
            return (
                <div>
                    <span className="reject">{`[消息被退回]  退回原因：${comment.reason}`}</span>
                </div>
            )
        }
    }

    formatTime = (time) => {
        const newTime = new Date(time * 1000).toLocaleString();
        return newTime;
    }

    render() {
        const { comments } = this.props;
        const data = comments.map(comment => {
            if (comment.mid) {
                return (
                    <div className="top-div">
                        <div className="div">
                            <span className="nick">{`${comment.nick} MID:${comment.mid}   `}</span>
                            <span className="time">{`${this.formatTime(comment.time)}`}</span>
                        </div>
                        <div>
                            <span>{`${comment.content}`}</span>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="top-div">
                        <div className="div">
                            <span className="nick">{`${comment.nick} (${comment.commentator.role} ${comment.commentator.nick})`}</span>
                            <span className="time">{`${this.formatTime(comment.time)}`}</span>
                        </div>
                        <div>
                            <span>{`${comment.content}`}</span>
                        </div>
                        {
                            this.isReject(comment)
                        }
                    </div>
                )
            }
        })

        return (
            <div className="demo-infinite-container" ref='Drawer'>
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                    loadMore={this.handleInfiniteOnLoad}
                >
                    <List
                        dataSource={data}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                {item}
                            </List.Item>
                        )}
                    >
                        {this.state.loading && this.state.hasMore && (
                            <div className="demo-loading-container">
                                <Spin />
                            </div>
                        )}
                    </List>
                </InfiniteScroll>
            </div>
        );
    }
}