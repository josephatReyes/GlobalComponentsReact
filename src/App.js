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
import { DATA_TREE } from './dataTree';

import { DATA_TABS } from './dataTabs';
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import TreeViewSelectable from './treeViewSelectable';
import { DATA_TREE_SELECTABLE } from './dataTreeSelectable';

/**
 * @file Global Components.
 * @author Rignet Developers team
 * @see  <img width="120px" src="https://www.rig.net/wp-content/uploads/2019/01/cropped-Rignet_Logo2x.png"
 */

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

	let TABS = DATA_TABS;
	const [ dataToDisplay, setDataToDisplay ] = useState([]);
	const [ tabs, setTabs ] = useState(TABS);
	const [ activeTab, setActiveTab ] = useState(TABS[0].title);
	const [ show, setShow ] = useState(true);
	const [ searchText, setSearchText ] = useState('');

	const options = [ 'blue', 'red', 'green', 'yellow' ];
	useEffect(() => {
		console.log(dataToDisplay);
		setDataToDisplay(data);
	}, []);
	useEffect(
		() => {
			// console.log(searchText);
			setDataToDisplay(searchInObject(searchText, data));
			// console.log(dataToDisplay);
		},
		[ searchText ]
	);

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
					apc = 1;
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
				// search retorna 1 si encontro coincidencia en el nodo
				return searchInNodes(criteria, dataItem, 0) == 1;
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

	const [firstName, setFirstName]= useState('');
	const [lastName, setLastName]= useState('');
	const [password, setPassword]= useState('');
	const [confirmPassword, setConfirmPassword]= useState('');


   const handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
    }

	const  handleErrorSubmit = (e, formData, errorInputs) => {
        console.error(errorInputs)
    }

	const matchPassword = (value) => {
        return value && value === password;   
    }


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

						<TreeViewSelectable
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
						/>
					}
				</div>

				<div className="tab-controller-content">
					<div className="container">
						<Jumbotron>
							<h1>Test of filters</h1>
							<p>Click any header table to display a new filter</p>
							<div className="container">
								<FilterComponent {...API_FILTER}> </FilterComponent>


		<DataTable
									clickOnHeader={(header) => {
										switchFilters(header);
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
