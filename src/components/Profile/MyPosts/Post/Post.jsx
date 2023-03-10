import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://i.pinimg.com/originals/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg'></img>
      {props.message}
      <div>
        <Likes count={props.likesCount} />
      </div>
    </div>
  );
}

const Likes = (props) => {
  return (
    <span>like {props.count}</span>
  );
}

export default Post;
