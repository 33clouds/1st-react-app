import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
  );
}

export default Profile;
