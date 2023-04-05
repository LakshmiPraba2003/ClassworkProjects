import React from 'react'

export default function Listfunction() {
    var fruits=["apple","orange","grapes","watermelon"]
    var displayfruits=fruits.map(fname=>{return <li>{fname}</li>})/*outside the function */
    const stuinfo=[{id:1,name:"abc"},{id:2,name:"def"},{id:3,name:"ghi"},{id:4,name:"jkl"},{id:5,name:"mno"},{id:6,name:"pqr"}]
  return (
    <div>
	<h2>question5</h2>
	{displayfruits}
    {stuinfo.map((sinfo)=>{return <li key={sinfo.id}>{sinfo.id}   {sinfo.name}</li>})}
    <TryCatch name="lakshmi"></TryCatch>
    </div>
	)
}
function TryCatch(props) {
  try{
      if(props.name==="lakshmi")
      {
          throw new Error("invalid user")
      }
  }
  catch(error)
  {
      console.log(error)
     // document.write("invalid user")
  }
  
return (
  <div><p>{props.name}</p></div>
)
}