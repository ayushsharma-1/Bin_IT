import './css/Group.css';
import CreateIcon from './asset/create.png';
import GroupCard from './GroupCard'
 
const Group = () => {
    return (
        <div className='community-group'>
            <div className='community-search-container'>
                <input type="text" placeholder="Search..." className="community-search-input" />
                <div className='community-group-add-icon'>
                    <img src={CreateIcon} alt='Create Group' className='community-create-icon' />
                </div>
            </div>
            <div className='community-group-bar'>
                <h2 className='community-group-GroupBar'>GROUPS</h2>
            </div>
            <div>
                <GroupCard />
            </div>
        </div>
    );
}

export default Group;
