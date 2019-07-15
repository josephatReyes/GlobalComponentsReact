import React, { useState, useEffect } from 'react';

import './App.css';

import Button from 'react-bootstrap/Button';
import HeaderContainer from './headerContainer';
import TreeView from './treeView/';
import Form from 'react-bootstrap/Form';
import UserController from './user/user';
import DataTable from './dataTable';
import FilterComponent from './filters/filters';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Dropdown from 'react-bootstrap/Dropdown';
import TabController from "./TabController/TabController";

import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import TreeViewSelectable from './treeViewSelectable';
import { DATA_TREE_SELECTABLE } from './dataTreeSelectable';
import ModalAlarm from './modal-alarms';

/* 
TODO: CAMBIOS DE VIRTUALIZACION
*/
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
/**
 * @file Global Components.
 * @author Rignet Developers team
 * @see  <img width="120px" src="https://www.rig.net/wp-content/uploads/2019/01/cropped-Rignet_Logo2x.png"
 */

const DATA_TABS=[{
    title: "Tree1",
    iconName:"fas fa-globe-africa",
    content:
	<AutoSizer>
    {({ height, width }) => (
      <List
        className="List"
        height={height}
        itemCount={1}
        itemSize={35}
        width={width}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
    , icon: "icon-map", closeable: false
  },
  {
    title: "Tree 2",
    iconName:"fas fa-globe-africa",
    content:
	<AutoSizer>
    {({ height, width }) => (
      <List
        className="List"
        height={height}
        itemCount={1}
        itemSize={35}
        width={width}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
    , icon: "icon-map", closeable: false
  },

  {
    title: "Tree3",
    iconName:"fas fa-globe-africa",
    content:
	<AutoSizer>
    {({ height, width }) => (
      <List
        className="List"
        height={height}
        itemCount={1}
        itemSize={35}
        width={width}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
    , icon: "icon-map", closeable: false
  },
  ]

const DrawHeader = (props) => {
	const [ firstTime, SetFirstime ] = useState(true);
	const [ text, setText ] = useState('');

	useEffect(
		() => {
			if (text === '' && !firstTime) {
				props.doSearch(text);
			}
		},
		[ text ]
	);
	const handleText = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		if (name === 'searchText') {
			SetFirstime(false);
			setText(value);
		}
	};

	const searchInData = (e) => {
		console.log(e);

		if (e.charCode == 13) {
			props.doSearch(text);
		}
		if (e.keyCode == 13) {
			props.doSearch(text);
		}
	};
	return (
		<div className="header">
			<HeaderContainer />

			<Form.Control
				type="text"
				placeholder="search"
				name="searchText"
				value={text}
				onChange={(e) => {
					handleText(e);
				}}
				onKeyPress={(e) => {
					searchInData(e);
				}}
			/>

			<UserController />
		</div>
	);
};


const Row = ({ index, style }) => (
	<div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
			<TreeView
						data={DATA_TREE}
						onceClick={(res) => {
							console.log('Clciked', res);
						}}
						doubleClick={(res) => {
							console.log('Double clicked->', res);
						}}
						rightEvent={(res) => {
							console.log('Right Click', res);
						}}
					
					/>
	</div>
  );
  const DATA_TREE = [
	{
		name: 'RigNet',
		type: 'global',
		toggled: true,
		withIcon: true,
		withCircles: true,
		red: 64,
		green: 239,
		yellow: 17,
		gray: 118,
		id: 1,
		labelStyle: {
			color: '#EF7622',
			fontWeight: '700',
			fontSize: '14px'
		},
		children: [
			{
				name: 'Baker',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030750f99d2180cd5d97',
				withCircles: true,
				red: 22,
				green: 31,
				yellow: 0,
				gray: 17,
				children: [
					{
						name: 'Baker entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: true,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d6c',
						withCircles: false,
						children: [
							{
								name: 'Baker-SC203.028G-Maloob-A',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: true,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a877',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a878',
										type: 'device',
										name: 'iDirect-X3-177655',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'BHI.Baker-Mex-FD204.062G-COSL-2',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: true,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a87d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a87e',
										type: 'device',
										name: 'iDirect-X5-78568',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'BHI.Baker-MEX-FD204.094G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: true,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a87f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a880',
										type: 'device',
										name: 'iDirect-X5-130567',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'BHI.Baker-MEX-FD204.092G-ZAAP-ECO',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: true,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a881',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a882',
										type: 'device',
										name: 'iDirect-X5-61191',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'BHI.Baker-MEX-FD204.093G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a883',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a884',
										type: 'device',
										name: 'iDirect-X5-182017',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'BHI.Baker-MEX-FD204.095G-WEST-DEFENDER',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a885',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a886',
										type: 'device',
										name: 'iDirect-X5-101',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Blue-Tarpon-TEST',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a94d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a94e',
										type: 'device',
										name: 'iDirect-X5-91206',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.023G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a94f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a950',
										type: 'device',
										name: 'iDirect-X5-156720',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.027G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a951',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a952',
										type: 'device',
										name: 'iDirect-X5-159976',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB204.058G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a953',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a954',
										type: 'device',
										name: 'iDirect-X5-127508',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB204.105G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a955',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a956',
										type: 'device',
										name: 'iDirect-X5-169593',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB204.219G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a957',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a958',
										type: 'device',
										name: 'iDirect-X5-136994',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SCADA-CALI204.009G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a959',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a95a',
										type: 'device',
										name: 'iDirect-X3-143553',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.088G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a95b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a95c',
										type: 'device',
										name: 'iDirect-X5-169555',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.043G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a95d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a95e',
										type: 'device',
										name: 'iDirect-X5-157074',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.221G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a95f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a960',
										type: 'device',
										name: 'iDirect-X5-157344',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Blue-Dolphin-VS204',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a961',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a962',
										type: 'device',
										name: 'iDirect-X5-137916',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Blue-Tarpon-VS204',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a963',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a964',
										type: 'device',
										name: 'iDirect-X5-168169',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.003G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a965',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a966',
										type: 'device',
										name: 'iDirect-X5-162644',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.005G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a967',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a968',
										type: 'device',
										name: 'iDirect-X5-156939',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.008G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a96b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a96c',
										type: 'device',
										name: 'iDirect-X5-159892',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.009G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a96d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a96e',
										type: 'device',
										name: 'iDirect-X5-157778',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.010G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a96f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a970',
										type: 'device',
										name: 'iDirect-X5-156395',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.012G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a971',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a972',
										type: 'device',
										name: 'iDirect-X5-156424',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.013G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a973',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a974',
										type: 'device',
										name: 'iDirect-X5-156364',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.014G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a975',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a976',
										type: 'device',
										name: 'iDirect-X5-157900',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.015G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a977',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a978',
										type: 'device',
										name: 'iDirect-X5-156254',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.016G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a979',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a97a',
										type: 'device',
										name: 'iDirect-X5-161246',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.017G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a97b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a97c',
										type: 'device',
										name: 'iDirect-X5-78602',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.018G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a97d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a97e',
										type: 'device',
										name: 'iDirect-X5-161838',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.019G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a97f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a980',
										type: 'device',
										name: 'iDirect-X5-156560',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.020G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a981',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a982',
										type: 'device',
										name: 'iDirect-X5-158043',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.024G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a985',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a986',
										type: 'device',
										name: 'iDirect-X5-54523',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.025G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a987',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a988',
										type: 'device',
										name: 'iDirect-X5-161597',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB203.026G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a989',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a98a',
										type: 'device',
										name: 'iDirect-X5-160012',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB204.054G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a98b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a98c',
										type: 'device',
										name: 'iDirect-X5-138111',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB204.063G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a98d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a98e',
										type: 'device',
										name: 'iDirect-X5-127818',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB204.102G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a98f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a990',
										type: 'device',
										name: 'iDirect-X5-130036',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB204.198G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a993',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a994',
										type: 'device',
										name: 'iDirect-X5-138132',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB204.217G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a997',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a998',
										type: 'device',
										name: 'iDirect-X5-161940',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-SB204.218G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a999',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a99a',
										type: 'device',
										name: 'iDirect-X5-128916',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.086G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a99f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9a0',
										type: 'device',
										name: 'iDirect-X5-129791',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.087G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9a1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9a2',
										type: 'device',
										name: 'iDirect-X5-161843',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.090G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9a3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9a4',
										type: 'device',
										name: 'iDirect-X5-90873',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.091G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9a5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9a6',
										type: 'device',
										name: 'iDirect-X5-141312',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.122G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9a7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9a8',
										type: 'device',
										name: 'iDirect-X5-130142',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.123G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9a9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9aa',
										type: 'device',
										name: 'iDirect-X5-127458',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.124G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9ab',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9ac',
										type: 'device',
										name: 'iDirect-X5-90931',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.247G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9ad',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9ae',
										type: 'device',
										name: 'iDirect-X5-137891',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.248G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9af',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9b0',
										type: 'device',
										name: 'iDirect-X5-101404',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.249G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9b1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9b2',
										type: 'device',
										name: 'iDirect-X5-54446',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.250G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9b3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9b4',
										type: 'device',
										name: 'iDirect-X5-158065',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.251G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9b5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9b6',
										type: 'device',
										name: 'iDirect-X5-160168',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID-SK204.252G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9b7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9b8',
										type: 'device',
										name: 'iDirect-X5-128120',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.013G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9b9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9ba',
										type: 'device',
										name: 'iDirect-X5-156452',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.041G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9bd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9be',
										type: 'device',
										name: 'iDirect-X5-136790',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.042G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9bf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9c0',
										type: 'device',
										name: 'iDirect-X5-157139',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.046G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9c3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9c4',
										type: 'device',
										name: 'iDirect-X5-127710',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.083G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9c5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9c6',
										type: 'device',
										name: 'iDirect-X5-78744',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.099G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9c7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9c8',
										type: 'device',
										name: 'iDirect-X5-134384',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.110G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9c9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9ca',
										type: 'device',
										name: 'iDirect-X5-133433',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.114G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9cb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9cc',
										type: 'device',
										name: 'iDirect-X5-63043',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.149G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9d1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9d2',
										type: 'device',
										name: 'iDirect-X5-137300',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.151G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9d3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9d4',
										type: 'device',
										name: 'iDirect-X5-128259',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.181G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9d5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9d6',
										type: 'device',
										name: 'iDirect-X5-137573',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.212G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9d9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9da',
										type: 'device',
										name: 'iDirect-X5-107682',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.225G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9db',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9dc',
										type: 'device',
										name: 'iDirect-X5-96112',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.231G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9dd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9de',
										type: 'device',
										name: 'iDirect-X5-128549',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.238G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9df',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9e0',
										type: 'device',
										name: 'iDirect-X5-65875',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Truck-WG204.239G',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9e1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9e2',
										type: 'device',
										name: 'iDirect-X5-134442',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Cosl',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030750f99d2180cd5dc9',
				withCircles: true,
				red: 0,
				green: 4,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Cosl entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d6d',
						withCircles: false,
						children: [
							{
								name: 'COSL-3',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a889',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a88a',
										type: 'device',
										name: 'iDirect-X5-131413',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'COSL-2',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a88b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a88c',
										type: 'device',
										name: 'iDirect-X7-128281',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'COSL-4',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a88d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a88e',
										type: 'device',
										name: 'iDirect-X5-29154',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'COSL-1',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a88f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a890',
										type: 'device',
										name: 'iDirect-X7-29090',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'COSL-7',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a891',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a892',
										type: 'device',
										name: 'iDirect-X7-21102',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Grupo R',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030750f99d2180cd5dff',
				withCircles: true,
				red: 0,
				green: 2,
				yellow: 2,
				gray: 1,
				children: [
					{
						name: 'Grupo R entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d6e',
						withCircles: false,
						children: [
							{
								name: 'Cantarel-1',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a895',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a896',
										type: 'device',
										name: 'iDirect-X5-163182',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Cantarel-2',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a897',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a898',
										type: 'device',
										name: 'iDirect-X5-133670',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'MurallaIV',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a899',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a89a',
										type: 'device',
										name: 'iDirect-X7-28982',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Bicentenario',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a89b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a89c',
										type: 'device',
										name: 'iDirect-X7-29187',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Centenario',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a89d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a89e',
										type: 'device',
										name: 'iDirect-X7-29129',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Halliburton',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030750f99d2180cd5e23',
				withCircles: true,
				red: 3,
				green: 14,
				yellow: 0,
				gray: 10,
				children: [
					{
						name: 'Halliburton entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d6f',
						withCircles: false,
						children: [
							{
								name: 'Stim-Star-3',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a89f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a8a0',
										type: 'device',
										name: 'iDirect-X5-91283',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Ensign774',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aab9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaba',
										type: 'device',
										name: 'iDirect-X5-68422',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'hal-edrill2',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aabd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aabe',
										type: 'device',
										name: 'iDirect-X5-171280',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HP253',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aabf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aac0',
										type: 'device',
										name: 'iDirect-X5-78585',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HP453',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aac1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aac2',
										type: 'device',
										name: 'iDirect-X5-73237',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HP478',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aac3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aac4',
										type: 'device',
										name: 'iDirect-X5-78486',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HP500',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aac5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aac6',
										type: 'device',
										name: 'iDirect-X5-127559',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HP501',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aac7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aac8',
										type: 'device',
										name: 'iDirect-X5-78558',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HP613',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aac9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaca',
										type: 'device',
										name: 'iDirect-X5-78571',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'NaborsX20',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aad1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aad2',
										type: 'device',
										name: 'iDirect-X5-78765',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Patterson-251',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aad3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aad4',
										type: 'device',
										name: 'iDirect-X5-72999',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Patterson247',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aad5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aad6',
										type: 'device',
										name: 'iDirect-X5-73146',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RNLHAL003',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aadb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aadc',
										type: 'device',
										name: 'iDirect-X5-75295',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RNLHAL017',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aadf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aae0',
										type: 'device',
										name: 'iDirect-X5-68240',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RNLHAL019',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aae1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aae2',
										type: 'device',
										name: 'iDirect-X5-68456',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RNLHAL022',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aae3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aae4',
										type: 'device',
										name: 'iDirect-X5-155212',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RNLHAL023',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aae5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aae6',
										type: 'device',
										name: 'iDirect-X5-154065',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RNLHAL024',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aae7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aae8',
										type: 'device',
										name: 'iDirect-X5-153775',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RNLHAL032',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aae9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaea',
										type: 'device',
										name: 'iDirect-X5-156580',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RNLHAL033',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaeb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaec',
										type: 'device',
										name: 'iDirect-X5-164068',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RNLHAL036',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaed',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaee',
										type: 'device',
										name: 'iDirect-X5-161337',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RNLHAL037',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaef',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaf0',
										type: 'device',
										name: 'iDirect-X5-157199',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RNLHAL038',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaf1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaf2',
										type: 'device',
										name: 'iDirect-X5-167017',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RNLHAL045',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaf3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaf4',
										type: 'device',
										name: 'iDirect-X5-163750',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'StewartPad',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaf5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaf6',
										type: 'device',
										name: 'iDirect-X5-55716',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Trinidad129',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaf7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaf8',
										type: 'device',
										name: 'iDirect-X5-78279',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Cactus161',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaf9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aafa',
										type: 'device',
										name: 'iDirect-X5-162588',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'McDermott',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030750f99d2180cd5e2a',
				withCircles: true,
				red: 0,
				green: 3,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'McDermott entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d70',
						withCircles: false,
						children: [
							{
								name: 'Abkantun',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a8a1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a8a2',
										type: 'device',
										name: 'iDirect-X5-162127',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Abkantun-2',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a8a3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a8a4',
										type: 'device',
										name: 'iDirect-X7-37146',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'MCD-LV108',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab2f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab30',
										type: 'device',
										name: 'iDirect-X7-34845',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'MexMar',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030750f99d2180cd5e38',
				withCircles: true,
				red: 0,
				green: 7,
				yellow: 4,
				gray: 1,
				children: [
					{
						name: 'MexMar entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d71',
						withCircles: false,
						children: [
							{
								name: 'Cabral',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a8a7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a8a8',
										type: 'device',
										name: 'iDirect-X5-78406',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Caspian',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a8a9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a8aa',
										type: 'device',
										name: 'iDirect-X5-126297',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'LisaF',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a8ab',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a8ac',
										type: 'device',
										name: 'iDirect-X5-90871',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Warrior',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62a9c70f30c1758a8ad',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62a9c70f30c1758a8ae',
										type: 'device',
										name: 'iDirect-X5-107827',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'LindaF',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8af',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8b0',
										type: 'device',
										name: 'iDirect-X5-68775',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Seacor-Maya',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8b1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8b2',
										type: 'device',
										name: 'iDirect-X5-91151',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Olmeca',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8b3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8b4',
										type: 'device',
										name: 'iDirect-X5-137583',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Columbus',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8b5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8b6',
										type: 'device',
										name: 'iDirect-X5-162302',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Seacor-Viking',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8b7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8b8',
										type: 'device',
										name: 'iDirect-X5-137072',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Azteca',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8b9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8ba',
										type: 'device',
										name: 'iDirect-X5-126144',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Bernie-McCall',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8bb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8bc',
										type: 'device',
										name: 'iDirect-X5-91533',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Tolteca',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8bd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8be',
										type: 'device',
										name: 'iDirect-X5-132166',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Natasa',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030850f99d2180cd5e94',
				withCircles: true,
				red: 0,
				green: 4,
				yellow: 1,
				gray: 1,
				children: [
					{
						name: 'Natasa entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d72',
						withCircles: false,
						children: [
							{
								name: 'Sabalo',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8bf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8c0',
										type: 'device',
										name: 'iDirect-X5-130645',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Artabaze',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8c1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8c2',
										type: 'device',
										name: 'iDirect-X5-126108',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Alienor',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8c3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8c4',
										type: 'device',
										name: 'iDirect-X5-75020',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Xicalango',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8c5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8c6',
										type: 'device',
										name: 'iDirect-X5-129938',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Alvarado',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8cd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8ce',
										type: 'device',
										name: 'iDirect-X5-133665',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Punta-Delgada',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8d1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8d2',
										type: 'device',
										name: 'iDirect-X5-126259',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Oro Negro',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030850f99d2180cd5ee8',
				withCircles: true,
				red: 0,
				green: 4,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Oro Negro entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d73',
						withCircles: false,
						children: [
							{
								name: 'Fortius',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8d5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8d6',
										type: 'device',
										name: 'iDirect-X7-21306',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Impetus',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8d7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8d8',
										type: 'device',
										name: 'iDirect-X5-126202',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Laurus',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8d9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8da',
										type: 'device',
										name: 'iDirect-X5-130872',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Decus',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8db',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8dc',
										type: 'device',
										name: 'iDirect-X5-73181',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: '3SServices',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030850f99d2180cd5f04',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: '3SServices entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d74',
						withCircles: false,
						children: [
							{
								name: 'CimarexVacaDraw',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8dd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8de',
										type: 'device',
										name: 'iDirect-X5-68218',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'ZIA19',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8df',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8e0',
										type: 'device',
										name: 'iDirect-X5-78417',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'AcadianContractors',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030850f99d2180cd5f19',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'AcadianContractors entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d76',
						withCircles: false,
						children: [
							{
								name: 'EnterpriseSandDunes',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8e3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8e4',
										type: 'device',
										name: 'iDirect-X5-160081',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'AlamoPressure',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030850f99d2180cd5f20',
				withCircles: true,
				red: 1,
				green: 0,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'AlamoPressure entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d77',
						withCircles: false,
						children: [
							{
								name: 'FarmarBC-PU-S695HD',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8e5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8e6',
										type: 'device',
										name: 'iDirect-X5-157255',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Anadarko',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030850f99d2180cd5f27',
				withCircles: true,
				red: 0,
				green: 2,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Anadarko entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d78',
						withCircles: false,
						children: [
							{
								name: 'HorseshoeDrawCGF',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8e7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8e8',
										type: 'device',
										name: 'iDirect-X5-156488',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SilverTipSWD',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8e9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8ea',
										type: 'device',
										name: 'iDirect-X5-73395',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Offshore',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87366ee16030ed8f606',
				withCircles: true,
				red: 1,
				green: 3,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Offshore entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616da7',
						withCircles: false,
						children: [
							{
								name: 'MVKirkChouest',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8eb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8ec',
										type: 'device',
										name: 'iDirect-X5-91076',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Offshore-Rig',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8ed',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8ee',
										type: 'device',
										name: 'iDirect-X5-128178',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JIB-22',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab49',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab4a',
										type: 'device',
										name: 'iDirect-X5-101423',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SKID01',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab51',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab52',
										type: 'device',
										name: 'iDirect-X5-65864',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'UNIT143',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab59',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab5a',
										type: 'device',
										name: 'iDirect-X5-91433',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'AutoCom',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030850f99d2180cd5f43',
				withCircles: true,
				red: 7,
				green: 25,
				yellow: 4,
				gray: 2,
				children: [
					{
						name: 'AutoCom entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d7a',
						withCircles: false,
						children: [
							{
								name: '74-Ranch',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8ef',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8f0',
										type: 'device',
										name: 'iDirect-X5-68765',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorp4LeagueBay',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8f1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8f2',
										type: 'device',
										name: 'iDirect-X5-78231',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorp74Ranch',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8f3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8f4',
										type: 'device',
										name: 'iDirect-X5-111113',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpAsherton',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8f5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8f6',
										type: 'device',
										name: 'iDirect-X5-137882',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpBayMarchand',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8f7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8f8',
										type: 'device',
										name: 'iDirect-X5-209449',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpCaillouIsland',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8f9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8fa',
										type: 'device',
										name: 'iDirect-X5-64653',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpCanBooster-2',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8fb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8fc',
										type: 'device',
										name: 'iDirect-X5-68349',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpCloverlyLoop',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8fd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a8fe',
										type: 'device',
										name: 'iDirect-X5-90853',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpDuckLake',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a8ff',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a900',
										type: 'device',
										name: 'iDirect-X5-73419',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpEI-120',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a901',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a902',
										type: 'device',
										name: 'iDirect-X5-190800',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpEI.11H',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a903',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a904',
										type: 'device',
										name: 'iDirect-X5-190886',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpEOGHoff',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a905',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a906',
										type: 'device',
										name: 'iDirect-X5-138016',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpFallsCity',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a907',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a908',
										type: 'device',
										name: 'iDirect-X5-76063',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpGoldenMeadow',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a909',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a90a',
										type: 'device',
										name: 'iDirect-X5-78341',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpGrandIsle',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a90b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a90c',
										type: 'device',
										name: 'iDirect-X5-209016',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpGrandTerre',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a90d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a90e',
										type: 'device',
										name: 'iDirect-X5-209177',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpHoumaMeter',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a90f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62b9c70f30c1758a910',
										type: 'device',
										name: 'iDirect-X5-209425',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpKarnesCity',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62b9c70f30c1758a911',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a912',
										type: 'device',
										name: 'iDirect-X5-68732',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpLafitte',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a915',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a916',
										type: 'device',
										name: 'iDirect-X5-84416',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpLakeArthur',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a917',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a918',
										type: 'device',
										name: 'iDirect-X5-68773',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpLakeBarre',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a919',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a91a',
										type: 'device',
										name: 'iDirect-X5-76241',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpLakeChicot',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a91b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a91c',
										type: 'device',
										name: 'iDirect-X5-64695',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpLakeSands',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a91d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a91e',
										type: 'device',
										name: 'iDirect-X5-78570',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpLakeWashington',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a91f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a920',
										type: 'device',
										name: 'iDirect-X5-90911',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpLiretteTerminal',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a921',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a922',
										type: 'device',
										name: 'iDirect-X5-157913',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpMartinTerminal',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a923',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a924',
										type: 'device',
										name: 'iDirect-X5-137930',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpOstricaStation',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a925',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a926',
										type: 'device',
										name: 'iDirect-X5-209136',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpPearsall',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a927',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a928',
										type: 'device',
										name: 'iDirect-X5-78366',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpPecanIsland',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a929',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a92a',
										type: 'device',
										name: 'iDirect-X5-78402',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpStCharles',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a92f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a930',
										type: 'device',
										name: 'iDirect-X5-97871',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpStonegate',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a931',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a932',
										type: 'device',
										name: 'iDirect-X5-90957',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpStoreyRanch',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a933',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a934',
										type: 'device',
										name: 'iDirect-X5-55626',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpTomHanks',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a937',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a938',
										type: 'device',
										name: 'iDirect-X5-153689',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HilCorpVR38',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a939',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a93a',
										type: 'device',
										name: 'iDirect-X5-168231',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'LAF1HilCorp-Test',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a93b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a93c',
										type: 'device',
										name: 'iDirect-X5-68703',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RCHarvest',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a93d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a93e',
										type: 'device',
										name: 'iDirect-X5-78407',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'LBApollo',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a943',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a944',
										type: 'device',
										name: 'iDirect-X5-68471',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'MV-Irish',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a945',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a946',
										type: 'device',
										name: 'iDirect-X5-138091',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'BEPCO',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030950f99d2180cd605b',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'BEPCO entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d7c',
						withCircles: false,
						children: [
							{
								name: 'RVTrailler',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62c9c70f30c1758a94b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62c9c70f30c1758a94c',
										type: 'device',
										name: 'iDirect-X5-163747',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Ensco',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10032d6325a221c06d4ff9',
				withCircles: true,
				red: 1,
				green: 21,
				yellow: 2,
				gray: 5,
				children: [
					{
						name: 'Ensco entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d7d',
						withCircles: false,
						children: [
							{
								name: 'E106',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9e5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9e6',
										type: 'device',
										name: 'iDirect-X7-38733',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'E8504',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9e9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9ea',
										type: 'device',
										name: 'iDirect-X7-38840',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'en102',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9eb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9ec',
										type: 'device',
										name: 'iDirect-X7-38762',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EN107',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9ed',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9ee',
										type: 'device',
										name: 'iDirect-X7-35325',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EN123',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9ef',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9f0',
										type: 'device',
										name: 'iDirect-X7-57786',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EN5006',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9f3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9f4',
										type: 'device',
										name: 'iDirect-X7-34812',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EN67',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9f5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9f6',
										type: 'device',
										name: 'iDirect-X7-35525',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'en68',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9f9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9fa',
										type: 'device',
										name: 'iDirect-X7-38827',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'en75',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9fb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9fc',
										type: 'device',
										name: 'iDirect-X7-39095',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'en8503',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9fd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758a9fe',
										type: 'device',
										name: 'iDirect-X7-38712',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'en8505',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758a9ff',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa00',
										type: 'device',
										name: 'iDirect-X7-38860',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'en87',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa01',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa02',
										type: 'device',
										name: 'iDirect-X7-38904',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'ENDPS101',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa03',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa04',
										type: 'device',
										name: 'iDirect-X7-57854',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'ENMS101',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa07',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa08',
										type: 'device',
										name: 'iDirect-X7-57884',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Ensco100',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa0b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa0c',
										type: 'device',
										name: 'iDirect-X7-39301',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Ensco101',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa0d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa0e',
										type: 'device',
										name: 'iDirect-X7-38750',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Ensco109',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa0f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa10',
										type: 'device',
										name: 'iDirect-X7-39057',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Ensco120',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa11',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa12',
										type: 'device',
										name: 'iDirect-X7-38727',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Ensco121',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa13',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa14',
										type: 'device',
										name: 'iDirect-X7-39011',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Ensco122',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa15',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa16',
										type: 'device',
										name: 'iDirect-X7-38753',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Ensco5004',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa17',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa18',
										type: 'device',
										name: 'iDirect-X7-11913',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Ensco6002',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa1b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa1c',
										type: 'device',
										name: 'iDirect-X7-38781',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Ensco72',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa1f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa20',
										type: 'device',
										name: 'iDirect-X7-38935',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Ensco92',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa23',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa24',
										type: 'device',
										name: 'iDirect-X7-57481',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EnscoDS10',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa25',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa26',
										type: 'device',
										name: 'iDirect-X7-38857',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EnscoDS4',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa27',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa28',
										type: 'device',
										name: 'iDirect-X7-39425',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EnscoDS5',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa29',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa2a',
										type: 'device',
										name: 'iDirect-X7-38794',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EnscoDS7',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa2d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa2e',
										type: 'device',
										name: 'iDirect-X7-39153',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EnscoDS8',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa2f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa30',
										type: 'device',
										name: 'iDirect-X7-38806',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Alcortech',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c86f66ee16030ed8f167',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Alcortech entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d7e',
						withCircles: false,
						children: [
							{
								name: 'alcortech',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa35',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa36',
										type: 'device',
										name: 'iDirect-X7-62230',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'AllCoast',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c86f66ee16030ed8f170',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'AllCoast entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d7f',
						withCircles: false,
						children: [
							{
								name: 'GreatWhite',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa37',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa38',
										type: 'device',
										name: 'iDirect-X5-137995',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'AME',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c86f66ee16030ed8f178',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'AME entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d80',
						withCircles: false,
						children: [
							{
								name: 'VK817PRO',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa39',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa3a',
										type: 'device',
										name: 'iDirect-X5-162276',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Apache',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c10030850f99d2180cd5f34',
				withCircles: true,
				red: 0,
				green: 2,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Apache entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d79',
						withCircles: false,
						children: [
							{
								name: 'RoundTopSite',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa3b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa3c',
										type: 'device',
										name: 'iDirect-X5-68438',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'TJGood',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa3d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa3e',
										type: 'device',
										name: 'iDirect-X5-64418',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'BGP',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87066ee16030ed8f27f',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'BGP entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d81',
						withCircles: false,
						children: [
							{
								name: 'DFKT2',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa3f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa40',
										type: 'device',
										name: 'iDirect-X7-36350',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'BHP',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87066ee16030ed8f287',
				withCircles: true,
				red: 1,
				green: 3,
				yellow: 0,
				gray: 4,
				children: [
					{
						name: 'BHP entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d82',
						withCircles: false,
						children: [
							{
								name: 'DNC-0004',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa41',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa42',
										type: 'device',
										name: 'iDirect-X5-73491',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EmergencyTrailer',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa45',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa46',
										type: 'device',
										name: 'iDirect-X5-73427',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HP501',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa47',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa48',
										type: 'device',
										name: 'iDirect-X5-112393',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DNC0008',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa49',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa4a',
										type: 'device',
										name: 'iDirect-X5-157043',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HP503',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa4b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa4c',
										type: 'device',
										name: 'iDirect-X5-138042',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HP603',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa4f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa50',
										type: 'device',
										name: 'iDirect-X5-91316',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'ICD212',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa51',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa52',
										type: 'device',
										name: 'iDirect-X5-137484',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'TestPackage',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa53',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa54',
										type: 'device',
										name: 'iDirect-X5-101604',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Bisso',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87066ee16030ed8f2c4',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Bisso entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d83',
						withCircles: false,
						children: [
							{
								name: 'LTE-VsatFailover',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa55',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa56',
										type: 'device',
										name: 'iDirect-X5-129883',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'BordelonMarine',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87066ee16030ed8f2cb',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'BordelonMarine entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d84',
						withCircles: false,
						children: [
							{
								name: 'BrandonBordelon',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa57',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa58',
										type: 'device',
										name: 'iDirect-X5-125628',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Borr',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87066ee16030ed8f2d3',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Borr entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d85',
						withCircles: false,
						children: [
							{
								name: 'Gerd',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa59',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa5a',
										type: 'device',
										name: 'iDirect-X7-39973',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Natt',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62d9c70f30c1758aa5d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62d9c70f30c1758aa5e',
										type: 'device',
										name: 'iDirect-X7-58996',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Canyon',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f303',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Canyon entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d88',
						withCircles: false,
						children: [
							{
								name: 'BrandonBordelon',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa67',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa68',
										type: 'device',
										name: 'iDirect-X5-191584',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Cochon',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f313',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Cochon entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d8a',
						withCircles: false,
						children: [
							{
								name: 'KK-Shallow-Draft',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa6b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa6c',
										type: 'device',
										name: 'iDirect-X5-136519',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'ConocoPhillips',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f31b',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 1,
				gray: 0,
				children: [
					{
						name: 'ConocoPhillips entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d8b',
						withCircles: false,
						children: [
							{
								name: 'Houma',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa6d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa6e',
										type: 'device',
										name: 'iDirect-X5-73169',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Danos',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f322',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Danos entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d8c',
						withCircles: false,
						children: [
							{
								name: 'Laydown',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa6f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa70',
										type: 'device',
										name: 'iDirect-X5-179544',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Devon',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f329',
				withCircles: true,
				red: 0,
				green: 3,
				yellow: 0,
				gray: 10,
				children: [
					{
						name: 'Devon entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d8d',
						withCircles: false,
						children: [
							{
								name: 'Cactus108',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa71',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa72',
										type: 'device',
										name: 'iDirect-X5-84425',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Cactus126',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa73',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa74',
										type: 'device',
										name: 'iDirect-X5-78706',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Cactus167',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa75',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa76',
										type: 'device',
										name: 'iDirect-X5-59898',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Cactus168',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa77',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa78',
										type: 'device',
										name: 'iDirect-X5-59716',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Completion-Canrig',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa79',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa7a',
										type: 'device',
										name: 'iDirect-X5-78660',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HP466',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa7b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa7c',
										type: 'device',
										name: 'iDirect-X5-172176',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HP540',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa7d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa7e',
										type: 'device',
										name: 'iDirect-X5-68371',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'NaborsX04',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa7f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa80',
										type: 'device',
										name: 'iDirect-X5-78742',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'NaborsX05',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa81',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa82',
										type: 'device',
										name: 'iDirect-X5-76025',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'NaborsX15',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa83',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa84',
										type: 'device',
										name: 'iDirect-X5-72931',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'NaborsX20',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa85',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa86',
										type: 'device',
										name: 'iDirect-X5-158157',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Patterson771-2',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa87',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa88',
										type: 'device',
										name: 'iDirect-X5-76070',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'TombRaider-1-12-FED-234H',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa89',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa8a',
										type: 'device',
										name: 'iDirect-X5-73004',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'DOF',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f380',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 1,
				gray: 0,
				children: [
					{
						name: 'DOF entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d8f',
						withCircles: false,
						children: [
							{
								name: 'HarveyDeepSea',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa8d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa8e',
										type: 'device',
										name: 'iDirect-X7-52510',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'E21',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f388',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'E21 entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d90',
						withCircles: false,
						children: [
							{
								name: 'BayouCarlin',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa8f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa90',
										type: 'device',
										name: 'iDirect-X5-78455',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'EEV',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f38f',
				withCircles: true,
				red: 0,
				green: 2,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'EEV entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d91',
						withCircles: false,
						children: [
							{
								name: 'Brutus-GC-158',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa91',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa92',
										type: 'device',
										name: 'iDirect-X5-131034',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'MC194',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa93',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa94',
										type: 'device',
										name: 'iDirect-X5-75266',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Encana',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f39d',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 2,
				children: [
					{
						name: 'Encana entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d92',
						withCircles: false,
						children: [
							{
								name: 'HP266',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa95',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa96',
										type: 'device',
										name: 'iDirect-X5-56124',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Patterson229',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa97',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa98',
										type: 'device',
										name: 'iDirect-X5-137396',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Patterson326',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa99',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa9a',
										type: 'device',
										name: 'iDirect-X5-78589',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'ENI',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f3b0',
				withCircles: true,
				red: 0,
				green: 4,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'ENI entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d93',
						withCircles: false,
						children: [
							{
								name: 'EW-921-Morpeth',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa9b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa9c',
										type: 'device',
										name: 'iDirect-X5-137574',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'GC-254',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa9d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aa9e',
										type: 'device',
										name: 'iDirect-X5-137905',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'MC-365-Corral',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aa9f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaa0',
										type: 'device',
										name: 'iDirect-X5-138013',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'MC773',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaa1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaa2',
										type: 'device',
										name: 'iDirect-X5-591102',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'S-B-Fourchon',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaa3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaa4',
										type: 'device',
										name: 'iDirect-X5-150616',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Evolving',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f3d9',
				withCircles: true,
				red: 1,
				green: 0,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Evolving entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d94',
						withCircles: false,
						children: [
							{
								name: 'NavyAtlas',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaa7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaa8',
										type: 'device',
										name: 'iDirect-X5-164702',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Expro',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f3e8',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 3,
				children: [
					{
						name: 'Expro entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d96',
						withCircles: false,
						children: [
							{
								name: 'BlindFaith',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaab',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaac',
										type: 'device',
										name: 'iDirect-X5-51011',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Tahiti',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaad',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aaae',
										type: 'device',
										name: 'iDirect-X5-68415',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'BP-MADDOG',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaaf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aab0',
										type: 'device',
										name: 'iDirect-X5-91482',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Greatwestern',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87166ee16030ed8f414',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Greatwestern entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d99',
						withCircles: false,
						children: [
							{
								name: 'WestJoMills',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aab7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aab8',
										type: 'device',
										name: 'iDirect-X5-78754',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Hotspot',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87266ee16030ed8f4f1',
				withCircles: true,
				red: 0,
				green: 3,
				yellow: 0,
				gray: 2,
				children: [
					{
						name: 'Hotspot entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d9a',
						withCircles: false,
						children: [
							{
								name: 'EN107',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aafb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aafc',
										type: 'device',
										name: 'iDirect-X5-78653',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EN5006',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aafd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758aafe',
										type: 'device',
										name: 'iDirect-X5-122839',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'KE-BorrMist',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758ab01',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758ab02',
										type: 'device',
										name: 'iDirect-X7-58838',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'MCD',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758ab03',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758ab04',
										type: 'device',
										name: 'iDirect-X5-133364',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'sd-t15',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758ab05',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758ab06',
										type: 'device',
										name: 'iDirect-X5-55630',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'LucasDrilling',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87266ee16030ed8f589',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'LucasDrilling entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d9e',
						withCircles: false,
						children: [
							{
								name: 'ENDPS1',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758aaff',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758ab00',
										type: 'device',
										name: 'iDirect-X5-167963',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'JasaMerin',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87266ee16030ed8f51a',
				withCircles: true,
				red: 1,
				green: 0,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'JasaMerin entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d9b',
						withCircles: false,
						children: [
							{
								name: 'sutra5',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758ab07',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758ab08',
										type: 'device',
										name: 'iDirect-X7-40006',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Land',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87266ee16030ed8f560',
				withCircles: true,
				red: 1,
				green: 0,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Land entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d9d',
						withCircles: false,
						children: [
							{
								name: 'Schlumberger',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62e9c70f30c1758ab23',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62e9c70f30c1758ab24',
										type: 'device',
										name: 'iDirect-X7-35751',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'LUMC',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87266ee16030ed8f590',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'LUMC entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616d9f',
						withCircles: false,
						children: [
							{
								name: 'Pelican',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab27',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab28',
										type: 'device',
										name: 'iDirect-X5-91594',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'RVPointSur',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab29',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab2a',
										type: 'device',
										name: 'iDirect-X5-136919',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'ModernAmericanRecycling',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87266ee16030ed8f5bb',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'ModernAmericanRecycling entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616da1',
						withCircles: false,
						children: [
							{
								name: 'MARSTitan',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab31',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab32',
										type: 'device',
										name: 'iDirect-X5-136900',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Seabulk',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87566ee16030ed8f9b7',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Seabulk entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dbd',
						withCircles: false,
						children: [
							{
								name: 'Mobile-Command-Unit',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab37',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab38',
										type: 'device',
										name: 'iDirect-X5-164621',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Nexen',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87266ee16030ed8f5da',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Nexen entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616da3',
						withCircles: false,
						children: [
							{
								name: 'Buzzard',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab39',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab3a',
										type: 'device',
										name: 'iDirect-X7-42063',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'NobleEnergy',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87266ee16030ed8f5e7',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'NobleEnergy entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616da4',
						withCircles: false,
						children: [
							{
								name: 'MC724Gulfstar',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab3d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab3e',
										type: 'device',
										name: 'iDirect-X5-157150',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Oasis',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87366ee16030ed8f5f7',
				withCircles: true,
				red: 1,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Oasis entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616da6',
						withCircles: false,
						children: [
							{
								name: 'CompFracvan-2',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab41',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab42',
										type: 'device',
										name: 'iDirect-X5-197739',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'CompFracvan-3',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab43',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab44',
										type: 'device',
										name: 'iDirect-X5-105334',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Superior',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fb46',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Superior entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dc7',
						withCircles: false,
						children: [
							{
								name: 'JIB-4',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab4b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab4c',
										type: 'device',
										name: 'iDirect-X5-108545',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Teekay',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fb6e',
				withCircles: true,
				red: 0,
				green: 2,
				yellow: 0,
				gray: 2,
				children: [
					{
						name: 'Teekay entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dca',
						withCircles: false,
						children: [
							{
								name: 'SKID49',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab53',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab54',
										type: 'device',
										name: 'iDirect-X5-53589',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'KoltLevi',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acd9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acda',
										type: 'device',
										name: 'iDirect-X5-50612',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'MissAline',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acdb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acdc',
										type: 'device',
										name: 'iDirect-X5-126306',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SPTPearl',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acdd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acde',
										type: 'device',
										name: 'iDirect-X5-61157',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Oryx',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87366ee16030ed8f6b6',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Oryx entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616da8',
						withCircles: false,
						children: [
							{
								name: 'StateLineStationLTE',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab77',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab78',
										type: 'device',
										name: 'iDirect-X5-73011',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'OSG',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87366ee16030ed8f6bd',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'OSG entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616da9',
						withCircles: false,
						children: [
							{
								name: 'BertoMiller',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab79',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab7a',
										type: 'device',
										name: 'iDirect-X5-91027',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'MarieCheramie',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab7b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab7c',
										type: 'device',
										name: 'iDirect-X5-157276',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'OttoCandies',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87366ee16030ed8f6cc',
				withCircles: true,
				red: 0,
				green: 2,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'OttoCandies entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616daa',
						withCircles: false,
						children: [
							{
								name: 'AgnesCandies',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab7d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab7e',
										type: 'device',
										name: 'iDirect-X5-101456',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'JoshuaCandies',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab7f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab80',
										type: 'device',
										name: 'iDirect-X5-90855',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'PER3',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87366ee16030ed8f6e3',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'PER3 entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dac',
						withCircles: false,
						children: [
							{
								name: 'TestModem',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab83',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab84',
										type: 'device',
										name: 'iDirect-X5-122909',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Petronas',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87366ee16030ed8f6ea',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Petronas entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dad',
						withCircles: false,
						children: [
							{
								name: 'sd-wvencedor',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab85',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab86',
										type: 'device',
										name: 'iDirect-X7-62879',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'PlainsAmerican',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87366ee16030ed8f6f2',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'PlainsAmerican entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dae',
						withCircles: false,
						children: [
							{
								name: 'Cotton-Draw',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab87',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab88',
										type: 'device',
										name: 'iDirect-X5-59842',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Posh',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87366ee16030ed8f6f9',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Posh entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616daf',
						withCircles: false,
						children: [
							{
								name: 'posh-bawean',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab89',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab8a',
										type: 'device',
										name: 'iDirect-X7-39540',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'PPC',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87366ee16030ed8f708',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'PPC entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616db0',
						withCircles: false,
						children: [
							{
								name: 'CarlinNV',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab8d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab8e',
										type: 'device',
										name: 'iDirect-X5-76082',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'ProFrac',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87366ee16030ed8f717',
				withCircles: true,
				red: 5,
				green: 17,
				yellow: 0,
				gray: 8,
				children: [
					{
						name: 'ProFrac entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616db2',
						withCircles: false,
						children: [
							{
								name: 'DV05007',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab91',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab92',
										type: 'device',
										name: 'iDirect-X5-141517',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV12002',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab93',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab94',
										type: 'device',
										name: 'iDirect-X5-226054',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV13004',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab95',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab96',
										type: 'device',
										name: 'iDirect-X5-229972',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV15003',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab97',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab98',
										type: 'device',
										name: 'iDirect-X5-229997',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV15008',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab99',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab9a',
										type: 'device',
										name: 'iDirect-X5-229557',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV17009',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab9b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab9c',
										type: 'device',
										name: 'iDirect-X5-229817',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV17010',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab9d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758ab9e',
										type: 'device',
										name: 'iDirect-X5-78337',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV17011',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758ab9f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758aba0',
										type: 'device',
										name: 'iDirect-X5-84384',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV17012',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758aba1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758aba2',
										type: 'device',
										name: 'iDirect-X5-78579',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV17013',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758aba3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758aba4',
										type: 'device',
										name: 'iDirect-X5-91402',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18014',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758aba5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758aba6',
										type: 'device',
										name: 'iDirect-X5-101436',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18015',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758aba7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758aba8',
										type: 'device',
										name: 'iDirect-X5-225539',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18016',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758aba9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abaa',
										type: 'device',
										name: 'iDirect-X5-226235',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18017',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abab',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abac',
										type: 'device',
										name: 'iDirect-X5-225460',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18018',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abad',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abae',
										type: 'device',
										name: 'iDirect-X5-225526',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18019',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abaf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abb0',
										type: 'device',
										name: 'iDirect-X5-225488',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18020',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abb1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abb2',
										type: 'device',
										name: 'iDirect-X5-228526',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18021',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abb3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abb4',
										type: 'device',
										name: 'iDirect-X5-225957',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18022',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abb5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abb6',
										type: 'device',
										name: 'iDirect-X5-229568',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18023',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abb7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abb8',
										type: 'device',
										name: 'iDirect-X5-229602',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18024',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abb9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abba',
										type: 'device',
										name: 'iDirect-X5-229783',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18025',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abbb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abbc',
										type: 'device',
										name: 'iDirect-X5-228480',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18026',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abbd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abbe',
										type: 'device',
										name: 'iDirect-X5-229731',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18027',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abbf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abc0',
										type: 'device',
										name: 'iDirect-X5-230201',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18028',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abc1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abc2',
										type: 'device',
										name: 'iDirect-X5-230141',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18029',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abc3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abc4',
										type: 'device',
										name: 'iDirect-X5-229751',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18030',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abc5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abc6',
										type: 'device',
										name: 'iDirect-X5-229632',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18031',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abc7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abc8',
										type: 'device',
										name: 'iDirect-X5-229446',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18033',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abc9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abca',
										type: 'device',
										name: 'iDirect-X5-228892',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'DV18034',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abcb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abcc',
										type: 'device',
										name: 'iDirect-X5-228429',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'ProPetro',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87466ee16030ed8f7ea',
				withCircles: true,
				red: 1,
				green: 19,
				yellow: 1,
				gray: 0,
				children: [
					{
						name: 'ProPetro entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616db3',
						withCircles: false,
						children: [
							{
								name: 'Frac-PS0780-MAROON',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abcf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abd0',
										type: 'device',
										name: 'iDirect-X5-73212',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS0781-RED',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abd1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abd2',
										type: 'device',
										name: 'iDirect-X5-55901',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS0782-SILVER',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abd3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abd4',
										type: 'device',
										name: 'iDirect-X5-76036',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS0783-PURPLE',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abd5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abd6',
										type: 'device',
										name: 'iDirect-X5-68549',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS0785-BLACK',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abd9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abda',
										type: 'device',
										name: 'iDirect-X5-78844',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS0786-GOLD',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abdb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abdc',
										type: 'device',
										name: 'iDirect-X5-65962',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS0787-NAVY',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abdd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abde',
										type: 'device',
										name: 'iDirect-X5-64750',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS0788-ORANGE',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d62f9c70f30c1758abdf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d62f9c70f30c1758abe0',
										type: 'device',
										name: 'iDirect-X5-68467',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS7711-ROVERSAT',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abe5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abe6',
										type: 'device',
										name: 'iDirect-X5-78403',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS7780-GREEN',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abe7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abe8',
										type: 'device',
										name: 'iDirect-X5-55614',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS7781-GREY',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abe9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abea',
										type: 'device',
										name: 'iDirect-X5-68501',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS7782-BLUE-CREW',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abeb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abec',
										type: 'device',
										name: 'iDirect-X5-55711',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS7783-BROWN',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abed',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abee',
										type: 'device',
										name: 'iDirect-X5-78382',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS7784-WHITE',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abef',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abf0',
										type: 'device',
										name: 'iDirect-X5-78716',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS7785-LIME',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abf1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abf2',
										type: 'device',
										name: 'iDirect-X5-55731',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS7786-CRIMSON',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abf3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abf4',
										type: 'device',
										name: 'iDirect-X5-63396',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Frac-PS7788-AQUA',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abf5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abf6',
										type: 'device',
										name: 'iDirect-X5-96612',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'FRAC-PS7790-PLATINUM',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abf7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abf8',
										type: 'device',
										name: 'iDirect-X5-73163',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'FRAC-TAN',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abf9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abfa',
										type: 'device',
										name: 'iDirect-X5-73325',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'PS0277-SPARE',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abfb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abfc',
										type: 'device',
										name: 'iDirect-X5-78760',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'PS7789-Peach',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abfd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758abfe',
										type: 'device',
										name: 'iDirect-X5-225665',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'PruittDrilling',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87466ee16030ed8f899',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'PruittDrilling entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616db4',
						withCircles: false,
						children: [
							{
								name: 'KawakaCamp',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758abff',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac00',
										type: 'device',
										name: 'iDirect-X5-108709',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'QGC',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87466ee16030ed8f8a1',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'QGC entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616db5',
						withCircles: false,
						children: [
							{
								name: 'qgc-swms-rig9-mod01.au.rig.net',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac07',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac08',
										type: 'device',
										name: 'iDirect-X5-150310',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Rental Skid ',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87466ee16030ed8f8c4',
				withCircles: true,
				red: 1,
				green: 0,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Rental Skid  entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616db7',
						withCircles: false,
						children: [
							{
								name: 'RN-SKID48-MOD01.us.rig.',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac0b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac0c',
										type: 'device',
										name: 'iDirect-X5-107977',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Rental_Offshore',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87466ee16030ed8f8cc',
				withCircles: true,
				red: 1,
				green: 0,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Rental_Offshore entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616db8',
						withCircles: false,
						children: [
							{
								name: 'RIG',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac0d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac0e',
										type: 'device',
										name: 'iDirect-X5-137605',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'RigNet',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87466ee16030ed8f8e8',
				withCircles: true,
				red: 0,
				green: 2,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'RigNet entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616db9',
						withCircles: false,
						children: [
							{
								name: 'WillowStreet-1',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac15',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac16',
										type: 'device',
										name: 'iDirect-X5-68683',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'WillowStreet-2',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac17',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac18',
										type: 'device',
										name: 'iDirect-X5-90669',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'WillowStreet-3',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac19',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac1a',
										type: 'device',
										name: 'iDirect-X5-161909',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'RigPower',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87466ee16030ed8f8fd',
				withCircles: true,
				red: 1,
				green: 16,
				yellow: 0,
				gray: 8,
				children: [
					{
						name: 'RigPower entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dba',
						withCircles: false,
						children: [
							{
								name: 'Cottenwood-55-1-14Unit3H',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac1d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac1e',
										type: 'device',
										name: 'iDirect-X5-78497',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Cox-22-27-2801-4201',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac1f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac20',
										type: 'device',
										name: 'iDirect-X5-78398',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Hay-Bowen-Pad-1',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac21',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac22',
										type: 'device',
										name: 'iDirect-X5-73026',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'HayBowenPad3',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac23',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac24',
										type: 'device',
										name: 'iDirect-X5-68675',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Hayhurst-SW-Pad10',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac25',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac26',
										type: 'device',
										name: 'iDirect-X5-134609',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Heron-54-2-4Unit1H',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac27',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac28',
										type: 'device',
										name: 'iDirect-X5-76172',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Mako-State-2-34-Frac-Pond',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac2b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac2c',
										type: 'device',
										name: 'iDirect-X5-7884',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Pioneer-Brook-B-17',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac2d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac2e',
										type: 'device',
										name: 'iDirect-X5-62956',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'PioneerRocker-B',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac2f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac30',
										type: 'device',
										name: 'iDirect-X5-55585',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'PokerLake464H',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac31',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac32',
										type: 'device',
										name: 'iDirect-X5-78605',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SaladoDrawPad8',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac33',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac34',
										type: 'device',
										name: 'iDirect-X5-73315',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Seawolf-1-12-Federal-091H',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac35',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac36',
										type: 'device',
										name: 'iDirect-X5-74933',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Seminole-State-56-2-25-Unit-1H',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac37',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac38',
										type: 'device',
										name: 'iDirect-X5-55562',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Slaughter-St.-No.-129H',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac39',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac3a',
										type: 'device',
										name: 'iDirect-X5-84381',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SRH-A-1111RB-1110SU',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac3b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac3c',
										type: 'device',
										name: 'iDirect-X5-84222',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SRH-E-7-8',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac3d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac3e',
										type: 'device',
										name: 'iDirect-X5-72947',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SRH-A-1111SM-1111SU',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac3f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac40',
										type: 'device',
										name: 'iDirect-X5-73434',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Sugg-A-141-140-Alloc-F-6SU',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac41',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac42',
										type: 'device',
										name: 'iDirect-X5-156376',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Sugg-A-141-140-Alloc-G-7SU',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac43',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac44',
										type: 'device',
										name: 'iDirect-X5-59759',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Sugg-D-104-6SM-Sugg-D-104-8SM',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac45',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac46',
										type: 'device',
										name: 'iDirect-X5-78318',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SuggA141-140-AllocG-7SM-alloc-H',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac47',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac48',
										type: 'device',
										name: 'iDirect-X5-78690',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SUGGB131-133',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac49',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac4a',
										type: 'device',
										name: 'iDirect-X5-78679',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SuggB1346M-1347MA',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac4b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac4c',
										type: 'device',
										name: 'iDirect-X5-55608',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SuggC191-6SM-6SU-8SM',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac4d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac4e',
										type: 'device',
										name: 'iDirect-X5-68439',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Wiggins1-48-Unit1H',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac4f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac50',
										type: 'device',
										name: 'iDirect-X5-56151',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'SafeArc Demo_Offshore',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87566ee16030ed8f9a0',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'SafeArc Demo_Offshore entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dbb',
						withCircles: false,
						children: [
							{
								name: 'JIB-1',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac51',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac52',
										type: 'device',
										name: 'iDirect-X5-101168',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Schlumberger',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87566ee16030ed8f9a8',
				withCircles: true,
				red: 1,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Schlumberger entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dbc',
						withCircles: false,
						children: [
							{
								name: 'SKID53',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac53',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac54',
										type: 'device',
										name: 'iDirect-X5-130472',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'H-P100',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac55',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac56',
										type: 'device',
										name: 'iDirect-X5-84391',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Seadrill',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87566ee16030ed8f9cd',
				withCircles: true,
				red: 5,
				green: 5,
				yellow: 1,
				gray: 3,
				children: [
					{
						name: 'Seadrill entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dbf',
						withCircles: false,
						children: [
							{
								name: 'SevanBrazil',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac5b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac5c',
										type: 'device',
										name: 'iDirect-X7-9633',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SevanLouisiana',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac5d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac5e',
										type: 'device',
										name: 'iDirect-X7-9285',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'T15',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac5f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac60',
										type: 'device',
										name: 'iDirect-X7-29596',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'T16',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac61',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac62',
										type: 'device',
										name: 'iDirect-X7-11047',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'WCapricornHotSpot',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac63',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac64',
										type: 'device',
										name: 'iDirect-X7-52425',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'WestCapricorn',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac65',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac66',
										type: 'device',
										name: 'iDirect-X7-11056',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'WestCastor',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac67',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac68',
										type: 'device',
										name: 'iDirect-X7-11087',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'WestCourageous',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac69',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac6a',
										type: 'device',
										name: 'iDirect-X7-9578',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'WestCressida',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac6b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac6c',
										type: 'device',
										name: 'iDirect-X7-9517',
										icon: {
											className: 'icon-warning'
										},
										statusId: 1,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'WestDefender',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac6d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac6e',
										type: 'device',
										name: 'iDirect-X7-29109',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'WestIntrepid',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac71',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac72',
										type: 'device',
										name: 'iDirect-X7-11049',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'WestOberon',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac75',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac76',
										type: 'device',
										name: 'iDirect-X7-9906',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'WestTitania',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac7b',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac7c',
										type: 'device',
										name: 'iDirect-X7-9798',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'WestVencedor',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6309c70f30c1758ac7f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6309c70f30c1758ac80',
										type: 'device',
										name: 'iDirect-X7-20432',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Shell',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87566ee16030ed8fa78',
				withCircles: true,
				red: 1,
				green: 2,
				yellow: 0,
				gray: 2,
				children: [
					{
						name: 'Shell entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dc1',
						withCircles: false,
						children: [
							{
								name: 'FMC-HOU-CCOM',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758ac8f',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758ac90',
										type: 'device',
										name: 'iDirect-X5-159969',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'shell-ewe25-nm01.au.rig.net',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758ac93',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758ac94',
										type: 'device',
										name: 'iDirect-X7-59007',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'shell-r009-mod01.au.rig.net',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758ac95',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758ac96',
										type: 'device',
										name: 'iDirect-X5-78641',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'shell-r165-nm01.au.rig.net',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758ac97',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758ac98',
										type: 'device',
										name: 'iDirect-X7-62095',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'shell-rig168-mod01.au.rig.net',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758ac99',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758ac9a',
										type: 'device',
										name: 'iDirect-X5-78541',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Sidewinder',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87566ee16030ed8faa9',
				withCircles: true,
				red: 3,
				green: 0,
				yellow: 0,
				gray: 8,
				children: [
					{
						name: 'Sidewinder entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dc2',
						withCircles: false,
						children: [
							{
								name: 'CenterSuperHouse',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758ac9d',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758ac9e',
										type: 'device',
										name: 'iDirect-X5-91285',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Sidewinder101',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758aca3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758aca4',
										type: 'device',
										name: 'iDirect-X5-55771',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Sidewinder102',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758aca5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758aca6',
										type: 'device',
										name: 'iDirect-X5-59659',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Sidewinder103',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758aca7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758aca8',
										type: 'device',
										name: 'iDirect-X5-68269',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Sidewinder107',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758aca9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acaa',
										type: 'device',
										name: 'iDirect-X5-78673',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Sidewinder127',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acad',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acae',
										type: 'device',
										name: 'iDirect-X5-76031',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Sidewinder219',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acb1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acb2',
										type: 'device',
										name: 'iDirect-X5-127854',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Sidewinder220',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acb3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acb4',
										type: 'device',
										name: 'iDirect-X5-72994',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Sidewinder223',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acb9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acba',
										type: 'device',
										name: 'iDirect-X5-78755',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Sidewinder64',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acbb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acbc',
										type: 'device',
										name: 'iDirect-X5-60128',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SuperHouse',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acbd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acbe',
										type: 'device',
										name: 'iDirect-X5-164343',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'SideWinder',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87566ee16030ed8fae0',
				withCircles: true,
				red: 1,
				green: 0,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'SideWinder entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dc3',
						withCircles: false,
						children: [
							{
								name: 'Sidewinder128-LTE',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acaf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acb0',
										type: 'device',
										name: 'iDirect-X5-141212',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'SKE',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fb11',
				withCircles: true,
				red: 0,
				green: 3,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'SKE entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dc4',
						withCircles: false,
						children: [
							{
								name: 'B15-1',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acbf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acc0',
										type: 'device',
										name: 'iDirect-X7-35452',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EastBelumut',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acc3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acc4',
										type: 'device',
										name: 'iDirect-X7-30388',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'EastPiatu',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acc7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acc8',
										type: 'device',
										name: 'iDirect-X7-12160',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'SSV',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fb3e',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'SSV entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dc6',
						withCircles: false,
						children: [
							{
								name: 'VenturaCatarina',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758accd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acce',
										type: 'device',
										name: 'iDirect-X7-27846',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Talisman',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fb4d',
				withCircles: true,
				red: 1,
				green: 2,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Talisman entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dc8',
						withCircles: false,
						children: [
							{
								name: 'BleoHolm',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758accf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acd0',
										type: 'device',
										name: 'iDirect-X5-183143',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Claymore',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acd1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acd2',
										type: 'device',
										name: 'iDirect-X7-50172',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Flotta',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acd3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acd4',
										type: 'device',
										name: 'iDirect-X5-191382',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'Fulmar',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acd5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acd6',
										type: 'device',
										name: 'iDirect-X7-11106',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Target',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fb66',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Target entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dc9',
						withCircles: false,
						children: [
							{
								name: 'mega-bakti',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acd7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acd8',
										type: 'device',
										name: 'iDirect-X7-34462',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Trinidad',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fb8a',
				withCircles: true,
				red: 1,
				green: 0,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Trinidad entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dcb',
						withCircles: false,
						children: [
							{
								name: 'Trinidad138',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acdf',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758ace0',
										type: 'device',
										name: 'iDirect-X5-78240',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Tucker',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fb91',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Tucker entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dcc',
						withCircles: false,
						children: [
							{
								name: 'CCOM',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758ace1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758ace2',
										type: 'device',
										name: 'iDirect-X5-84284',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Vaalco',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fba6',
				withCircles: true,
				red: 0,
				green: 3,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Vaalco entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dce',
						withCircles: false,
						children: [
							{
								name: 'ETAME',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758ace7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758ace8',
										type: 'device',
										name: 'iDirect-X7-44351',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'POG',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758ace9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acea',
										type: 'device',
										name: 'iDirect-X7-44478',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'SEENT',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758aceb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acec',
										type: 'device',
										name: 'iDirect-X7-50529',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'WAL',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fbc1',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'WAL entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dd0',
						withCircles: false,
						children: [
							{
								name: 'GC-65',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acef',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acf0',
										type: 'device',
										name: 'iDirect-X5-73342',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Weatherford',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fbc8',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'Weatherford entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dd1',
						withCircles: false,
						children: [
							{
								name: 'Patterson231',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acf1',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acf2',
										type: 'device',
										name: 'iDirect-X5-74248',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'WeeksMarine',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fbcf',
				withCircles: true,
				red: 1,
				green: 0,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'WeeksMarine entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dd2',
						withCircles: false,
						children: [
							{
								name: 'CaptFrank',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acf3',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acf4',
										type: 'device',
										name: 'iDirect-X5-54549',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'WEN',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fbd7',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'WEN entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dd3',
						withCircles: false,
						children: [
							{
								name: 'HydmanCreeekSunValley',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acf5',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acf6',
										type: 'device',
										name: 'iDirect-X5-107617',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'White Marlin',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fbde',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'White Marlin entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dd4',
						withCircles: false,
						children: [
							{
								name: 'WM-MI629-MOD01',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acf7',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acf8',
										type: 'device',
										name: 'iDirect-X3-106820',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Williams',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fbe5',
				withCircles: true,
				red: 0,
				green: 1,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'Williams entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dd5',
						withCircles: false,
						children: [
							{
								name: 'MC773',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acf9',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acfa',
										type: 'device',
										name: 'iDirect-X5-5163499',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'WOG',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fbed',
				withCircles: true,
				red: 0,
				green: 0,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'WOG entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dd6',
						withCircles: false,
						children: [
							{
								name: 'SevanLouisiana',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acfb',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acfc',
										type: 'device',
										name: 'iDirect-X7-44226',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'XTO',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5c23c87666ee16030ed8fbf5',
				withCircles: true,
				red: 0,
				green: 2,
				yellow: 0,
				gray: 0,
				children: [
					{
						name: 'XTO entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dd7',
						withCircles: false,
						children: [
							{
								name: 'PENNSYLVANIA',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acfd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758acfe',
										type: 'device',
										name: 'iDirect-X5-55802',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'TEXAS',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5c61d6319c70f30c1758acff',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5c61d6319c70f30c1758ad00',
										type: 'device',
										name: 'iDirect-X5-6088',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'StarOil',
				labelStyle: {
					color: 'black',
					fontWeight: '600',
					fontSize: '12px'
				},
				type: 'customer',
				toggled: false,
				loading: true,
				withIcon: true,
				id: '5cb74aaa3f251a2dbeac4148',
				withCircles: true,
				red: 1,
				green: 2,
				yellow: 0,
				gray: 1,
				children: [
					{
						name: 'StarOil entity',
						type: 'entity',
						labelStyle: {
							color: '#333',
							fontWeight: '600',
							marginLeft: '10px',
							fontSize: '12px'
						},
						icon: {
							className: 'icon-tree-warning'
						},
						toggled: false,
						loading: true,
						withIcon: true,
						id: '5ce41b791d7cca60f6616dd8',
						withCircles: false,
						children: [
							{
								name: 'StarOil',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5cb74b313f251a2dbeac4149',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5cb74b6b3f251a2dbeac414a',
										type: 'device',
										name: 'StarOil',
										icon: {
											className: 'icon-down'
										},
										statusId: 3,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'StarOil2',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5cb75ee40fcf9533650c5bcd',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5cb75f030fcf9533650c5bce',
										type: 'device',
										name: 'StarOil2',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'StarOil3',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5cb8e7988492b40719a10733',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5cb8e9a88492b40719a1073d',
										type: 'device',
										name: 'modem3',
										icon: {
											className: 'icon-unreachable'
										},
										statusId: 4,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							},
							{
								name: 'StarOil5',
								type: 'site',
								labelStyle: {
									color: '#333',
									fontWeight: '500',
									marginLeft: '15px',
									fontSize: '12px'
								},
								icon: {
									className: 'icon-tree-warning'
								},
								toggled: false,
								loading: true,
								withIcon: true,
								id: '5cb8e8ac8492b40719a10735',
								withCircles: false,
								menuContext: [
									{
										id: 'Satellite',
										icon: 'any',
										label: 'Satellite'
									}
								],
								children: [
									{
										id: '5cb8e9fe8492b40719a1074b',
										type: 'device',
										name: 'modem5',
										icon: {
											className: 'icon-work'
										},
										statusId: 2,
										toggled: false,
										withCircles: false,
										menuContext: [
											{
												id: 'Custom Mark',
												icon: 'any',
												label: 'Custom Mark'
											}
										],
										subMenus: [
											{
												title: 'Tracking',
												items: [
													{
														title: 'Active'
													},
													{
														title: 'Configuration'
													}
												],
												children: []
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	}
];

  
function App() {
const [ arrayData, setArrayData ] = useState([]);
	const [ headers, setHeaders ] = useState([
		{ name: 'Personaje', keyField: 'name' },
		{ name: 'status', keyField: 'status' },
		{ name: 'specie', keyField: 'species' },
		{ name: 'Gender', keyField: 'gender' }
	]);

	const [ labels, setLabels ] = useState([]);
	const [ placeholders, setPlaceHolders ] = useState([]);
	const [ selectType, setSelectType ] = useState('inputText');



	const [ dataToDisplay, setDataToDisplay ] = useState({
		DATA: DATA_TREE,
		status: null,
		name: null,
		classNameFilter: null
	});
	const [ tabs , setTabs ] = useState([...DATA_TABS]);
	const [ activeTab, setActiveTab ] = useState(DATA_TABS[0].title);
	const [ show, setShow ] = useState(true);
	const [ searchText, setSearchText ] = useState('');

	//For Modal alamr

	const [ showModalAlarm, setShowModalAlarm ] = useState(false);

	const options = [ 'blue', 'red', 'green', 'yellow' ];

	///This is the expample of data structure for the
	//Treeview Component

	const handleClose = () => {
		setShow(!show);
	};

	const addTab = () => {
		let tabsAux = [ ...tabs ];
		let newTab = {
			title: 'Camera ' + tabsAux.length,
			content: <Button type="submit">Button</Button>,
			icon: 'icon-camera',
			closeable: true
		};

		//Si ya existe la nueva tab solo se activa
		if (
			tabsAux.find((tab) => {
				return tab.title === newTab.title;
			}) != null
		) {
			setActiveTab(newTab.title);
			// console.log("Se activa la nueva tab", this.state.activeTab);
		} else {
			tabsAux.push(newTab);
			setTabs(tabsAux);
		}
	};

	const handleSearch = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		if (name === 'searchText') {
			setSearchText(value);
		}
	};

	const closeTab = (i) => {
		let tabsAux = [ ...tabs ];

		tabsAux.splice(i, 1);

		setTabs(tabsAux);
	};

	const selectTab = (activeTab) => {
		setActiveTab(activeTab);
	};

	const handleSelectionChange = (selection) => {
		// this.setState({ selection: selection })
	};

	const doSearch = (text) => {
		setDataToDisplay({ DATA: searchInObject(text, DATA_TREE), status: null, name: null, classNameFilter: null });
	};

	const doFilter = (criteria, nameGlobalNode, nameCustomerNode, classNameFilter) => {
		let name = nameGlobalNode;
		if (nameCustomerNode != '') name = nameCustomerNode;
		setDataToDisplay({
			DATA: searchInObjectByStatus(criteria, DATA_TREE, nameGlobalNode, nameCustomerNode),
			status: criteria,
			name,
			classNameFilter
		});
	};

	const searchInNodes = (criteria, node, apc) => {
		if (node.name) {
			if (node.name.toLowerCase().includes(criteria.toLowerCase())) {
				apc = true;
			}
		}
		if (node.children) {
			node.children.forEach((nodeItemObject) => {
				apc = searchInNodes(criteria, nodeItemObject, apc);
			});
		}
		return apc;
	};

	const searchInNodesByStatus = (criteria, node, apc) => {
		if (node.statusId) {
			if (node.statusId == criteria) {
				apc = true;
			}
		}
		if (node.children) {
			node.children.forEach((nodeItemObject) => {
				apc = searchInNodes(criteria, nodeItemObject, apc);
			});
		}
		return apc;
	};

	const searchInObject = (criteria, data) => {
		if (criteria != '') {
			let auxData = data.filter((dataItem) => {
				let flagPrincipalNode = false;
				for (let dataIt in dataItem) {
					if (dataIt == 'name' && dataItem[dataIt].toLowerCase().includes(criteria.toLowerCase()))
						flagPrincipalNode = true;
				}
				if (dataItem.children && dataItem.children.length != 0 && !flagPrincipalNode) {
					let arrayCustomers = dataItem.children.filter((dataCustomers) => {
						let flagCustomerNode = false;
						for (let dataIt in dataCustomers) {
							if (
								dataIt == 'name' &&
								dataCustomers[dataIt].toLowerCase().includes(criteria.toLowerCase())
							)
								flagCustomerNode = true;
						}
						if (dataCustomers.children && dataCustomers.children.length != 0 && !flagCustomerNode) {
							let arrayEntitys = dataCustomers.children.filter((dataEntity) => {
								let flagEntity = false;
								for (let dataIt in dataEntity) {
									if (
										dataIt == 'name' &&
										dataEntity[dataIt].toLowerCase().includes(criteria.toLowerCase())
									)
										flagEntity = true;
								}
								if (dataEntity.children && dataEntity.children.length != 0 && !flagEntity) {
									let arraySites = dataEntity.children.filter((siteEntity) => {
										let flagDevices = false;
										for (let dataIt in siteEntity) {
											if (
												dataIt == 'name' &&
												siteEntity[dataIt].toLowerCase().includes(criteria.toLowerCase())
											)
												flagDevices = true;
										}
										if (siteEntity.children && siteEntity.children.length != 0 && !flagDevices) {
											let arrayDevices = siteEntity.children.filter((deviceEntity) => {
												return searchInNodes(criteria, deviceEntity, false);
											});
											siteEntity.children = arrayDevices;
										}
										return siteEntity.children.length != 0 || flagDevices;
									});

									dataEntity.children = arraySites;
								}
								return dataEntity.children.length != 0 || flagEntity;
							});

							dataCustomers.children = arrayEntitys;
						}
						return dataCustomers.children.length != 0 || flagCustomerNode;
					});

					dataItem.children = arrayCustomers;
				}
				return dataItem.children.length != 0 || flagPrincipalNode;
			});
			return auxData;
		} else {
			return data;
		}
	};

	const searchInObjectByStatus = (criteria, data, nameGlobalNode, nameCustomerNode) => {
		if (criteria != 0) {
			let auxData = data.filter((dataItem) => {
				let flagPrincipalNode = false;
				for (let dataIt in dataItem) {
					if (dataIt == 'name' && dataItem[dataIt].includes(nameGlobalNode)) flagPrincipalNode = true;
				}
				if (dataItem.children && dataItem.children.length != 0 && flagPrincipalNode) {
					let arrayCustomers = dataItem.children.filter((dataCustomers) => {
						let flagCustomerNode = false;
						for (let dataIt in dataCustomers) {
							if (dataIt == 'name' && dataCustomers[dataIt].includes(nameCustomerNode))
								flagCustomerNode = true;
						}

						if (dataCustomers.children && dataCustomers.children.length != 0 && flagCustomerNode) {
							let arrayEntitys = dataCustomers.children.filter((dataEntity) => {
								if (dataEntity.children && dataEntity.children.length != 0) {
									let arraySites = dataEntity.children.filter((siteEntity) => {
										if (siteEntity.children && siteEntity.children.length != 0) {
											let arrayDevices = siteEntity.children.filter((deviceEntity) => {
												return searchInNodesByStatus(criteria, deviceEntity, false);
											});
											siteEntity.children = arrayDevices;
										}
										return siteEntity.children.length != 0;
									});

									dataEntity.children = arraySites;
								}
								return dataEntity.children.length != 0;
							});
							dataCustomers.children = arrayEntitys;
						}

						if (nameCustomerNode == '') {
							return dataCustomers.children.length != 0;
						} else {
							return flagCustomerNode;
						}
					});

					dataItem.children = arrayCustomers;
				}
				return flagPrincipalNode;
			});
			return auxData;
		} else {
			return data;
		}
	};

	const switchFilters = (header) => {
		switch (header.keyField) {
			case 'status':
				setSelectType('calendar');
				setLabels([ 'Search In' ]);
				break;
			case 'name':
				setSelectType('select');
				setLabels([ 'Your text here' ]);
				break;

			case 'species':
				setSelectType('rangeDate');
				setLabels([ 'Search from: ', 'Search to: ' ]);
				break;
			default:
				setSelectType('inputText');
				setLabels([ 'Your text here' ]);
				setPlaceHolders([ 'YourText here' ]);
				break;
		}
	};

	//there are the filter props
	const API_FILTER = {
		placeholders,
		options,
		labels,
		eventEmit: (res) => {
			console.log('Filter results->', res);
		},
		componentType: selectType
	};

	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	const handleSubmit = (e, formData, inputs) => {
		e.preventDefault();
		alert(JSON.stringify(formData, null, 2));
	};

	const addNewTab =()=>{
console.log("NEW TAB",);
		let rand= Math.random();
		let newTab=  { title: "Camer",
		iconName: "fas fa-video",
		content: "Nothing to show", icon: "icon-camera", closeable: true }
	  let newT= [...tabs];
	  newT.push(newTab);
	  setTabs(newT);
	}

	const handleErrorSubmit = (e, formData, errorInputs) => {
		console.error(errorInputs);
	};

	const matchPassword = (value) => {
		return value && value === password;
	};

	const filterData = (e) => {
		/* switch(e){

	case 13:
			setDataToDisplay(searchInObject(searchText, DATA));

	break;	
}
 */
	};

	return (
		<div className="App">
			<DrawHeader doSearch={doSearch} />
			<div className="body-content">
				<div id="style-4" className="tree scrollbar">
					{/**
      
       <Button type="submit" onClick={() => { addTab(); }}>Add Tab</Button>*/
					/* 			<TreeViewSelectable
							data={dataToDisplay}
							onceClick={(res) => {
								console.log('Clciked', res);
							}}
							doubleClick={(res) => {
								console.log('Double clicked->', res);
							}}
							rightEvent={(res) => {
								console.log('Right Click', res);
							}}
							clickMenuCtx={(res) => console.log('Menu ctx clicked-->', res)}
							clickSubMenuCtx={(res) => console.log('SubMenu ctx clicked-->', res)}
						/> */}

			
				</div>

				<div className="tab-controller-content">
					<div className="container">
						

							<button className="btn btn-primary" onClick={addNewTab}>
AGREGAR TAB
							</button>
						
					
								{/* 							<FilterComponent {...API_FILTER}> </FilterComponent>


		<DataTable
									clickOnHeader={(header) => {
										switchFilters(header);
									}}
								/>
 */}

						{/* 		<ModalAlarm
									showModalAlarm={showModalAlarm}
									closeModal={() => {
										setShowModalAlarm(!showModalAlarm);
									}}
								/> */}



								<TabController tabs={tabs} activeTab={activeTab}
								closeTab={(index)=>{
									let newTabs= [...tabs];
									newTabs.splice(1,index )	;
									setTabs(newTabs);
								}}
								selectTab={(tab)=>{

									setActiveTab(tab);
								}}/>
							
					
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
