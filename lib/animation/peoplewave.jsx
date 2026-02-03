"use client"
import  Lottie from 'lottie-react';
import office from './office.json'


export default function PeopleWave(){
    return (<div className=''> {/**absolute added */}
        <Lottie animationData={office} loop />
        <div className='-translate-y-1/2 -translate-x-1/2 absolute'>
           
        </div>
        
        </div>
    )
}