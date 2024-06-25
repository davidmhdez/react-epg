import React from 'react'

type Props = React.HTMLAttributes<SVGElement>

const CloseIcon: React.FC<Props> = (props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <mask id="mask0_4409_5890" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_4409_5890)">
                <path d="M6.40008 18.3077L5.69238 17.6L11.2924 12L5.69238 6.4L6.40008 5.6923L12.0001 11.2923L17.6001 5.6923L18.3078 6.4L12.7078 12L18.3078 17.6L17.6001 18.3077L12.0001 12.7077L6.40008 18.3077Z" fill="#0F265C"/>
            </g>
        </svg>
    )
}
export default CloseIcon