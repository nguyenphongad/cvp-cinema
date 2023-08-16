import React from 'react'

const RenderInputHandle = (props) => {
    return (
        <div className="group__input">
            <label htmlFor={props.id} className="label__input">{props.name_label}</label>
            <br />
            <div className="tr__line-input">
                <input
                    type={props.type}
                    id={props.id}
                    name={props.name_method}
                    className={`line__input ${props.className}`}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.required}
                    autoComplete={props.autoComplete}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                    onChange={props.onChange}
                />
                <div className="icon__right--type" onClick={props.onClickShowPass}>
                    <label className={props.className_pass} htmlFor={props.id}>
                        {props.icon_right}
                        {props.icon_handle_pass}
                    </label>
                </div>
            </div>


        </div>
    )
}

export default RenderInputHandle;