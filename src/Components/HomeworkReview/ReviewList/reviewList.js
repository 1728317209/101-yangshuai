import React, { Component } from 'react';
import { List, Spin, Button } from 'antd';
// import reqwest from 'reqwest';
import './index.css';
import InfiniteScroll from 'react-infinite-scroller';
import './index.css';
// const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export default class InfiniteListExample extends Component {
    state = {
        loading: false,
        hasMore: true,
    }

    handleInfiniteOnLoad = () => {
        // let data = this.state.data;
        this.setState({
            loading: false,
        });
    }
    handleReject = (commentId) => {
        const { Actions } = this.props;
        const reason = '太简单';
        Actions.handleChangeCommentStatus(commentId, reason)
    }
    isReject = (comment) => {
        if (comment.status === "unrevised") {
            return (
                <div>
                    {/* <Button className="Button" size="small" onClick={() => this.handleReject(comment.id)}>退回</Button> */}
                    <Button className="Button" type='reset' size="small" onClick={this.handleReject.bind(this, comment.id)}>退回</Button>
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
            <div className="demo-infinite-container">
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