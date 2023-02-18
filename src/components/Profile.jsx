import p from './Profile.module.css';

const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={p.posts}>
          <div className={p.item}>
            post 1
          </div>
          <div className={p.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
