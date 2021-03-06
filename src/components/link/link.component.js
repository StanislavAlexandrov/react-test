import React, {Component} from "react";
import "./link.component.scss";

export default class Link extends Component {
    render() {
        let {text, href, ...rest} = this.props;

        text = `The link goes to ${text}`;

        return (
            <a {...rest} className="link" href={href}>{text}</a>
        );

    }
}
