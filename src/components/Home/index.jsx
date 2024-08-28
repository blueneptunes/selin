import React from 'react'
import Gallery from '../Gallery';
import "../../styles/index.css"
import "../../styles/w3.css"

export default () => {
  return (
    <div>
       <Gallery/>
      <h1 id="homePageTitle"></h1>
      <div class="background-div">
        <h1>Hi,I'm Selin</h1> <br/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, accusantium est! Nobis quidem qui repellendus explicabo laboriosam, quas impedit modi tempore quam dignissimos.</p>
        <br/>
        <div className="flexbox-container">
            <div className="flexbox-item flexbox-item-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kOhFfgzjJjz-OEtITm4nqzjWer3qw697IBbusDcr2PVvr0lqgWk2aYeCR8aB9XxWH84&usqp=CAU.svg" alt="Description 1" className="flexbox-image" />
            </div>
            <div className="flexbox-item flexbox-item-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdEUjx_FcuKCFCl-g_iOkdg664sU2sikoKuvVAn6N5htnvWytWJiT_uV2pncLGijnkUCk&usqp=CAU.svg" alt="Description 2" className="flexbox-image" />
            </div>
            <div className="flexbox-item flexbox-item-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVzsQaiokgScS4aqzuHHW_DAhYLBNSuZs14ote6oyZkAVZ0SesvFXBkUNl1G8Fgz5x08&usqp=CAU.svg" alt="Description 3" className="flexbox-image" />
            </div>
        </div>
    </div>
    </div> 
  )
}