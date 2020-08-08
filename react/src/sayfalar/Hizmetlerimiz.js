import React,{useContext} from 'react'
import {Context} from '../components/Genel'
import {gsap} from "gsap"

export function Hizmetlerimiz() {
    const state=useContext(Context).state;
    return (
        <div style={{}}>
            {state.dil_degisken("türkçe","eng")}
        </div>
    )
}
