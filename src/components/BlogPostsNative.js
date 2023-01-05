
import React, {useEffect, useState} from "react"
import startIPFS from "../ipfs/startIPFS"
import OrbitDB from 'orbit-db'
import Identities from 'orbit-db-identity-provider'

const BlogPostsNative = (props) => {

    const [ipfsId, setIpfsId] = useState({});
    const [postCardList, setPostCardList] = useState([]);

    const testOrbit02 = "/orbitdb/zdpuArD5LUgWh4ygesYdH3fzfrPeeB36hHDH3PJzB5Wfp3mLj/OrbitPinner02"
    // const dbName = "/orbitdb/zdpuAwvjEAmyoeLr3sghDNhpGN4vdX2N5dSjqBfXjsEN1cXpJ/nicokrause.com-22"
    const dbName = testOrbit02             
    useEffect(() => {
        const init = async () => {
            const cards = props.cards!==undefined?props.cards:-1
            const tagFilter = props.tagFilter
            const ipfs = await startIPFS()
            const id = await ipfs.id()
            console.log("ipfs.id()",id)
            setIpfsId(id)

            console.log('creating orbitdb with dbName', dbName)
            const identity = await Identities.createIdentity({ id: "user" })
            console.log('identity',identity)
            const odb = await OrbitDB.createInstance(ipfs, {identity});
            const feed = await odb.feed(dbName, {identity, accessController: { type: 'orbitdb'}})

            feed.events.on('ready', (x,y,z) => {
                const curPostCardList = []
                const unsortedPosts = feed.iterator({limit:cards}).collect()
                console.log('unsortedPosts',unsortedPosts)
                const sortedPosts = unsortedPosts.sort((a,b) => {return new Date(b.payload.value.postDate) - new Date(a.payload.value.postDate);})
                console.log('sortedPosts',sortedPosts)
                sortedPosts.map( it => {
                    if(props.postcard !== undefined){
                        console.log("adding",it.payload.value)
                        const postcardComponent = props.postcard
                        if(tagFilter && it.tags.indexOf(tagFilter)!==-1)
                            curPostCardList.push(postcardComponent(it.payload.value))
                        else if(tagFilter===undefined) 
                            curPostCardList.push(postcardComponent(it.payload.value))
                        
                    }
                })
                setPostCardList(curPostCardList)
              })

              await feed.load()
        }
        init()

    }, []);
    
    return postCardList
} 
export default BlogPostsNative