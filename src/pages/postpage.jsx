import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Comment from "../components/Comment";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => setPost(response.data))
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
      .then((response) => {
        setCommentsList(response.data);
      });
  }, [id]);

  return (
    <div>
      {post && <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>}
      <div>
        <h2>Comments</h2>
        {commentsList &&
          commentsList.map((comment) => <Comment key={comment.id} {...comment} />)}
      </div>
      <div>
        <Link to="/">
          <button>Back to startpage</button>
        </Link>
      </div>
    </div>
  );
}
