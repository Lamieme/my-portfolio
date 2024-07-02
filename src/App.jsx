import Container from '@mui/material/Container'
import { Box, Button, Typography } from '@mui/material'
import heroImg from '~/assets/images/LamieeLand.png'
import bigPic from '~/assets/images/bigPic.jpg'
import Divider from '@mui/material/Divider';
function App() {

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: 'auto',
        backgroundColor: '#fffcec',
        px: '80px', //lùi 2 bên trái phải
        py: '100px'//lùi 2 bên trên dưới
      }}>
      {/* HEADER */}
      <Box sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}>
        {/* LOGO */}
        <Button sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          textTransform: 'lowercase',
          fontSize: '18px',
          '&:hover': {
            bgcolor: 'transparent',
            opacity: '50%'
          }
        }}>
          HoangLam
        </Button>
        {/* LAND */}
        <Button sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          textTransform: 'uppercase',
          fontSize: '18px',
          '&:hover': {
            bgcolor: 'transparent',
            opacity: '50%'
          }
        }}>
          Land
        </Button>
        {/* CATALOG */}
        <Button sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          textTransform: 'uppercase',
          fontSize: '18px',
          '&:hover': {
            bgcolor: 'transparent',
            opacity: '50%'
          }
        }}>
          Catalog
        </Button>
        {/* PROFILE */}
        <Button sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          textTransform: 'uppercase',
          fontSize: '18px',
          '&:hover': {
            bgcolor: 'transparent',
            opacity: '50%'
          }
        }}>
          Profile
        </Button>
      </Box>

      {/* BODY */}
      <Box sx={{
        // bgcolor: 'secondary.main'
      }}>

        <Box sx={{
          width: '100%',
          // height: '1000px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'

        }}>
          <Box
            component={'img'}
            sx={{
              width: '100%',
              height: 'auto',
              marginTop: '60px'
            }}
            src={heroImg}
          />

          <Box
            component={'img'}
            sx={{
              width: '100%',
              height: 'auto',
              marginTop: '60px'
            }}
            src={bigPic}
          />

        </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '50px'
        }}>
          <Typography sx={{
            fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
            // textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: '36px'
          }}>
            Hi, I&apos;m Lamiee, a designer <br /> and frontend developer.
          </Typography>

          <Typography sx={{
            fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
            // textTransform: 'uppercase',
            fontWeight: '300',
            fontSize: '36px'
          }}>
            With experience in multiple disciplines, <br /> I work with people to create intuitive <br /> and engaging digital experiences.
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '100px'
        }}>
          <Button sx={{
            border: '1px solid #d039af',
            borderRadius: '60px',
            padding: '0px 50px',
            fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
            textTransform: 'uppercase',
            fontSize: '36px',
            textAlign: 'center',
            '&:hover': {
              bgcolor: 'transparent',
              opacity: '50%'
            }
          }}>
            YEAH OKAY LET’S DO IT
          </Button>
        </Box>
      </Box>

      {/* FOOTER */}
      <Box sx={{
        // bgcolor: '#fff'
      }}>
        <Divider style={{
          marginTop: '150px',
          borderWidth: '1px',
          borderColor: 'primary.main',
          opacity: '80%'
        }} />

        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          textTransform: 'uppercase',
          fontWeight: '300',
          fontSize: '20px',
          marginTop: '50px'
        }}>
          GET IN TOUCH
        </Typography>

        <Typography sx={{
          fontFamily: 'Neue Kabel, Roboto, Arial, sans-serif',
          textTransform: 'lowercase',
          fontWeight: '300',
          fontSize: '20px',
          marginTop: '10px'
        }}>
          lamieedesign1204@gmail.com
        </Typography>
      </Box>
    </Container >
  )
}

export default App
