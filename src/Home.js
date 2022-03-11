import React from 'react';
import Foto from './images/foto.jpeg';

function Home(){
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={Foto} alt="foto" width={340} />
            </div>
            <div style={{textAlign:'center', marginTop:20}}>
                <p>Halo! Saya Marcella Phua Samara Geneva</p>
                <p>Siswi SMK Negeri 5 Surakarta</p>
            </div>
        </div>
    )
}
export default Home;