import React from 'react'

import { Box, Link, Container, Grid, List, ListItem, Paper, TextField, Typography, CssBaseline } from '@mui/material'

const Footer = () => {
  return (
    <Paper id='footer' sx={{ marginTop: 'calc(50vh - 10%)',  position: 'relative', width:"100%", bottom:0}}>
      <Paper className='footer-top'>
          <Container>
          <CssBaseline />
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid lg={3} md={6} xs={12} className=' footer-contact'>
              <Typography > Kiltaveljenpolku </Typography>
              <Typography>Espoo</Typography>
              <Typography >Finland    </Typography>
              <Typography > <strong>Phone:</strong> +358123457</Typography>
              <Typography ><strong>Email:</strong> femioyin2003@yahoo.com</Typography>
            </Grid>
            <Grid lg={2} md={6} xs={4} className=' footer-links'>
              <Typography variant='h4'>Useful Links</Typography>
              <List>
                <ListItem>
                  <Link href="#" underline="none">Home</Link>
                </ListItem>
                <ListItem>
                  <Link href="#/projects" underline="none">Projects</Link>
                </ListItem>
                <ListItem>
                  <Link href="#" underline="none">Services</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid lg={3} md={6} xs={4} className='footer-links'>
             <Typography variant='h4'>Services</Typography>
              <List>
                <ListItem>
                 <Link href="#" underline="none">Web Design</Link>
                </ListItem>
                <ListItem>
                 <Link href="#" underline="none">Web Development</Link>
                </ListItem>
                <ListItem>
                 <Link href="#" underline="none">Product Management</Link>
                </ListItem>
                <ListItem>
                 <Link href="#" underline="none">Marketing</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid lg={4} md={6} xs={4} className='footer-newsletter'>
                <Typography variant='h4'>My Words</Typography>
                <Typography sx={{ml:-1}}>
                I am not shy away from any opportunity to do the right thing, even when doing so is far from easy. My passion allows for inspiring others and not just in their careers but in every area of their lives. 
                </Typography>   
                <Typography sx={{display:"block", mt:2, ml:-1}}>Femi Adesola &copy; {new Date().getFullYear()}</Typography>
            </Grid> 
            <Grid sx={{display:"flex", spacing:1}}>
                <Link  href="https://www.linkedin.com/in/femi-adesola-oyinloye-106454145/" target="_blank" rel="noreferrer" className="linkedin">
                  <i className="fab fa-linkedin fa-2x"></i>
                </Link>
                <Link  href="#1" className="facebook">
                  <i className="fab fa-facebook fa-2x"></i>
                </Link>
                <Link  href="https://github.com/FemiAdesola" target="_blank" rel="noreferrer" className="github">
                   <i className="fab fa-github fa-2x"></i>
                </Link>
               </Grid> 
          </Grid>   
        </Container>
      </Paper>
    </Paper>
  )
}

export default Footer