import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './dataTable.css'




const Headers = (props) => {
    return (
        <th className={props.headerSelected ===  props.index? "headerSelected" : ""} style={{ width: props.header.size }} 
        onClick={() => { props.onClickHeader(props.header,props.index ) }}>
            {props.header.name}
        </th>
    )
}

const TD = (props) => {
    return (
        <td>
            {props.title}
        </td>
    )
}

/*const getPage = (props) => {
    this.setState({ isLoading: true });
    props.pageNumber = props.pageNumber || 1;
    let params = {
        page: props.pageNumber,
        term: this.state.searchTerm,
        dateStart: this.state.dateStart,
        dateEnd: this.state.dateEnd
    }
    appDispatch({
        type: UPDATE_USER,
        payload:
            apiService.put(`/cameras/${appState.user.id}`, {
                id: appState.user.id,
                type: 'UPDATE_PASSWORD',
                password: formData.currentpassword,
                newPassword: formData.newpassword
            })
    })
    axios.get(`${BASE_URL}/device/all/`, { params: params })
        .then(res => {
            let pageCopy = this.state.page;
            pageCopy = res.data;
            this.setState({ page: pageCopy, isLoading: false });
        }).catch(() => {
            this.setState({ isLoading: false });
        });
}*/


const Pagination = (props) => {
    return (
        <div>
        <Col md="1" style={{borderRight:'1px solid #D8D8D8'}}>
            <button type="button" className="leftPage"  onClick={props.currentPage !== 1 ? () => {props.fetchItems(1)} : null}></button> 
            <button type="button" className="leftPageEnd"  onClick={props.currentPage !== 1 ? () =>  {props.fetchItems(props.currentPage - 1)} : null}></button>
        </Col>
            <Col md="2" style={{borderRight:'1px solid #D8D8D8'}}> Page <input className="numberPage" ></input> of 1 </Col>
        <Col md="6">
            <button type="button" className="rigthPageEnd" onClick={props.currentPage !== props.pages ? () => {props.fetchItems(props.currentPage + 1)} : null} ></button> 
            <button type="button" className="rigthPage" onClick={props.currentPage !== props.pages ? () => {props.fetchItems(props.pages)} : null}></button>
        </Col>
        </div>
    )
}

const DataTable = props => {
    
    const [headers, setHeaders] = useState([{ name: "Personaje", keyField: "name", size:"20%"},
    { name: "status", keyField: "status" ,size:"20%"},
    { name: "specie", keyField: "species" , size:"20%" },
    { name: "Gender", keyField: "gender", size:"20%" },
    { name: "Actions", keyField: "status", size:"20%" }]);
    const [counter, setCounter] = useState(10);
    const [data, setData] = useState([]);
    const [dataCopy, setDataCopy] = useState([]);
    const [forceUpdate, setForceUpdate] = useState(false);
    const [headerSelected, setHeaderSelected] = useState(0);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/?page=19')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log("data",myJson.results);
                let newRes = [];
                myJson.results.map((item) => {
                    delete item.episode;
                    delete item.created;
                    delete item.location;
                    delete item.origin;
                    delete item.type;
                    delete item.url;
                    delete item.image;
                    delete item.id;
                    newRes.push(item);
                })
                setData(newRes);
                setDataCopy(newRes);
            });
    }, [])


    useEffect(() => {
        updateDataByCounter();
    }, [forceUpdate])
    const updateDataByCounter = () => {
        if (data.length >= counter) {
            let dataAux = [...data];
            let newData = dataAux.splice(0, counter);
            console.log(dataAux);
            setDataCopy(newData);
        } else {
            console.log("Es menor a 10 en UpdateByCounter")
        }
    }

    //Partiendo el arry por el counter
    useEffect(() => {
        console.log("En el 2do useEffect->", data)
        if (data.length >= counter) {
            let dataAux = [...data];
            let newData = dataAux.splice(0, counter);
            console.log(dataAux);
            setDataCopy(newData);
            setForceUpdate(!forceUpdate);
        } else {
            console.log("Es menor a ", counter)
        }
    }, [data]);

    const onClickHeader = (header,index) => {
        setHeaderSelected(index)
        props.clickOnHeader(header);
        console.log("click on header ->", header)
    }

    class CustomToggle extends React.Component {
        constructor(props, context) {
          super(props, context);
      
          this.handleClick = this.handleClick.bind(this);
        }
        handleClick(e) {
          e.preventDefault();
          this.props.onClick(e);
        }
        render() {
          return (
            <div className="counterButton"  href="" onClick={this.handleClick}>
              {this.props.children}
            </div>
          );
        }
    }

  

    /**
     * 
     * props
     * striped booleano
     * headers array Object
     * data array Object
     * paginador bool
     * Countitems
     * 
     */
    return (
        <div >
            <Table   hover className="tableBottom">
                <thead className="tableHead">
                   <tr> 
                   <th></th>
                    {headers.map((header, index) => {
                            return (
                                <Headers key={header.name+index} header={header} onClickHeader={onClickHeader} index={index} headerSelected={headerSelected}></Headers>
                            );
                    })}
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataCopy.length > 0 ?
                        dataCopy.map((item, index) => {
                            return (
                                <tr key={index}>
                                <td className="blankSpace"></td>
                                    {
                                        headers.length > 0 ?
                                            headers.map((header, index) => {
                                                return (
                                                    <TD  key={item[header.keyField]+index} title={item[header.keyField]} />
                                                )
                                            })
                                      
                                            : ''
                                    }
                                <td className="blankSpace"></td>
                                </tr>
                            );
                        })
                        : null}
                </tbody>
            </Table>   
            <Container>
                    <Row  className="footerTable">
                        <Col md="1" style={{borderRight:'1px solid #D8D8D8'}}> 
                        <Dropdown className="dropdown-table">
                            <Dropdown.Toggle  as={CustomToggle} id="dropdown-custom-components">
                            {counter}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => { setCounter(10); setForceUpdate(!forceUpdate) }} >10</Dropdown.Item>
                                <Dropdown.Item onClick={() => { setCounter(15); setForceUpdate(!forceUpdate) }}  >15</Dropdown.Item>
                                <Dropdown.Item onClick={() => { setCounter(20); setForceUpdate(!forceUpdate) }} >20</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Col>
                        {/*<Pagination
                            fetchItems={getPage}
                            currentPage={+state.page.currentPage}
                            pages={state.page.totalPage}
                        />*/}
                    </Row>
            </Container>

           
        </div>

    );

}



export default DataTable;