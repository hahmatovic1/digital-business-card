import React from 'react'
import LinkButton from './LinkButton'

export default function Buttons(){
    return <div className="buttons">
    <LinkButton 
        styleClass = "btn btn-git"
        link = "https://github.com/hahmatovic1/"
        fontawesomeClass = "fa-brands fa-github fa-xl"
        text = "GitHub"
    />
    <LinkButton 
        styleClass = "btn btn-linkedin"
        link = "https://www.linkedin.com/in/hadija-ahmatovi%C4%87-001478164"
        fontawesomeClass = "fa-brands fa-linkedin fa-xl"
        text = "LinkedIn"
    />
</div>
}