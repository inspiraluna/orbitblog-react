// import OrbitBlogPosts from './components/OrbitBlogPosts';
import React, {useEffect, useState} from "react"
// import React from "react"
import startIPFS from "./ipfs/startIPFS"
import OrbitDB from 'orbit-db'
import Identities from 'orbit-db-identity-provider'
// const OrbitBlogPosts = (props) => {
//     return (<h1>works!</h1>)
// }

const OrbitBlogPosts = (props) => {

    const [ipfsId, setIpfsId] = useState({});
    const [subjectList, setSubjectList] = useState([]);
    const dbName = "/orbitdb/zdpuAwvjEAmyoeLr3sghDNhpGN4vdX2N5dSjqBfXjsEN1cXpJ/nicokrause.com-22"
    // const dbName = "/orbitdb/zdpuAyH4AVwpmGz4p1idaxpni4FwNEW8Z9fF981YDTPCs8wF5/test01"
    // const dbName = "/orbitdb/zdpuAoRJtgSTi1SjHuzC9o5Nvg81eZxoDb2PoC82DXLHDt2EB/decentrasol-22"
    useEffect(() => {
        const init = async () => {
            const ipfs = await startIPFS()
            const id = await ipfs.id()
            console.log("ipfs.id()",id)
            setIpfsId(id)

            console.log('creating orbitdb with dbName', dbName)
            const identity = await Identities.createIdentity({ id: "user" })
            console.log('identity',identity)
            const odb = await OrbitDB.createInstance(ipfs, {directory: "./odb"});
            const feed = await odb.feed(dbName, {//props.dbName
            identity,
            accessController: {
                // type: 'orbitdb'
                write: ["*"]
            }
            })

            feed.events.on('ready', (x,y,z) => {
                console.log(x,y)
                
                feed.all.map((it) => {
                    const curSubjectList = subjectList
                    curSubjectList.push(it.payload.value.subject)
                    setSubjectList(curSubjectList)
                    console.log(it.payload.value.subject)
                })
                // const posts = feed.iterator().collect()
                // console.log(posts)
                // posts.forEach((post) => console.log(post.title + '\n', post.content))
                // Hello
                // World  
              })

              await feed.load()
        // try {
        //   await feed.add({ title: 'Hello', content: 'World'+(new Date().getTime()) })
            //.then(() => {
            // const posts = feed.iterator().collect()
            // posts.forEach((post) => {
            // let data = post.payload.value
            // // setDbname(data.title + '\n', data.content)
            // console.log(data.title + '\n', data.content)
            // Hello
            //  World   
        //   })
        // }catch(ex){
        //   console.err("error",ex)
        // }
        }
        init()

    }, []);
    
    return (
        <div>
            <h1>OrbitBlogPosts Component</h1>    
            <h6>ipfs id:{ipfsId?.id}</h6>
            {subjectList.toString()}
        </div>
    )
} 
        // {subjectList.map(s => (<li key={s}>{s}</li>))} 
export { OrbitBlogPosts };