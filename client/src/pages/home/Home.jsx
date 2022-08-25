import {React, useEffect,useState} from 'react'
import "./home.css"
import Header from '../../components/header/Header';
import SinglePost from "../../components/Singlepost/SinglePost"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import axios from "axios"
import { useLocation } from 'react-router-dom';

export default function Home() {

    const [posts, setPosts] = useState([]);
    const {search} = useLocation()

    useEffect(() => {
        const fetchPost = async ()=>{
            try {
                const response = await axios.get('/post' + search);
                setPosts(response.data)
              } catch (error) {
                console.log(error);
              }
        }
        fetchPost()
    }, [search])

    
    return (
        <div>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </div>
    )
}
