import React, { Component } from 'react' ;
import '../styles/Dropdown.css';


export class Dropdown extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
        this.wrapperRef = null;
        this.setWrapperRef = element => {
            this.wrapperRef = element;
        }
        this.clickOrTouchOutside = this.clickOrTouchOutside.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    hideMenu(){
        this.setState({
            isOpen: false
        })
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    clickOrTouchOutside(e){
        
        if(this.wrapperRef && !this.wrapperRef.contains(e.target)){
            this.hideMenu();
        }
    }

    componentDidMount(){
        document.addEventListener('mousedown', this.clickOrTouchOutside, true);
        document.addEventListener('touchstart', this.clickOrTouchOutside, true);
   }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.clickOrTouchOutside);
        document.removeEventListener('touchstart', this.clickOrTouchOutside);
    }

    

    render() {
        const animationClass = this.props.animation ? '__animated':'';
        return (
            <div 
            className={`__dropdown-menu ${this.props.className} ${this.state.isOpen ?' visible':''} ${animationClass}` }
            onClick={this.toggle}
            ref={this.setWrapperRef}
            >
            {
              React.Children && React.Children.map(this.props.children, (child)=>{
                if(child.type === DropDownOptionList ){
                  return React.cloneElement(child, {
                      visible: this.state.isOpen,
                      animation: this.props.animation
                    }, 
                  )
                } else {
                  return child;
                }
              })
            }
            </div>
          )
    };
} 

export const DropDownOptionList = ({
    visible, ...props
    })=>{
    const animationClass = props.animation ? '__animated':'';
    return(
      <ul className={`__dropdown-list ${visible ?' visible':''} ${props.className ? props.className:''} ${animationClass}`}> 
      {props.children}
      </ul>
    )
  }

export const DropDownItem = ({...props})=>{
    return (
      <li {...props}
      className={`__dropdown-item ${props.className}`}
      id={props.id} 
      onClick={props.onClick}
      >
      {props.children}
      </li>
    )
  }
  

  
