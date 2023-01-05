import React, { useState, useEffect } from "react"
import {loadImgURL} from '../utils/helper'
// import { useIpfs } from "@decentrasol/react-orbitdb";

const OrbitImageComponent = (props) => { 

    const [url, setUrl] = useState()
    // const [ipfs] = useIpfs();
    // if(!props.ipfs) throw(new Error("please add ipfs to props"))
    useEffect(() => {
        const loadData = async (cid) => {
            console.log('loading image',cid)
            const _url = await loadImgURL(props.ipfs,cid)
            setUrl(_url)
        }
        loadData(props.src)       
    }, [props]);
    console.log('props',props)
    // console.log('ipfs',ipfs)
    return (<img {...props} src={url} alt={props.alt} />)
}
export default OrbitImageComponent 