import React, { useState, useEffect } from 'react';
import './treeviewSelectable.css';
import NodeSelectable from './nodeSelectable';

/**
 * Treeview is the component where all nodes will be render
 * @constructor
 * @param {array} data Tree with the differents levels 
 * @param {function} reportChanges function to display changes
 */
const TreeViewSelectable = (props) => {
	const [ data, setData ] = useState(props.data);
	const [ makechanges, setChanges ] = useState(false);
	useEffect(
		() => {
			setData(props.data);
		},
		[ props.data ]
	);



useEffect(()=>{


	console.log(props.data)
},[makechanges])
	/**
     * A recursive method to draw the different nodes into the treeView it called by first time after into the 
     * map of the props.data 
     * @param {Node} node Is a node element will be rendered into the treeview
     * @returns {Nodes}  A map of node.children 
     */

    
    
    const CheckAllMark=(node)=>{
        node.checked =true;

		if (node.children) {
			//console.log('children');
			node.children.map((child, index) => {
				return CheckAllMark(child);
			});
		}
		setChanges(!makechanges);

    }

    const UnCheckAllMark=node=>{
        node.checked = false;

		if (node.children) {
		//	console.log('children');
			node.children.map((child, index) => {
				return UnCheckAllMark(child);
			});
		}
		setChanges(!makechanges);
    }
	const drawNodes = (node) => {
		//console.log("NODO->", node);
		return (
			<NodeSelectable
				label={node.name}
				idkey={node.name}
				key={node.name + Math.random()}
				toggled={node.toggled}
				labelStyle={node.labelStyle}
				icon={node.withIcon}
				checked={node.checked}
				toggleCheck={() => {
					if(node.checked){
                        UnCheckAllMark(node); 
                    }else{
                        CheckAllMark(node);
                    }
				}}
				iconClass={node.icon ? node.icon : ''}
				circles={node.withCircles}
				leafs={node.children ? node.children.length : 0}
				yellow={node.yellow ? node.yellow : 0}
				green={node.green ? node.green : 0}
				red={node.red ? node.red : 0}
				gray={node.gray ? node.gray : 0}
				menuCtx={node.menuContext ? node.menuContext.length > 0 ? node.menuContext : [] : []}
				subMenus={node.subMenus ? node.subMenus.length > 0 ? node.subMenus : [] : []}
				eventMenu={(e) => {
					props.clickMenuCtx ? props.clickMenuCtx({ event: e, node: node }) : console.log();
				}}
				eventSubMenu={(e) => {
					props.clickSubMenuCtx ? props.clickSubMenuCtx({ event: e, node: node }) : console.log();
				}}
				onceClick={() => {
					props.onceClick ? props.onceClick(node) : console.log();
				}}
				doubleClick={() => {
					props.doubleClick ? props.doubleClick(node) : console.log();
				}}
				hasChildren={node.children ? node.children.length > 0 ? true : false : false}
				toggleEvent={() => {
					node.toggled = !node.toggled;
					setChanges(!makechanges);
				}}
			>
				{node.children ? node.children.length > 0 ? (
					node.children.map((nodeItem, index) => {
						return (
							<NodeSelectable
								key={nodeItem.name + index}
								label={nodeItem.name}
								idkey={'id-' + nodeItem.name + index}
								toggled={nodeItem.toggled}
								icon={nodeItem.withIcon}
								checked={nodeItem.checked}
								toggleCheck={() => {
                                    if(nodeItem.checked){
                                        UnCheckAllMark(nodeItem); 
                                    }else{
                                        CheckAllMark(nodeItem);
                                    }
								}}
								labelStyle={nodeItem.labelStyle}
								hasChildren={nodeItem.children ? nodeItem.children.length > 0 ? true : false : false}
								leafs={nodeItem.children ? nodeItem.children.length : 0}
								iconClass={nodeItem.icon ? nodeItem.icon : ''}
								circles={nodeItem.withCircles}
								yellow={nodeItem.yellow ? nodeItem.yellow : 0}
								green={nodeItem.green ? nodeItem.green : 0}
								red={nodeItem.red ? nodeItem.red : 0}
								gray={nodeItem.gray ? nodeItem.gray : 0}
								menuCtx={
									nodeItem.menuContext ? nodeItem.menuContext.length > 0 ? (
										nodeItem.menuContext
									) : (
										[]
									) : (
										[]
									)
								}
								subMenus={
									nodeItem.subMenus ? nodeItem.subMenus.length > 0 ? nodeItem.subMenus : [] : []
								}
								eventMenu={(e) => {
									props.clickMenuCtx
										? props.clickMenuCtx({ event: e, node: nodeItem })
										: console.log();
								}}
								eventSubMenu={(e) => {
									props.clickSubMenuCtx
										? props.clickSubMenuCtx({ event: e, node: nodeItem })
										: console.log();
								}}
								onceClick={() => {
									props.onceClick ? props.onceClick(nodeItem) : console.log();
								}}
								doubleClick={() => {
									props.doubleClick ? props.doubleClick(nodeItem) : console.log();
								}}
								toggleEvent={() => {
									nodeItem.toggled = !nodeItem.toggled;
									setChanges(!makechanges);
								}}
							>
								{nodeItem.children ? (
									nodeItem.children.map((leaf, index) => {
										return drawNodes(leaf);
									})
								) : (
									''
								)}
							</NodeSelectable>
						);
					})
				) : (
					''
				) : (
					''
				)}
			</NodeSelectable>
		);
	};
	/**
     * toggleFather close and open a node in the top level 
     * @param {this} item  item that will be close
     * @param {number} index indicates the index for the father item, its necessary to close it. 
     * 
     * @example
     * // will be toggle the item element with position 1 in the data array
     * toggleFather(item, 1);
     */
	const toggleFather = (item, index) => {
		let algo = [ ...data ];
		algo[index].toggled = !algo[index].toggled;
		setData(algo);
	};
	let i = 0;
	return (
		<div className="global-ctn">
			{data.map((item, index) => {
				return (
					<NodeSelectable
						label={item.name}
						key={item.name + index}
						idkey={item.name + index}
						toggled={item.toggled}
						circles={item.withCircles}
						red={item.red}
						checked={item.checked}
						toggleCheck={() => {
                            if(item.checked){
                                UnCheckAllMark(item); 
                                    }else{
                                        CheckAllMark(item);
                                    }
						}}
						iconClass={item.icon ? item.icon : ''}
						yellow={item.yellow}
						green={item.green}
						gray={item.gray}
						onceClick={() => {
							props.onceClick ? props.onceClick(item) : console.log();
						}}
						doubleClick={() => {
							props.doubleClick ? props.doubleClick(item) : console.log();
						}}
						hasChildren={item.children ? item.children.length > 0 ? true : false : false}
						leafs={item.children ? item.children.length : 0}
						labelStyle={item.labelStyle}
						menuCtx={item.menuContext ? item.menuContext.length > 0 ? item.menuContext : [] : []}
						subMenus={item.subMenus ? item.subMenus.length > 0 ? item.subMenus : [] : []}
						eventMenu={(e) => {
							props.clickMenuCtx ? props.clickMenuCtx({ event: e, node: item }) : console.log();
						}}
						eventSubMenu={(e) => {
							props.clickSubMenuCtx ? props.clickSubMenuCtx({ event: e, node: item }) : console.log();
						}}
						rightEvent={() => {
							console.log('Right Event');
						}}
						toggleEvent={() => {
							toggleFather(item, index);
						}}
						icon={item.withIcon}
					>
						{item.children.map((newitem, index) => {
							return <div key={newitem.name + index}>{drawNodes(newitem)}</div>;
						})}
					</NodeSelectable>
				);
			})}
		</div>
	);
};

export default TreeViewSelectable;
