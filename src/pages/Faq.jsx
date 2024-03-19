import React from 'react'
import { FAQData } from '../textFlies/FAQ'

function Faq() {
  return (
    <div>
        {
          FAQData.map((question, index)=> 
          <ul key={index}>
            <li>{question.title}</li>
            <p>{question.content}</p>
          </ul>
          )   
        }

    </div>
  )
}

export default Faq