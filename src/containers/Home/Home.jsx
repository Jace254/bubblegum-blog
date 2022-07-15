
import { BlogList } from "../../components";
import useFetch from "../../hooks/useFetch";


const Home = () => {
    const { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs');
    
    return ( 
        <div className="home">
            {error &&  <div>{ error }</div> }
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={ blogs } title="All Blogs" />}
        </div>
     );
}

export default Home;