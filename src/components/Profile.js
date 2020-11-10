import React from 'react';
import ProfilePicture from '../images/profile.jpg';
import '../css/profile.css';

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile__header">
                <h1> Design and innovation in one place </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id leo dictum, condimentum tortor sit amet, tristique lectus. Suspendisse non augue libero. Aenean volutpat maximus aliquet. Maecenas ut mauris ac mauris cursus gravida nec eu tellus. Suspendisse efficitur venenatis vulputate. Proin volutpat sagittis auctor. Vestibulum sit amet imperdiet sapien, sed luctus quam. Cras porta bibendum ultrices. Donec laoreet ac diam vel ultrices. Aliquam ullamcorper tortor quis viverra vulputate. Curabitur a nunc lacus. Ut efficitur urna eget lorem tempor ornare. Duis sit amet lectus metus. Donec ornare arcu ex, a suscipit eros volutpat ac. Nunc mollis mollis finibus.
                </p>
            </div>
            <div>
                <h2>Hi, my name is Camilo...</h2>
                <div className="profile__containers-info">
                    <img  
                        src={ProfilePicture} 
                        alt="profile-picture"
                        className="profile__containers-info-picture" 
                    />
                    <div className="profile__containers-info-text">
                        {/* <h2>
                            Hi !...
                        </h2> */}
                        <p>
                            My name is Camilo Vasquez. I'm a recently graduated lawyer who loves music, bussiness and techonology. 
                        </p>
                        <p>
                            Since I was 15 years old I wanted to learn how to code; 7 years later I started in this incredible and challenging world of programming, and I'm exicited for the idea of becoming the best programmer that I can be.
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
