import React from 'react';
import "../../styles/index.css"


export default function (){
    return(
        <>
        <div class="flexbox-container">
        <h1>Selin Sevinc</h1>
        <div className="flexbox-item flexbox-item-1">
            <img src="https://img.freepik.com/free-photo/view-adorable-persian-domestic-cat_23-2151773838.jpg" width="100%" height="100%"/></div>
        </div>
        <section id="contactUs" class="form-container">
    <h2 class="form-title">Contact Us</h2>
    <form action="#" method="post">
        <label for="name" class="form-label">Name</label>
        <input type="text" id="name" name="name" class="form-input" required/>
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" name="email" class="form-input" required/>
        <label for="message" class="form-label">Message</label>
        <textarea id="message" name="message" class="form-input" rows="5" required></textarea>
        <button type="submit" class="form-button">Send Message</button>
    </form>
</section>
    </>
    )
}