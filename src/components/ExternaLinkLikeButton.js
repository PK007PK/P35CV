import React from 'react'

export default function ExternalLinkLikeButton({link, className, children}) {
    return (
        <a
            style={{backgroundColor: "#3f51b5"}}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-sm text-white ${className}`}
            itemProp="url"
        >{children}</a>
    )
}