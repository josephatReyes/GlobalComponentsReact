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


import { DATA_TABS } from './dataTabs';
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import TreeViewSelectable from './treeViewSelectable';
import { DATA_TREE_SELECTABLE } from './dataTreeSelectable';
import ModalAlarm from './modal-alarms';

/**
 * @file Global Components.
 * @author Rignet Developers team
 * @see  <img width="120px" src="https://www.rig.net/wp-content/uploads/2019/01/cropped-Rignet_Logo2x.png"
 */

function App() {
	
const  DATA_TREE = [{
    name: 'Rignet',
    toggled: true,
    withIcon: true,
    withCircles: true,
    red: 10,
    green: 512,
    yellow: 100,
    gray: 123,
    labelStyle: { color: '#EF7622', fontWeight: 'bold' },
    menuContext: [{ id: "Option1", icon: "any", label: "Option1" }, 
                  {id: "Option2", icon: "any", label: "Option2", }],
    subMenus: [{ title: 'sub-option', items: [{ title: 'item  1', }, { title: 'item 2' }] },
              { title: 'sub-option 2', items: [{ title: 'item  1', }, { title: 'item 2' }] }
    ],
    children: [

      {
        name: 'Costumer 1',
        labelStyle: { color: 'black', fontWeight: '600' },
        toggled: true,
        loading: true,
        withIcon: true, withCircles: true,
        children: [
          {
            name: 'Entity 2',
            labelStyle: { color: 'black', fontWeight: '600', marginLeft: '10px' },
            toggled: false,
            loading: true,
            withIcon: true, withCircles: true,
            children: [

              {
                name: 'Site 1 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                menuContext: [{ id: "Option1", icon: "any", label: "Option1" }, {
                  id: "Option2", icon: "any", label: "Option2",

                }],
                subMenus: [{ title: 'sub-option', items: [{ title: 'item  1', }, { title: 'item 2' }] },

                ],
                children: [
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    children: [
                    ]
                  },
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                  }
                ]

              },

              {
                name: 'Site 1 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                children: [
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    children: [
                    ]
                  },
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                  }
                ]

              },
            ]
          }
          ,
          {
            name: 'Entity 2',
            labelStyle: { color: 'black', fontWeight: '600', marginLeft: '10px' },
            toggled: false,
            loading: true,
            withIcon: true, withCircles: true,
            children: [

              {
                name: 'Site 2 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                children: [
                  {
                    name: "Device 1 site 2",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    children: [
                    ]
                  },
                  {
                    name: "Device 3 site 2",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                  }
                ]

              },
            ]
          }

        ]
      },

      {
        name: 'Costumer 2',
        labelStyle: { color: 'black', fontWeight: '600' },
        toggled: false,
        loading: true,
        withIcon: true, withCircles: true,
        children: [

          {
            name: 'Entity 2',
            labelStyle: { color: 'black', fontWeight: '600', marginLeft: '10px' },
            toggled: false,
            loading: true,
            withIcon: true, withCircles: true,
            children: [

              {
                name: 'Site 1 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                children: [
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    children: [
                    ]
                  },
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                  }
                ]

              },

              {
                name: 'Site 1 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                children: [
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    children: [
                    ]
                  },
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                  }
                ]

              },
            ]
          }
          ,
          {
            name: 'Entity 2',
            labelStyle: { color: 'black', fontWeight: '600', marginLeft: '10px' },
            toggled: false,
            withIcon: true, withCircles: true,
            children: [
              {
                name: 'Site 2 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                children: [
                  {
                    name: "Device 1 site 2",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    children: [
                    ]
                  },
                  {
                    name: "Device 2 site 2",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                  }
                ]
              },
            ]
          }

        ]
      },
      {
        name: 'Costumer 3',
        labelStyle: { color: 'black', fontWeight: '600' },
        toggled: false,
        loading: true,
        withIcon: true, withCircles: true,
        children: [

          {
            name: 'Entity 2',
            labelStyle: { color: 'black', fontWeight: '600', marginLeft: '10px' },
            toggled: false,
            loading: true,
            withIcon: true, withCircles: true,
            children: [

              {
                name: 'Site 1 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                children: [
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    children: [
                    ]
                  },
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                  }
                ]

              },

              {
                name: 'Site 1 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                children: [
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    children: [
                    ]
                  },
                  {
                    name: "Device site 1",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                  }
                ]
              },
            ]
          }
          ,
          {
            name: 'Entity 2',
            labelStyle: { color: 'black', fontWeight: '600', marginLeft: '10px' },
            toggled: false,
            loading: true,
            withIcon: true, withCircles: true,
            children: [

              {
                name: 'Site 2 truck', toggled: true, withIcon: true, withCircles: false,
                icon: { className: 'fas fa-truck', style: { color: '#ef7622', fontSize: '14px', marginLeft: '10px' } },
                children: [
                  {
                    name: "Device 1 site 2",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                    children: [
                    ]
                  },
                  {
                    name: "Device 2 site 2",
                    icon: { className: 'fas fa-video', style: { color: '#ef7622', fontSize: '14px', marginLeft: '15px' } },
                    toggled: false,
                    withCircles: false,
                  }
                ]

              },
            ]
          }

        ]
      },

    ]
  },
  ]
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

	let TABS = DATA_TABS;
	const [ dataToDisplay, setDataToDisplay ] = useState([]);
	const [ tabs, setTabs ] = useState(TABS);
	const [ activeTab, setActiveTab ] = useState(TABS[0].title);
	const [ show, setShow ] = useState(true);
	const [ searchText, setSearchText ] = useState('');

	//For Modal alamr

	const [ showModalAlarm, setShowModalAlarm ] = useState(true);

	const options = [ 'blue', 'red', 'green', 'yellow' ];
	useEffect(() => {
		console.log(dataToDisplay);
	setDataToDisplay(DATA_TREE);
	}, []);
	useEffect(
		() => {
				setDataToDisplay(searchInObject(searchText, DATA_TREE));

				console.log("DATA CONSTANTE->",DATA_TREE);
			// console.log(searchText);
			// console.log(dataToDisplay);
		},
		[ searchText ]
	);

	useEffect(()=>{}, [dataToDisplay])
	///This is the expample of data structure for the
	//Treeview Component
	let data = DATA_TREE_SELECTABLE;

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
	const searchInNodes = (criteria, node, apc) => {
		for (let nodeItem in node) {
			if (nodeItem.toString().toLowerCase() == 'name') {
				if (node[nodeItem].toString().toLowerCase().includes(criteria.toString().toLowerCase())) {
					apc = true;
				}
			}

			if (node[nodeItem].length && typeof node[nodeItem] != 'string') {
				node[nodeItem].forEach((nodeItemObject) => {
					apc = searchInNodes(criteria, nodeItemObject, apc);
				});
			}
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
					// if(dataIt = 'toggled') dataItem[dataIt] = true;
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
							// if(dataIt = 'toggled') dataCustomers[dataIt] = true;
						}

						let flagEntity = false;
						if (dataCustomers.children && dataCustomers.children.length != 0 && !flagCustomerNode) {
							//Filtra por entity
							let arrayEntitys = dataCustomers.children.filter((dataEntity) => {
								return searchInNodes(criteria, dataEntity, false);
							});
							dataCustomers.children = arrayEntitys;

							//No le importan las entitys
							// dataCustomers.children.forEach( dataEntity => {
							//   flagEntity = searchInNodes(criteria,dataEntity,false)
							// })
						}
						// Filtra por entity
						return dataCustomers.children.length != 0 || flagCustomerNode;

						//No le importan entitys
						// return (flagCustomerNode || flagEntity)
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

	const handleErrorSubmit = (e, formData, errorInputs) => {
		console.error(errorInputs);
	};

	const matchPassword = (value) => {
		return value && value === password;
	};

	return (
		<div className="App">
			<div className="header">
				<HeaderContainer />

				<Form.Control
					type="text"
					placeholder="search"
					name="searchText"
					value={searchText}
					onChange={handleSearch}
				/>

				<UserController />
			</div>
			<div className="body-content">
				<div id="style-4" className="tree scrollbar">
					{
						/**
      
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
						/> */
					}


					<TreeView data={dataToDisplay}

onceClick={(res) => { console.log("Clciked", res) }}

doubleClick={(res) => { ; console.log("Double clicked->", res) }}

rightEvent={(res) => { console.log("Right Click", res) }}

clickMenuCtx={res => console.log("Menu ctx clicked-->", res)}

clickSubMenuCtx={res => console.log("SubMenu ctx clicked-->", res)}

/>
				</div>

				<div className="tab-controller-content">
					<div className="container">
						<Jumbotron>
							<h1>Test of filters</h1>
							<p>Click any header table to display a new filter</p>
							<div className="container">
								{/* 							<FilterComponent {...API_FILTER}> </FilterComponent>


		<DataTable
									clickOnHeader={(header) => {
										switchFilters(header);
									}}
								/>
 */}

								<ModalAlarm
									showModalAlarm={showModalAlarm}
									closeModal={() => {
										setShowModalAlarm(!showModalAlarm);
									}}
								/>
							</div>
						</Jumbotron>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
