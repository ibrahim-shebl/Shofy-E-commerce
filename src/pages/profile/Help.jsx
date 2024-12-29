import React from 'react'
import { Accordion } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa";
const Help = () => {
    const styleAccordion = {
        backgroundColor: '#fff',
        marginTop: '25px',
        borderRadius: '10px 10px   0  0',
        borderColor: '#3c3c3b',
        boxShadow: '0 0 10px #3c3c3b',
      
      };
  return (
    <Accordion dir='ltr' collapseAll style={styleAccordion}>
        
    <Accordion.Panel  className='bg-black-color-dark  shadow-md '>
      <Accordion.Title className='text-main-color font-bold py-1.25 px-0 focus:outline-none rounded-lg focus:ring-0 hover:bg-secondary-color'>
        <div className='flex justify-between items-center gap-5 ml-2.5'>
        Help
        </div>
      </Accordion.Title>
      <Accordion.Content>
      <div class=" rounded-lg relative">
            <h2 class="text-center md:text-xl mt-0">Welcome to Shofy Center</h2>
            <div class="flex items-center">
              <div className='mt-4'>
                <span class="block mb-2 font-bold">Mr. Mohamed, manger of the center</span>
                <span class="text-black-color-dark">You will be answered as soon as possible</span>
              </div>
            </div>
            <div class="leading-relaxed border-t border-b border-gray-200 text-center py-8 mt-8 mb-8 md:text-lg text-base">
            If you need anything, do not hesitate to ask, leave your question in a WhatsApp message, and we will contact you as soon as possible. Thank you.
            </div>
            <div class="flex items-center justify-center text-black-color-dark">
              
              <div className='flex items-center '>
              
              <span className='md:text-xl'>1025946540 +20</span>
              <FaWhatsapp className='mr-4 text-2xl' />
              </div>
               
            </div>
          </div>
      </Accordion.Content>
    </Accordion.Panel>
  
</Accordion> 
  )
}

export default Help