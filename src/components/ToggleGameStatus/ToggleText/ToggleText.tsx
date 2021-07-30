import './ToggleText.scss'
import React from 'react';

const ToggleText = (props: { status: { isActive: boolean; }; }) => props.status.isActive ? <div className="toggle-text">Train</div> : <div className="toggle-text active">Play</div>

export default ToggleText;
