import style from "./Inicio.module.css";
import posts from "json/posts.json";
import PostCard from "componentes/PostCard";


export default function Inicio() {
  return (
      <ul className={style.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
            </li>


        ))}
      </ul>

  );
}
