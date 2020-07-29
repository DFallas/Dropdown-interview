import React, {useState} from 'react';
import logo from './logo.svg';
import { Dropdown, DropDownOptionList, DropDownItem } from './components/Dropdown';
import Arrow from './components/Arrow';
import './App.css';

function App() {
  let [currentOption, setCurrentOption] = useState('');

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

  const dropdownChange = (item) => {
    setCurrentOption(item.name);
  }

  let dropdownText = (!currentOption || currentOption === 'none') ? 'Dropdown': items.filter((item)=>currentOption===item.name)[0].text;
  return (
    <div className="App">
      <header className="App-header">
        <p className='signature'>
          David Fallas's LogN interview
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className='column'>
        <h3>General Base DropDown Component</h3>
        <Dropdown className=''>
            <span className='elipsis'>{dropdownText}</span>
            <DropDownOptionList>
            {
              items.map((item, index)=>{
                return (
                  <DropDownItem key={`${item.name}-${index}-${Date.now()}`} onClick={()=>dropdownChange(item)}>
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
            <span className='elipsis'>{dropdownText}</span>
            <Arrow className='dropdown' position={'down'} color={'white'}/>
            <DropDownOptionList>
            {
              items.map((item, index)=>{
                return (
                  <DropDownItem key={`${item.name}-${index}-${Date.now()}`} onClick={()=>dropdownChange(item)}>
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
            <span className='elipsis'>{dropdownText}</span>
            <Arrow className='dropdown' position={'down'} color={'white'}/>
            <DropDownOptionList>
            {
              items.map((item, index)=>{
                return (
                  <DropDownItem key={`${item.name}-${index}-${Date.now()}`} onClick={()=>dropdownChange(item)}>
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
