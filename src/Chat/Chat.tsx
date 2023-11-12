import React from 'react'
import { TMessages } from '../messages'
import { TMessage } from '../messages'

type MessageHistoryProps = {
    list: TMessages
}

type MessageTypeProps = {
    from: {
        name: string
    }
    message: TMessage
}

MessageHistory.defaultProps = {
    list: [],
}

export default function MessageHistory({ list }: MessageHistoryProps) {
    return (
        <ul>
            {
                list.map(el => (
                    el.type === 'response' ? <Response from={el.from} message={el} /> :
                        el.type === 'message' ? <Message from={el.from} message={el} /> :
                            el.type === 'typing' ? <Typing from={el.from} message={el} /> : ""
                )
                )
            }
        </ul>
    )
}

export function Message({ from, message }: MessageTypeProps) {
    return (
        <li className="clearfix">
            <div className="message-data align-left">
                <span className="message-data-name">{from.name}</span>
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message my-message float-left">
                {message.text}
            </div>
        </li>
    )
}

export function Response({ from, message }: MessageTypeProps) {
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
                {message.text}
            </div>
        </li>
    )
}

export function Typing({ from, message }: MessageTypeProps) {
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
                {message.text}
            </div>
        </li>
    )
}
