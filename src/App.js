import React, {useState} from 'react';
import logo from './logo.svg';
import { Dropdown, DropDownOptionList, DropDownItem } from './components/Dropdown';
import Arrow from './components/Arrow';
import './App.css';

function App() {
  let [currentOption1, setCurrentOption1] = useState('');
  let [currentOption2, setCurrentOption2] = useState('');
  let [currentOption3, setCurrentOption3] = useState('');

  let items = [
    {
      name:'item-1',
      text: 'Item 1 has a very very big text in it'
    },
    {
      name:'item-2',
      text: 'Item 2'
    },
    {
      name:'item-3',
      text: 'Item 3'
    },
    {
      name:'none',
      text: 'none'
    },
  ];

  const dropdownChange = (id, item) => {

    switch (id) {
      case '1':
        setCurrentOption1(item)
        break;
      case '2':
        setCurrentOption2(item)
        break;
      case '3':
        setCurrentOption3(item)
        break;
    
      default:
        break;
    }

  }

  let dropdownText1 = (!currentOption1 || currentOption1 === 'none') ? 'Dropdown': items.filter((item)=>currentOption1.name===item.name)[0].text;
  let dropdownText2 = (!currentOption2 || currentOption3 === 'none') ? 'Dropdown': items.filter((item)=>currentOption2.name===item.name)[0].text;
  let dropdownText3 = (!currentOption3 || currentOption3 === 'none') ? 'Dropdown': items.filter((item)=>currentOption3.name===item.name)[0].text;
  return (
    <div className="App">
      <header className="App-header">
        <p className='signature'>
        General Base DropDown Component
        </p>
      </header>

      <div className='column'>
      <h3>Default Version</h3>
        <Dropdown className=''>
            <span className='elipsis'>{dropdownText1}</span>
            <DropDownOptionList>
            {
              items.map((item, index)=>{
                return (
                  <DropDownItem key={`${item.name}-${index}-${Date.now()}`} onClick={()=>dropdownChange('1',item)}>
                    <span className='elipsis'>{item.text}</span>
                  </DropDownItem>
        
                );
              })
            }
            </DropDownOptionList>
          </Dropdown>
      </div>

      <div className='column'>
        <h3>Pixel Perfect Version</h3>
        <div className ='row'> 
          <p>Testing layout</p>
          <Dropdown className='pixel-perfect'>
            <span className='elipsis'>{dropdownText2}</span>
            <Arrow className='dropdown' position={'down'} color={'white'}/>
            <DropDownOptionList>
            {
              items.map((item, index)=>{
                return (
                  <DropDownItem key={`${item.name}-${index}-${Date.now()}`} onClick={()=>dropdownChange('2',item)}>
                    <span className='elipsis'>{item.text}</span>
                  </DropDownItem>
        
                );
              })
            }
            </DropDownOptionList>
          </Dropdown>
        </div>
        <div className ='row'> 
          <p>With Animation</p>
          <Dropdown className='pixel-perfect' animation={true}>
            <span className='elipsis'>{dropdownText3}</span>
            <Arrow className='dropdown' position={'down'} color={'white'}/>
            <DropDownOptionList>
            {
              items.map((item, index)=>{
                return (
                  <DropDownItem key={`${item.name}-${index}-${Date.now()}`} onClick={()=>dropdownChange('3',item)}>
                    <span className='elipsis'>{item.text}</span>
                  </DropDownItem>
        
                );
              })
            }
            </DropDownOptionList>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default App;
