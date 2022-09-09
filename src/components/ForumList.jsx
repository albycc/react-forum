import { useEffect, useState } from "react";
import axios from "axios";
import ForumPost from "./ForumPost";

function ForumList(){
    const [postList, setPostList] = useState([])
    useEffect(() => {
        axios.get(' https://jsonplaceholder.typicode.com/posts').then(response => setPostList(response.data))
    }, [])
    return <div>
        {postList.map(post => <ForumPost key={post.id} {...post} />)}
    </div>
}

export default ForumList;