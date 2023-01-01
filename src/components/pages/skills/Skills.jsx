import React, { useState } from 'react';
import './skills.scss';
export default function Skills() {
  const [skill,setskill] = useState('Frontend');

  const [activeSkill, setactiveSkill] = useState('frontEnd')
 
  const data=[
    {
       skillId:'1',
       skillType: 'Frontend',
       skillName:'HTML5' ,
       skillLavel:'intermediate' ,
       skillDescribtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!'
    },
    {
      skillId:'2',
      skillType: 'Frontend',
      skillName:'CSS3' ,
      skillLavel:'intermediate' ,
      skillDescribtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!'
   },
   {
    skillId:'3',
    skillType: 'Frontend',
    skillName:'SASS' ,
    skillLavel:'intermediate' ,
    skillDescribtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!'
 },
   {
    skillId:'4',
    skillType: 'Frontend',
    skillName:'Bootstrap' ,
    skillLavel:'intermediate' ,
    skillDescribtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!'
 },
 
{
  skillId:'5',
  skillType: 'Frontend',
  skillName:'Javascript' ,
  skillLavel:'intermediate' ,
  skillDescribtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!'
},

{
  skillId:'6',
  skillType: 'Frontend',

  skillName:'React Js' ,
  skillLavel:'intermediate' ,
  skillDescribtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!'
},
{
  skillId:'1',
  skillType: 'Backend',

  skillName:'NodeJs' ,
  skillLavel:'intermediate' ,
  skillDescribtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!'
},
{
  skillId:'2',
  skillType: 'Backend',

  skillName:'ExpressJs' ,
  skillLavel:'intermediate' ,
  skillDescribtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!'
},
{
  skillId:'3',
  skillType: 'Backend',

  skillName:'MongoDB' ,
  skillLavel:'intermediate' ,
  skillDescribtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!'
},
{
  skillId:'4',
  skillType: 'Backend',

  skillName:'Mongoose' ,
  skillLavel:'intermediate' ,
  skillDescribtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!'
},

{
  skillId:'6',
  skillType: 'Backend',
  skillName:'MySQL' ,
  skillLavel:'intermediate' ,
  skillDescribtion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!'
},


 
  ]
  const changeSkill=(skill)=>{
    setskill(skill)
    
  }
  
  
  return (
    <div className='skills' id='skills'>
      <h1> My <span>Skills</span> </h1>
      <div className="skilltoggle">
        <span onClick={()=>{changeSkill('Frontend');setactiveSkill('frontEnd')}} className={(activeSkill==='frontEnd')? "skillType activate":"skillType"}>Frontend</span>
        <span onClick={()=>{changeSkill('Backend');setactiveSkill('backEnd')}} className={(activeSkill==='backEnd')? "skillType activate":"skillType"}>Backend</span>
        <span  onClick={()=>{changeSkill('MobailApps');setactiveSkill('mobailApps')}} className={(activeSkill==='mobailApps')? "skillType activate":"skillType"}>Mobail Apps</span>
      </div>

      <div class="box-container">
        {data.map((item)=>{
          if(skill=='Frontend' && item.skillType=='Frontend'){
          
          return( <div class="box">
            <i  >{item.skillId}</i>
            <h3>{ item.skillName}
            </h3>
            <span>{item.skillLavel}</span>
            
            <p>{item.skillDescribtion}</p>
        </div>)
          }
          else if(skill=='Backend' && item.skillType=='Backend'){
            return( <div class="box">
            <i  >{item.skillId}</i>
            <h3>{ item.skillName}
            </h3>
            <span>{item.skillLavel}</span>
            
            <p>{item.skillDescribtion}</p>
        </div>)



          }
          else if(skill=='MobailApps' && item.skillType=='MobailApps'){
            return( <div class="box">
            <i  >{item.skillId}</i>
            <h3>{ item.skillName}
            </h3>
            <span>{item.skillLavel}</span>
            
            <p>{item.skillDescribtion}</p>
        </div>)



          }
          
          
         
})}
    
        
    
        
        
    
      </div>
    </div>
  )
}
