import React, { useState, useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import './TabController.css'


  /**
   * 
   * Props For the component 
   * @param {array}     tabs: "Array of tabs instead in the tabs controller"
   * @param {function}  closeTab : "Function will be executed after close a tab"
   * @param {function}  selectTab: "Function after select a tab"
   * @param {string}    activeTab: "String for the Title of tab will be oppenned at begin"
   * Tabs Object Structure
   * @param {string}    title: "Title of the tab"
   * @param {any}       content: "Content will be showed after select a tab"
   * @param {string}    iconName name of the icon to show in the tab
   * @param {object}    iconStyle object with the style for the default icon
   * @param {object}    iconStyleSelected Object with the style for the icon seleceted
   * @param {string}    icon: "String for the Icon of the tab can beb -> 'icon-camera, icon-dashboard, icon-map'",
   * @param {boolean}   closeable: "boolean to indicate if a tab can be close it ""
   */

function TabController(props){

const [tabs, setTabs]= useState([]);
const [activeTab, setActiveTab]= useState(props.activeTab);
const [lastTabSelected, setLastTabSelected]= useState(props.activeTab);
const [showControls, setShowControls]= useState(false);

console.log("SHOW CONTROLS",showControls)
const closeTab = (e, tab, index) => {
  e.stopPropagation();
  if (tab.closeable) {
    if (tab.title === activeTab) {
    setActiveTab( (activeTab === lastTabSelected ? tabs[index - 1].title : lastTabSelected) )
    } else {
    } props.closeTab(index);
  }
}
/**
 * To set a new active tab
 * @param {tab} newActive  the new active tab 
 * 
 */
const selectTab = (newActive) => {

  setLastTabSelected(activeTab);
  setActiveTab(newActive);
  props.selectTab(activeTab);
}


const moveLeft = () => {
  scrollLeft(document.getElementsByClassName('nav'), -300, 1000);
}
const moveRight = () => {
  scrollRight(document.getElementsByClassName('nav'), -300, 1000);
}

const scrollLeft = (elements, change, duration) => {
  let element = elements[0];
  var currentTime = 0,  
    increment = 20;
  var animateScroll = function () {
    currentTime += increment;
    element.scrollLeft -= 1;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}



const scrollRight = (elements, change, duration) => {
  let element = elements[0];
  var currentTime = 0,
    increment = 10;
  var animateScroll = function () {
    currentTime += increment;
    element.scrollLeft += 1;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

useEffect(()=>{},[showControls])

useEffect(()=>{

  console.log("NUEVA TAB")
  var nav = document.getElementsByClassName("nav");
  if(nav){

    console.log("TABS", tabs)
//cada caja de la camara mide 134px su sumatoria debe ser menor al clienWidth del nav para que 
// caso contrario se muestran los controles
let maxWidth= nav[0].clientWidth;
let realWidth=138*tabs.length;  
console.log("MAX WIDTH", maxWidth)
console.log("REAL WIDTH", realWidth);
if(realWidth>maxWidth){

  console.log("CLARO QUE SE DEBEN MOSTRAR LOS CONTROLES")
setShowControls(true);
}else{
  console.log("No DEBEN MOSTRAR LOS CONTROLES")
  setShowControls(false);
}
  }

},[tabs])

useEffect(() => {
//Update the document title using the browser API
  setTabs(props.tabs);

}, [props.tabs]);
//Default Styles for icons
const  iconStyle={
  color:"#ffff",
  marginRight:"5px",
  fontSize: '14px',
  alignSelf:"center"
    }
const iconStyleSelected={
      color:"#ef7622",
      marginRight:"5px",
      fontSize: '14px',
      alignSelf:"center"
    };

return(
  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example"
  activeKey={activeTab}
  onSelect={(activeTab) => { selectTab(activeTab) }}
>


  {tabs.map((tab, index) => {

    return (
      <Tab key={index} eventKey={tab.title} title={<div className="tab-ctn">
      <i className={tab.iconName}  style={tab.title===activeTab? tab.iconStyle?tab.iconStyle:iconStyle: tab.iconStyleSelected?tab.iconStyleSelected:iconStyleSelected} ></i>
        {tab.title} <i onClick={(e) => { closeTab(e, tab, index) }}
          className={tab.closeable ? activeTab === tab.title
            ? 'close-tab-active' : 'close-tab' : ''}  ></i> {activeTab === tab.title || tabs.length-1 === index?'':<div className="line-side"></div> }  </div>}  >
        {/**
        Here Goes the content of the  Tab
        */}

        {/**Those are the btn controllers for the scrollbar */}
        {showControls ? <div className="btn-left-scroll" onClick={() => { moveLeft() }} > </div> : ''}
          {showControls ?
            <div className="btn-right-scroll" onClick={() => { moveRight() }}>  </div> : ''}

      

        <div className="Tab-content">

          {tab.content}
        </div>
      </Tab>
    );
  })}

</Tabs>


);
}
export default TabController;
