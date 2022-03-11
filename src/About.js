import * as React from 'react';
import profile from './images/profile.jpeg';
import Grid from '@mui/material/Grid';

export default function GutterlessList() {
  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} sm={12} style={{textAlign:'center'}}>
          <h1>About Me</h1>  
      </Grid>
      <Grid item xs={12} sm={6}>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <img src={profile} alt="profile" width={340} />
        </div>  
      </Grid>
      <Grid item xs={12} sm={6} style={{display: 'flex', alignItems:'center'}}>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <p>Halo Semuanya! <br></br>
        Perkenalkan nama saya Marcella Phua Samara Geneva.<br></br>
        Saat ini saya bersekolah di SMK Negeri 5 Surakarta <br></br>
        dan mengambil jurusan Rekayasa Perangkat Lunak. <br></br>
        Dan saat ini saya sedang melakukan Prakter Kerja Lapangan<br></br>
        di PT. Brilyan Trimatra Utama<br></br>
        Saya memiliki hobi mendengarkan musik dan membaca komik. <br></br>
        </p>  
        </div>
      </Grid>
    </Grid>
  );
}
