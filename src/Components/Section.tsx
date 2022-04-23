import React, { ReactNode } from 'react'

type TSection = {
    children?: ReactNode
}
const Section = (props: TSection) => {
    return <div className="section">
        {props.children || ''}
    </div>
}

export default Section
