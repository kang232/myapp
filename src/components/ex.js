import React, { memo } from 'react'

function Ex({ onIncrease }) {
    console.log('re-render')
    return (
        <>
            onIncrease
        </>
    )
}

export default memo(Ex)
