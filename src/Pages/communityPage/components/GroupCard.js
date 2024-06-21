import Ecllipse from './asset/Ellipse 11.png';
import './css/Group.css'
const GroupCard=()=>{
    return (
    <div className="Group-card">
      <img src={Ecllipse} alt='Ellipse' className='Group-card-Ellipse'/>
      <div className='Group-card-groupname'>
        <p className='Group-card-teamname'>Team Ganga</p>
        <p className='Group-card-Message'>@Janet: On for 9:30 AM then ?</p>
      </div>
    </div>
    );
}
export default GroupCard;