import './ToggleCircle.scss'
import React from "react";

const ToggleCircle = (props: { status: { isActive: boolean; }; }) => props.status.isActive ? <div className="toggle-circle active"/> : <div className="toggle-circle"/>

export default ToggleCircle;
