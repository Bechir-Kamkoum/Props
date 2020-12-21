import React from 'react';
import PropTypes from "prop-types";




const ProfileComponent =props =>{



    const handleName =()=>{
        alert(` My name is  ${props.fullName}`);
    }
    const styleH1 = {color :'#912119' , fontFamily :'Arial, sans-serif' };
    const styleH2 ={color :'#F02A52 ' , fontFamily : 'Trebuchet MS'}
    const styleH3 ={color :'#260f4f'}

    const styleBut ={backgroundColor:'grey', color:'black',borderRadius: '12px', width : '150px'}
    return (
        <div >

            <div>
                <h1 style={styleH1} >{props.fullName}</h1>
            </div>

            <div>
                <h3 style = {styleH3}>{props.bio}</h3>
                
            </div> 
                <h2 style = {styleH2}>{props.profession}</h2>
            <div>
                
            </div> 

            <div>
                <button style ={styleBut} onClick ={handleName}>click me ! </button>
            </div>        
        </div>
    )
}

ProfileComponent.propTypes= {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession : PropTypes.string

};

ProfileComponent.defaultProps={
    fullName:'Empty',
    bio : 'Empty',
    profession : 'Empty'
};

export default ProfileComponent;
