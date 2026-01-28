"use client"
import  Lottie from 'lottie-react';
import office from './office.json'

export default function PeopleWave(){
    return (
        <Lottie animationData={office} loop />
    )
}