import React from 'react'
import classes from './index.module.css'

const footer = () => {
    return (
        <div className={classes.Root}>
            <hr/>
            <p>
                Copyright &copy; Ashirwaad Restraunt Inc. All rights reserved
            </p>
            {/* <p>
                Made by <a href="//www.digivats.com"  target="_blank"> DigiVats </a>
            </p> */}
        </div>
    )
}

export default footer