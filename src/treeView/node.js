import React, { } from 'react';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import './treeview.css';
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from "react-contextmenu";
import Popover from 'react-bootstrap/Popover';




/**
* 
* Node is an single elemento into the treeview component
*@constructor 
*@param {string }       label The text will be showed 
*@param {string}        idkey The key to link a context menu its UNIQUE
*@param {number}        leafs List of options into the menuContext
*@param {boolean}       circles To display the circles 
*@param {number}        red To display in red circle
*@param {number}        green To display in green circle
*@param {number}        yellow To display in yellow circle
*@param {number}        gray To display in gray circle
*@param {bold}          bold  To ddisplay the label in bold
*@param {hasChildren}   hasChildren To display de menus to hide and show the children
*@param {string}        textColor To display on a different color the label  
*@param {boolean}       icon If the add or less must be showed
*@param {string}        iconClass ClassName for the icon
*@param {boolean}       toggled If is toggled or not 
*@param {function}      toggleEvent Event to control de toggle event
*@param {function}      onceClick Event after a single click 
*@param {function}      doubleClick  Event after a double click
*@param {function}      eventMenu Event after a click on context menus
*@param {function}      eventSubMenu Event After a click on a submenu
*@param {array}         menuCtx List of options into the menuContext
*@param {Object}        labelStyle  Object with the Style for a label

*/
const Node = props => {




    // console.log("Imprimiemdo props--->", props)

    return (

        <div className="global-node">
            <ContextMenuTrigger id={'' + props.idkey}>
                <div className="node-ctn">
                    <div className={props.circles ? "label" : "label fat"}
                        onClick={() => { props.onceClick ? props.onceClick() : console.log("") }}
                        onDoubleClick={(e) => { props.doubleClick ? props.doubleClick() : console.log("") }}
                    >
                        {props.iconClass !== '' ?
                            <div className="iconos">
                                <i className={props.iconClass.className} style={props.iconClass.style}></i>
                            </div>
                            : ''}
                        <span style={props.labelStyle} >
                            {props.label}
                            <span>
                                {props.leafs > 0 ? '(' + props.leafs + ')' : ''}
                            </span>
                        </span>
                    </div>
                    {props.circles ?
                        <div className="circles">
                            <div className={props.yellow === 0 ? 'circle yellow inactive' : 'circle yellow'}>{props.yellow.toString().length > 2 ? '99' : props.yellow}
                                {(props.yellow.toString().length > 2) ?
                                    <OverlayTrigger
                                        trigger="hover"
                                        placement="right"
                                        overlay={
                                            <Popover id={"popover-contained-yellow-" + props.yellow}>{props.yellow}</Popover>
                                        }
                                    >
                                        <div className="badge-custom yellow"  >+</div>
                                    </OverlayTrigger>
                                    :
                                    ''
                                }
                            </div>
                            <div className={props.green === 0 ? 'circle green inactive' : 'circle green'} >{props.green.toString().length > 2 ? '99' : props.green}
                                {(props.green.toString().length > 2) ?
                                    <OverlayTrigger
                                        trigger="hover"
                                        placement="right"
                                        overlay={
                                            <Popover id={"popover-contained-green-" + props.green}>{props.green}</Popover>
                                        }
                                    >
                                        <div className="badge-custom green" >+</div>
                                    </OverlayTrigger>
                                    :
                                    ''
                                }
                            </div>
                            <div className={props.red === 0 ? 'circle red inactive' : 'circle red'} >{props.red.toString().length > 2 ? '99' : props.red}
                                {(props.red.toString().length > 2) ?
                                    <OverlayTrigger
                                        trigger="hover"
                                        placement="right"
                                        overlay={
                                            <Popover id={"popover-contained-red-" + props.red}>{props.red}</Popover>
                                        }
                                    >
                                        <div className="badge-custom red" >+</div>
                                    </OverlayTrigger>
                                    :
                                    ''}
                            </div>
                            <div className={props.gray === 0 ? 'circle gray inactive' : 'circle gray'}>{props.gray.toString().length > 2 ? '99' : props.gray}
                                {(props.gray.toString().length > 2) ?
                                    <OverlayTrigger
                                        trigger="hover"
                                        placement="right"
                                        overlay={
                                            <Popover id={"popover-contained-gray-" + props.gray}>{props.gray}</Popover>
                                        }
                                    >
                                        <div className="badge-custom gray"  >+</div>
                                    </OverlayTrigger>
                                    :
                                    ''
                                }
                            </div>
                        </div>
                        : <div className="circles light"></div>}
                    {
                        props.hasChildren ?
                            <div className="icon-ctn" onClick={props.toggleEvent ? () => { props.toggleEvent() } : null}>
                                {props.icon ? !props.toggled ?
                                    <div className="icon-open animate-zoom   "></div> :
                                    <div className="icon-close animate-opacity"></div> : ''}
                            </div>
                            :
                            <div className="icon-ctn">
                            </div>
                    }
                </div>
            </ContextMenuTrigger>
            <div className={props.toggled ? 'child visible-top ' : 'child visible-bottom'}>
                {
                    props.children
                }
            </div>
            {props.menuCtx ? props.menuCtx.length > 0 ?
                <ContextMenu id={'' + props.idkey} onClick={() => { alert("Ayuda") }}>
                    {props.menuCtx ? props.menuCtx.length > 0 ? props.menuCtx.map((option, index) => {
                        return (
                            <MenuItem key={option + index} preventClose={false} data={{ option: option.id }} onClick={() => { props.eventMenu(option) }}>
                                {option.id}
                            </MenuItem>
                        );
                    }) : '' : ''}
                    {
                        props.subMenus ? props.subMenus.length > 0 ? props.subMenus.map((submenu, index) => {
                            return (
                                <SubMenu key={submenu.title + index} title={submenu.title} preventClose={true} >
                                    {submenu.items ? submenu.items.length > 0 ?
                                        submenu.items.map((itemSubmenu, indexSub) => {
                                            return (
                                                <MenuItem key={itemSubmenu + indexSub} preventClose={false} data={{ subOption: itemSubmenu.title }} onClick={() => { props.eventSubMenu({ submenu: submenu.title, suboptionSeleceted: itemSubmenu.title }) }}>
                                                    {itemSubmenu.title}
                                                </MenuItem>
                                            );
                                        })
                                        : '' : ''}
                                </SubMenu>
                            );
                        })
                            : '' : ''}
                </ContextMenu>
                : '' : ''}
        </div>
    );
}

export default Node