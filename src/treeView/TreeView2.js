import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import './treeview.css';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Node from './node.js'


const TreeView2 = props => {
    const [data, setData] = useState(props.data);

    useEffect(() => {

    console.log("Here is necesary made some change")
    }, [props.data])


    const toogle = () => {
        let newData = { ...data };
        newData.toggled = !data.toggled;
        setData(newData);
        console.log(data)
    }
    
    return (

        <div className="global-ctn">
            <Node label={data.name} toggled={data.toggled} toogleEvent={toogle}
             icon={data.withIcon}
             idkey={data.name}
              circles={data.withCircles}
               onceClick={()=>{

                toogle();
                if(props.onceClick){props.onceClick({item: data, level: 1, indexes: [0]})}
               }} 
               
               doubleClick={()=>{

                if(props.doubleClick){
                    props.doubleClick({item: data, level: 1, indexes: [0]});
                }
            }}

            rightEvent={()=>{

                if(props.rightEvent){
                    props.rightEvent({item: data, level: 1, indexes: [0]});
                }
            }}

               >

                {data.toggled ? data.children.map((Costumer, index) => {
                    return (
                        <Node key={"firstChild-" + index} toggled={Costumer.toggled} 
                        icon={Costumer.children!=null ?Costumer.withIcon : false } circles={Costumer.withCircles} 
                        idkey={Costumer.name + index}
                       
                        onceClick={() => {

                            if(props.onceClick){
                                let newData = { ...data };
                                newData.children[index].toggled = !newData.children[index].toggled;
                                setData(newData);
                                props.onceClick({item: Costumer, level: 2, indexes: [index]});
                            }
                       
                        }} 

                        doubleClick={()=>{

                            if(props.doubleClick){
                                props.doubleClick({item: Costumer, level: 2, indexes: [index]});
                            }
                        }}

                        rightEvent={()=>{

                            if(props.rightEvent){
                                props.rightEvent({item: Costumer, level: 2, indexes: [index]});
                            }
                        }}

                        
                       label={Costumer.name}
                       toogleEvent={() => {
                        let newData = { ...data };
                        newData.children[index].toggled = !newData.children[index].toggled;
                        setData(newData);
                    }} 
              
                       
                       
                       >

                            {Costumer.toggled ? Costumer.children.map((Site, index2) => {
                                return (


                                    <Node key={"secondChild-" + index2} label={Site.name}
                                        toggled={Site.toggled}
                                        idkey={Site.name + index2}
                                        icon={Site.children?Site.withIcon:false}
                                        circles={Site.withCircles}

                                        onceClick={
                                            () => {
                                                if(props.onceClick){
                                                let newData = { ...data };
                                                newData.children[index].children[index2].toggled = !newData.children[index].children[index2].toggled;
                                                setData(newData);
                                                    props.onceClick({item: Site, level: 3, indexes: [index, index2]});
                                            }
                                        }}

                                        doubleClick={()=>{

                                            if(props.doubleClick){
                                                props.doubleClick({item: Site, level: 3, indexes: [index, index2]});
                                            }
                                        }}

                                        rightEvent={()=>{

                                            if(props.rightEvent){
                                                props.rightEvent(({item: Site, level: 3, indexes: [index, index2]}));
                                            }
                                        }}

                                        toogleEvent={() => {
                                            let newData = { ...data };
                                            newData.children[index].children[index2].toggled = !newData.children[index].children[index2].toggled;
                                            setData(newData);


                                        }}
                                    >
                                        {(Site.toggled && Site.children) ? Site.children.map((Device, index3) => {

                                            return (
                                                <Node key={"thirdChild" + index3} label={Device.name} toggled={true} icon={Device.withIcon}
                                                    circles={Device.withCircles}
                                                    type={'Device'}
                                                    idkey={Device.name + index2}
                                                    onceClick={()=>{

                                                        if(props.onceClick){
                                                            props.onceClick({item: Device, level: 4, indexes: [index, index2, index3]})
                                                        }

                                                    }}

                                                    doubleClick={()=>{

                                                        if(props.doubleClick){
                                                            props.doubleClick({item: Device, level: 4, indexes: [index, index2, index3]});
                                                        }
                                                    }}

                                                    rightEvent={()=>{

                                                        if(props.rightEvent){
                                                            props.rightEvent(({item: Device, level: 4, indexes: [index, index2, index3]}));
                                                        }
                                                    }}
                                                >
                                                </Node>
                                            );
                                        }) : ''}

                                    </Node>
                                );
                            }) : ''}

                        </Node>
                    );
                }) : ''}
            </Node>
        </div>
    )
}

export default TreeView2;