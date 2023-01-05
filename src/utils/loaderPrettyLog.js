import {prettyLog} from 'pretty-browser-log'

prettyLog.addManyLogStyles([
        {name:'title',badge:'Title:',badgeStyle:'',messageStyle:'color:black;font-size:1rem;font-weight:bold;'},
        {name:'danger',badge:'Danger:',badgeStyle:'background-color:red;',messageStyle:'color:red'},
        {name:'todo',badge:'ToDo:',badgeStyle:'background-color:red',messageStyle:'background-color:yellow;color:red;'},
        {name:'action',badge:'Action:',badgeStyle:'background-color:orange',messageStyle:'color:orange'},
        {name:'noLabel',badge:'',badgeStyle:'border: 0',messageStyle:'color:#4CD964; border: 1px solid;border-radius:0.4rem;padding:2px 6px'},
        {name:'dot',badge:'  ',badgeStyle:'background-color:orange ;border-radius:50%',messageStyle:''},
        {name:'success',badge:'Success:',badgeStyle:'background-color:#4CD964',messageStyle:'color:#4CD964;'},
        // {name:'',badge:'',badgeStyle:'',messageStyle:''},
    ])
export const log = prettyLog