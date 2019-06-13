import React, {useState, useEffect } from 'react';

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
*@param {function}      clickInStatus Event after click in circles 
*@param {string}        status the class to define style in circles
*@param {boolean}       nameNode if the name is equal to the name of the filter it is true
*/
const Node = props => {
const [node, setNode] = useState(props)


    useEffect(() => {
        setNode(props);
    }, [])

 /*     useEffect(() => {
       
    }, [node]) */
 

    useEffect(()=>{
        setNode(props)
    },[props])
    // console.log("Imprimiemdo props--->", props)


    const toggledSelf=()=>{
        console.log(node);
        let nodeAux= {...node};
        nodeAux.toggled=!nodeAux.toggled;
        setNode(nodeAux);
            
    }

    const d = () =>{

    }

    return (

        <div className="global-node">
            <ContextMenuTrigger id={"menuCtx"+node.idkey} onClick={() => { console.log("como que esta medio raro") }}>
                <div className={ node.classNameFilter ? node.classNameFilter : "node-ctn" }>
                    <div className={node.circles ? "label" : "label fat"}
                        onClick = { node.onceClick ? ()=>{node.onceClick(); toggledSelf()}: ()=>{toggledSelf(); console.log("")} }
                        onDoubleClick={(e) => { node.doubleClick ? node.doubleClick() : console.log("") }}
                    >
                        {node.iconClass !== '' ?
                            <div className="iconos">
                                <i className={node.iconClass.className} style={node.iconClass.style}></i>
                            </div>
                            : ''}
                        <span  style={node.labelStyle} >
                            {node.label}

                            {node.circles?
                            
                            
                            <span>
                            {'(' + (node.red + node.green + node.yellow + node.gray ) + ')'}
                            </span>

                        
                            :
                            
                            <span>
                            {node.leafs > 0 ? '(' + node.leafs + ')' : ''}
                        </span>
                            }
                        
                        </span>
                    </div>
                    {node.circles ?
                        <div className="circles">
                            <div className={ node.yellow === 0 || 
                                props.status==2 ||
                                props.status==3 ||
                                props.status==4 ||
                                (!node.nameNode && props.status)  ? 'circle yellow inactive' : 'circle yellow'} onClick={node.yellow > 0 ? ()=> { props.status==1 && node.nameNode ? props.clickInStatus(0,'') : props.clickInStatus(1,'border-icon-warning')} :  console.log() }>{node.yellow.toString().length > 2 ? '99' : node.yellow}
                                {(node.yellow.toString().length > 2) ?
                                    <OverlayTrigger
                                        trigger="hover"
                                        placement="right"
                                        overlay={
                                            <Popover id={"popover-contained-yellow-" + node.yellow}>{node.yellow}</Popover>
                                        }
                                    >
                                        <div className="badge-custom yellow"  >+</div>
                                    </OverlayTrigger>
                                    :
                                    ''
                                }
                            </div>
                            <div className={node.green === 0 ||
                                props.status==1 ||
                                props.status==3 ||
                                props.status==4 ||
                                (!node.nameNode && props.status)  ? 'circle green inactive' : 'circle green'} onClick={node.green>0 ? () => { props.status==2 && node.nameNode ? props.clickInStatus(0,'') : props.clickInStatus(2,'border-icon-work')} : console.log() }>{node.green.toString().length > 2 ? '99' : node.green}
                                {(node.green.toString().length > 2) ?
                                    <OverlayTrigger
                                        trigger="hover"
                                        placement="right"
                                        overlay={
                                            <Popover id={"popover-contained-green-" + node.green}>{node.green}</Popover>
                                        }
                                    >
                                        <div className="badge-custom green" >+</div>
                                    </OverlayTrigger>
                                    :
                                    ''
                                }
                            </div>
                            <div className={node.red === 0 ||
                                props.status==1 ||
                                props.status==2 ||
                                props.status==4 ||
                                (!node.nameNode && props.status) ? 'circle red inactive' : 'circle red'} onClick={ node.red > 0 ? ()=> { props.status==3 && node.nameNode ? props.clickInStatus(0,'') : props.clickInStatus(3,'border-icon-down')} : console.log()}>{node.red.toString().length > 2 ? '99' : node.red}
                                {(node.red.toString().length > 2) ?
                                    <OverlayTrigger
                                        trigger="hover"
                                        placement="right"
                                        overlay={
                                            <Popover id={"popover-contained-red-" + node.red}>{node.red}</Popover>
                                        }
                                    >
                                        <div className="badge-custom red" >+</div>
                                    </OverlayTrigger>
                                    :
                                    ''}
                            </div>
                            <div className={node.gray === 0 ||
                                props.status==1 ||
                                props.status==2 ||
                                props.status==3 ||
                                (!node.nameNode && props.status) ? 'circle gray inactive' : 'circle gray'} onClick={ node.gray > 0 ? () =>  { props.status == 4 && node.nameNode ? props.clickInStatus(0,'') : props.clickInStatus(4,'border-icon-unreachable')} : console.log() }>{node.gray.toString().length > 2 ? '99' : node.gray}
                                {(node.gray.toString().length > 2) ?
                                    <OverlayTrigger
                                        trigger="hover"
                                        placement="right"
                                        overlay={
                                            <Popover id={"popover-contained-gray-" + node.gray}>{node.gray}</Popover>
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
                        node.hasChildren ?
                            <div className="icon-ctn" onClick={(e)=>{e.stopPropagation(); toggledSelf()}}>
                                {node.icon ? !node.toggled ?
                                    <div className="icon-open animate-zoom   "></div> :
                                    <div className="icon-close animate-opacity"></div> : ''}
                            </div>
                            :
                            <div className="icon-ctn">
                            </div>
                    }
                </div>
            </ContextMenuTrigger>
            <div className={node.toggled ? 'child visible-top ' : 'child visible-bottom'}>
                {
                    node.children
                }
            </div>
            {node.menuCtx ? node.menuCtx.length > 0 ?
                <ContextMenu id={'' + node.idkey} onClick={() => { alert("Ayuda") }}>
                    {node.menuCtx ? node.menuCtx.length > 0 ? node.menuCtx.map((option, index) => {
                        return (
                            <MenuItem key={option + index} preventClose={false} data={{ option: option.id }} onClick={() => { node.eventMenu(option) }}>
                                {option.id}
                            </MenuItem>
                        );
                    }) : '' : ''}
                    {
                        node.subMenus ? node.subMenus.length > 0 ? node.subMenus.map((submenu, index) => {
                            return (
                                <SubMenu key={submenu.title + index} title={submenu.title} preventClose={true} >
                                    {submenu.items ? submenu.items.length > 0 ?
                                        submenu.items.map((itemSubmenu, indexSub) => {
                                            return (
                                                <MenuItem key={itemSubmenu + indexSub} preventClose={false} data={{ subOption: itemSubmenu.title }} onClick={() => { node.eventSubMenu({ submenu: submenu.title, suboptionSeleceted: itemSubmenu.title }) }}>
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