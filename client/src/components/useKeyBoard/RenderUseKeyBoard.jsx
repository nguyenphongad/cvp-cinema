import React, { useEffect, useRef } from 'react'

const RenderUseKeyBoard = (key, cb) => {

    const callBackRef = useRef(cb);
    useEffect(() => {
        callBackRef.current = cb;
    });

    useEffect(() => {
        function handle(event) {
            if (event.code === key) {
                callBackRef.current(event);
            }
        }
        document.addEventListener("keydown", handle)
        return () => document.removeEventListener("keydown", [key])
    })

}

export default RenderUseKeyBoard;