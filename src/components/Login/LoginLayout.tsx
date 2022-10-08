import styles from './LoginLayout.module.scss';
import image from '../../assets/undraw_secure_login_pdn4.png';
import { Box, Card, CardContent, CardActions } from '@mui/material'
import { ButtonElm } from '../UI/ButtonElm';
import { H4Text } from '../UI/H4Text';

const Login = () => {
    return (<div className={styles.gridContainer}>
        <img src={image} alt="login"/>
        <Box>
            <Card>
                <CardContent>
                    <H4Text>Login</H4Text>
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