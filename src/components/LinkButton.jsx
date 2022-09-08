import React from "react";

export default function LinkButton(props){
    return <a href={props.link}><button className={props.styleClass}><i class={props.fontawesomeClass}></i>{props.text}</button></a>
}