import { useContext } from "react";
import { ThemeContext } from '../Context'

function Brand(props) {

    const theme = useContext(ThemeContext);
    console.log(theme.state?.darkMode);

    return (
        <img
            src={theme.state.darkMode ? 'https://i.imgur.com/S5awLwi.png' : 'https://i.imgur.com/G6sWWqH.png'}
            width={props.width}
            height={props.height}
            className="d-inline-fixed align-top"
            alt="logo"
        />
    );
}

export default Brand;