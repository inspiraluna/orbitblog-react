
import React, {useEffect, useState} from "react"
import { useOrbitDb } from "@decentrasol/react-orbitdb";
import Identities from 'orbit-db-identity-provider'

const BlogPosts = (props) => {

    const [postCardList, setPostCardList] = useState([]);
    const [identity, setIdentity] = useState();
    const testOrbit02 = "/orbitdb/zdpuArD5LUgWh4ygesYdH3fzfrPeeB36hHDH3PJzB5Wfp3mLj/OrbitPinner02"
    // const dbName = "/orbitdb/zdpuAwvjEAmyoeLr3sghDNhpGN4vdX2N5dSjqBfXjsEN1cXpJ/nicokrause.com-22"
    const dbName = testOrbit02 
      
    const { db, records } = useOrbitDb(dbName, {
        type: "feed",
        create: true,
        public: true,
        identity
    })


    useEffect(() => {
        console.log("useEffect blogposts")
        const init = async () => {
         
            const tagFilter = props.tagFilter
            console.log("tagFilter",tagFilter)
            const _identity = await Identities.createIdentity({ id: "user" });

            setIdentity(_identity);

            const curPostCardList = []
            const unsortedPosts = records?records.slice(0,props.cards || records.length):[]
            
            const sortedPosts = unsortedPosts.sort((a,b) => {
                return new Date(b.postDate) - new Date(a.postDate);})


            sortedPosts.map( it => {
                if(props.postcard !== undefined){
                    const postcardComponent = props.postcard
                    if(tagFilter && it.tags.indexOf(tagFilter)!==-1)
                        curPostCardList.push(postcardComponent(it,db._ipfs))
                    else if(tagFilter===undefined) 
                        curPostCardList.push(postcardComponent(it,db._ipfs))
                    
                }
            })
            setPostCardList(curPostCardList)
        };
        init();        
    }, [db]);
    
    return postCardList
} 
export default BlogPosts