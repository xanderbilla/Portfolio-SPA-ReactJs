import { useContext } from "react";

function Brand(props) {

    const theme = useContext(ThemeContext);

    return (
        <img
            src={theme.state.darkmode ? 'https://i.imgur.com/S5awLwi.png' : 'https://i.imgur.com/G6sWWqH.png'}
            width={props.width}
            height={props.height}
            className="d-inline-fixed align-top"
            alt="logo"
        />
    );
}

export default Brand;