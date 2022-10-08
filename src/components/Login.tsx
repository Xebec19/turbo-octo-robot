import styles from './Login.module.scss';
import image from '../assets/undraw_secure_login_pdn4.png';
import { Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import { ButtonElm } from './UI/ButtonElm';

const Login = () => {
    return (<div className={styles.gridContainer}>
        <img src={image} alt="login"/>
        <Box>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant='h4'>Login</Typography>
                </CardContent>
                <CardActions>
                    <ButtonElm>Submit</ButtonElm>
                    <ButtonElm>Register</ButtonElm>
                </CardActions>
            </Card>
        </Box>
    </div>)
}

export default Login;