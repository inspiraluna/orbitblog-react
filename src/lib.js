// import OrbitBlogPosts from './components/OrbitBlogPosts';
import React, {useEffect, useState} from "react"
import startIPFS from "./ipfs/startIPFS"

const OrbitBlogPosts = () => {

    const [ipfsId, setIpfsId] = useState();
    
    useEffect(() => {
        const init = async () => {
            const ipfs = await startIPFS()
            const id = await ipfs.id()
            setIpfsId(id)
        }
        init()

    }, []);
    
    return (<h1>OrbitBlogPosts Component {ipfsId} </h1>)
}
export { OrbitBlogPosts };