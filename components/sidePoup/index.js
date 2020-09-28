
import "../../Styles/SidePopup.less"
class SidePuPop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
      handleClose = (e) => {
    if (this.nods.contains(e.target)) {
      return;
    }
    this.props.handleClose();
    // console.log(this.nods, "out overlay");
  };
    render() { 
        console.log("iam here ");
        return (    <div onClick={(e) => this.handleClose(e)} className='SideOverlay'>
        
             <div
          className= "SideModal"
          ref={(nods) => {
            this.nods = nods;
          }}>
      
            <div className='Modal_inner_content'>
            <div className='sideNav_content'>
              Expenses
            </div>
            <p style={{padding:"1em"}}>Content ..</p>
          </div>
        </div> </div>);
    }
}
 
export default SidePuPop;