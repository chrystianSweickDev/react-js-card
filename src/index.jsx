import React from 'react';
import './style.css'

function Card({ header, body, footer, theme }) {
    const _theme = theme || 'primary'
    return (
        <div className={`swe-card-${_theme}`}>
            <div className={`swe-card-header-${_theme}`}>
                {header}
            </div>
            <div className={`swe-card-body-${_theme}`}>
                {body}
            </div>
            <div className={`swe-card-footer-${_theme}`}>
                {footer}
            </div>
        </div>
    );
}

export default Card;