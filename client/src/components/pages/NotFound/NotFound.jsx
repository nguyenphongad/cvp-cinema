import React from 'react'
import { FaUnlink } from 'react-icons/fa'


function NotFound() {
    return (
        <div className="wrap_not-found animation_scale-lg">
            <div className="body_not-found">
                <div className="border_noti-unlink">
                    <FaUnlink/>
                    NOT FOUND
                </div>
            </div>
        </div>
    )
}

export default NotFound