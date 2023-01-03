import React, { useState } from 'react';
import './skills.scss';
export default function Skills() {
  
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
  skillId:'5',
  skillType: 'Frontend',
  skillName:'Typescript' ,
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
  skillId:'6',
  skillType: 'Frontend',

  skillName:'Redux' ,
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
  
  return (
    <div className='skills' id='skills'>
      <h1> My <span>Skills</span> </h1>
      

      <div class="box-container">
        {data.map((item,index)=>
          
          
           <div class="box">
            <i  >{index +1}</i>
            <h3>{ item.skillName}
            </h3>
            <span>{item.skillLavel}</span>
            
            <p>{item.skillDescribtion}</p>
        </div>)
}
      </div>
    </div>
  )
}
