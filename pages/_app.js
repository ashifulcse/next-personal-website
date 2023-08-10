import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.scss";
import "../styles/custom.scss";  
import "../styles/responsive.scss"; 

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default MyApp