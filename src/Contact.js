import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact(){
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} style={{textAlign:'center'}}>
          <h1>Let's Be Friend !</h1>  
        </Grid>
        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'center'}}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
          >
            <div style={{width: 400, marginBottom: 20}}>
           <TextField
              required
              id="outlined-required"
              label="Nama"
              type="text"
              onChange={e => setNama(e.target.value)}
              value={nama}
              name="nama"
              sx={{width: {md: '400px', xs: '200px'}}}
            />
            </div>
            <div style={{width: 400, marginBottom: 20}}>
            <TextField
              required
              id="outlined-required"
              label="Email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              name="email"
              sx={{width: {md: '400px', xs: '200px'}}}
            />
            </div>
            <div style={{width: 400, marginBottom: 20}}>
            <TextField
              required
              id="outlined-required"
              label="Pesan"
              multiline
              rows={4}
              onChange={e => setPesan(e.target.value)}
              value={pesan}
              name="pesan"
              fullWidth
              sx={{width: {md: '400px', xs: '200px'}}}
            />
            </div>
              <Button variant="contained" endIcon={<SendIcon />} size="medium">
                Kirim
              </Button>
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} style={{display: 'flex', justifyContent: 'center'}}>
        <Link href="https://api.whatsapp.com/send?phone=62895358417165&text=Halo" target="_blank" underline="none" mr={1}><WhatsAppIcon></WhatsAppIcon></Link>
        <Link href="mailto:cellaphua05@gmail.com" target="_blank" underline="none" mr={1}><EmailIcon></EmailIcon></Link>
        <Link href="https://www.instagram.com/phuasamara/" target="_blank" underline="none" mr={1}><InstagramIcon></InstagramIcon></Link>
        <Link href="https://github.com/Phuasamara" target="_blank" underline="none" mr={1}><GitHubIcon></GitHubIcon></Link>
        </Grid>
      </Grid>
  );
}
export default Contact;