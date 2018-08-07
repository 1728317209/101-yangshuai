import React, { Component } from 'react';
import { List, message, Avatar, Spin, Button } from 'antd';
import reqwest from 'reqwest';
import './index.css';
import InfiniteScroll from 'react-infinite-scroller';
import './index.css';
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export default class InfiniteListExample extends Component {
    state = {
        loading: false,
        hasMore: true,
    }

    getData = (callback) => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (res) => {
                callback(res);
            },
        });
    }

    componentDidMount() {
        this.getData((res) => {
            this.setState({
                data: res.results,
            });
        });
    }

    handleInfiniteOnLoad = () => {
        let data = this.state.data;
        this.setState({
            loading: true,
        });
        if (data.length > 14) {
            message.warning('Infinite List loaded all');
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
        this.getData((res) => {
            data = data.concat(res.results);
            this.setState({
                data,
                loading: false,
            });
        });
    }

    isReject = (comment) => {
        if(comment.status==="unrevised") {
            return (
                <div>
                    <Button className="Button" size="small">退回</Button>
                </div>
            )
        }else if (comment.status==="reject") {
            return (
                <div>
                    <span className="reject">{`消息被退回  退回原因：${comment.reason}`}</span>
                </div>
            )
        }
    }
    render() {
        const {comments} = this.props;
        const data = comments.map(comment => {
            if(comment.mid) {
                return (
                    <div className="top-div">
                        <div className="div">
                            <span className="nick">{`${comment.nick} MID:${comment.mid}   `}</span>
                            <span className="time">{`${comment.time}`}</span>
                        </div>
                        <div>
                            <span>{`${comment.content}`}</span>
                        </div>
                    </div>
                )
            }else {
                return (
                    <div className="top-div">
                        <div className="div">
                            <span className="nick">{`${comment.nick} (${comment.commentator.role} ${comment.commentator.nick})`}</span>
                            <span className="time">{`${comment.time}`}</span>
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
                    loadMore={this.handleInfiniteOnLoad}
                    hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
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