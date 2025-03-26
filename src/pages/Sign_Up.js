import React, { useState } from 'react';

function SignUp() {
    //hooks area
    const [isFocused, setIsFocused] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    //function definetion area
    const handleInputChange = (e) => {
        setMobileNumber(e.target.value);
    };

    //return statment
    return (

        <div className='r_sign_up container' style={{ top: '10%', left: '39%', borderRadius: '30px', position: 'absolute', width: 380, height: 550, background: '#FFFFFF', boxShadow: '0 4px 10px rgba(169, 169, 169, 0.6)', justifyContent: 'center', alignItems: 'center', display: 'flex', margin: 'auto' }}>
            <div style={{ position: 'absolute', top: '20px', left: "25px", cursor: 'pointer' }}>
                <i class="bi bi-x-lg" style={{ fontSize: '20px', fontWeight: 'bold', }} ></i>
            </div>




            <div style={{ position: 'absolute', top: '50px', left: '25px', display: 'flex', justifyContent: 'space-between', width: '85%' }}>
                {/* "Sign In" Text */}
                <span style={{ fontSize: 25, fontWeight: '900', cursor: 'default' }}>
                    Sign in
                </span>

                {/* JioMart Logo */}
                <img src="https://jep-asset.akamaized.net/JioMart/Common/Jiomart_LOGO_Icon.png" alt="JioMart Logo" style={{ width: 50, height: 50, color: 'red ', marginLeft: 'auto', marginTop: 15 }} />
            </div>

            <span style={{ position: 'absolute', top: 80, width: '60%', fontSize: 16, left: '25px', cursor: 'default', marginTop: 10 }}>Verify your mobile number to access your JioMart account</span>
            {/* Mobile Number Input Field with Floating Label Effect */}

            {/* Input field with country code */}
            <div style={{ display: 'flex', position: 'relative', width: '99%', top: '-100px', borderBottom: '2px solid #1c1c1c', }}>
                {/* Floating label effect using placeholder text */}
                <label
                    htmlFor="mobileNumber"
                    style={{
                        position: 'absolute',
                        top: mobileNumber || isFocused ? '-8px' : '10px',
                        left: mobileNumber || isFocused ? '2px' : '50px',
                        fontSize: '14px',
                        color: '#1c1c1c',
                        transition: '0.3s ease',
                        backgroundColor: '#fff', // Optional: to make label look better on background
                        padding: '0 5px', // Optional: padding to make label look like a floating box
                    }}
                >
                    Mobile Number
                </label>
                <span style={{ color: 'black', fontSize: '16px', marginRight: '10px', padding: '10px 0' }}>+91-</span>
                <input
                    id="mobileNumber"
                    type="text"
                    value={mobileNumber}
                    onChange={handleInputChange} // Update the state when input changes
                    // placeholder="Mobile Number" // Placeholder text
                    style={{
                        width: '100%',
                        padding: '10px 0', // Adjust padding for only bottom border
                        border: 'none', // Remove all borders

                        fontSize: '16px',
                        background: 'transparent', // No background color
                        outline: 'none', // Remove outline on focus
                        marginLeft: '10px', // Space between the country code and the input field
                        color: 'black',
                        position: 'relative',
                        transition: '0.3s ease',
                    }}
                    onFocus={() => setIsFocused(true)} // Set focus state when input is clicked
                    onBlur={() => setIsFocused(false)}  // Remove focus state when input loses focus
                />
            </div>


            <style>
                {`
          input:focus::placeholder,
          input:not(:placeholder-shown)::placeholder {
            top: -20px;
            font-size: 14px;
            color: #fff;
            position: absolute;
            transition: 0.3s ease;
            background-color: transparent;
          }
        `}
            </style>
            {/* <button type="button" class="btn btn-primary" style={{width:'100%',marginBottom:'0%'}}>Primary</button> */}
        </div>

    )
}

export default SignUp