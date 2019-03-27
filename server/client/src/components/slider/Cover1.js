import React from 'react';
import npcLogo from '../../images/transparent-npc-logo.png';


const Cover1 =  () => {
    return (
        <div className="cover1">
            <div className="cover1-info">
                <img src={npcLogo} alt="npc-logo" />
                <div className="cover1-copy">
                    <h1>Work with the Best.</h1>
                    <ul>
                        <li>1st Place in Men's Physique Open D at the 2018 NPC Midwest Gladiator</li>
                    </ul>
                </div>
            </div>
        </div>
    );   
}

export default Cover1;