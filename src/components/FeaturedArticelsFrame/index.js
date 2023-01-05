import React, {  useState,useEffect } from "react"
import { useOrbitDb } from "@decentrasol/react-orbitdb";
import Identities from 'orbit-db-identity-provider'
import OrbitImageComponent from "../OrbitImageComponent";

import Frame26 from "../Frame26";
import Frame23 from "../Frame23";

const FeaturedArticelsFrame = (props) => {

    const [identity, setIdentity] = useState();
  
    useEffect(() => {
      const init = async () => {
        const _identity = await Identities.createIdentity({ id: "user" });
        setIdentity(_identity);
      };
      init();
    }, []);
    // const dbNicoKrause22 = "/orbitdb/zdpuAwvjEAmyoeLr3sghDNhpGN4vdX2N5dSjqBfXjsEN1cXpJ/nicokrause.com-22"
    const testOrbit02 ="/orbitdb/zdpuArD5LUgWh4ygesYdH3fzfrPeeB36hHDH3PJzB5Wfp3mLj/OrbitPinner02"
    const { db, records } = useOrbitDb(testOrbit02, {
        type: "feed",
        create: true,
        public: true,
        identity
    })

  console.log("db",db)
  console.log("records",records)
  //1. Get first 3 Artikls from records
  const article0Subject = records?records[0]?.subject:'loading' //records[0]?.subject
  const article1Subject = records?records[1]?.subject:'loading' //records[1]?.subject
  const article2Subject = records?records[2]?.subject:'loading' //records[2]?.subject

  const photoCID0 = records?records[0]?.photoCID:"QmdhR6iJYDGVhBw5PQssgtLUC6aqJ6CzfwbiUYPXrDpSoi" 
  const photoCID1 = records?records[1]?.photoCID:"QmdhR6iJYDGVhBw5PQssgtLUC6aqJ6CzfwbiUYPXrDpSoi" 
  const photoCID2 = records?records[2]?.photoCID:"QmdhR6iJYDGVhBw5PQssgtLUC6aqJ6CzfwbiUYPXrDpSoi" 
  
    return (
            <div className="frame-29">
                <div className="article-one">
                    <OrbitImageComponent className="rectangle-35" ipfs={db?._ipfs} alt={article0Subject} src={photoCID0} /> 
                    <Frame26 isTheDynamicIslandWorthIt={article0Subject} />
                </div>
                <div className="article-two">
                    <OrbitImageComponent className="rectangle-35"  ipfs={db?._ipfs}  alt={article1Subject} src={photoCID1} /> 
                    <Frame26 isTheDynamicIslandWorthIt={article1Subject} />
                </div>
                <div className="article-three">
                    <OrbitImageComponent className="rectangle-35"  ipfs={db?._ipfs}  alt={article2Subject} src={photoCID2} />    
                    <div className="frame-28">
                    <p className="how-to-design-your-first-ux-portfolio valign-text-middle sfprotext-regular-normal-black-20px">
                        {article2Subject}
                    </p>
                    <Frame23 />
                    </div>
                </div>
            </div>
)
}
export default FeaturedArticelsFrame