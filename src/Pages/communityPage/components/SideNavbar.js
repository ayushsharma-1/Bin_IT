import './css/SideNavbar.css'
import ChatIcon from './asset/chat.png';
import GroupIcon from './asset/Group.png';
import EventIcon from './asset/Event.png';
import SettingIcon from './asset/setting.png'
import ProfileIcon from './asset/profile.png'

const NavBar=()=>{
    return (
        <div className='community-navbar'>
            <img src={ChatIcon} alt='Chat Icon' className='community-icon-chat'/>
            <img src={GroupIcon} alt='Group Icon' className='community-icon-group'/>
            <img src={EventIcon} alt='Event Icon' className='community-icon-event'/>
            <img src={SettingIcon} alt='Setting Icon' className='community-icon-setting'/>
            <img src={ProfileIcon} alt='Profile Icon' className='community-icon-profile'/>
        </div>
    )
}

export default NavBar;