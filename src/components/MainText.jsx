import React from 'react';

export default function MainText(){
    return (
        <>
        <div className="buttons">
            <button className="btn btn-envelope"><i class="fa-solid fa-envelope fa-xl"></i>Email</button>
            <button className="btn btn-linkedin"><i class="fa-brands fa-linkedin fa-xl"></i>LinkedIn</button>
        </div>
        <div className="main-text">
            <h2>About</h2>
            <p>I am a diligent EE and CS student seeking a Frontend or Backend Web development internship. I'm ardent about building neat applications and effectively working through compelling engineering problems.</p>
            <h2>Interests</h2>
            <p>I enjoy making websites, solving puzzles and reading anything engineering related. On weekeds I like spending time in nature and hiking with my friends.</p> 
        </div>
    </>
    )
}