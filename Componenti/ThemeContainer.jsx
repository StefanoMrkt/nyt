import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function ThemeContainer({ children }) {
  const light = useSelector((state) => state.lightDark.light);

  const style = `
    body {
      background-color: ${light};
      color: ${light === "white" ? "black" : "white"};
    }
    h1 {
      color: ${light == "white" ? "black" : "White"};
    }
    h3 {
      color: ${light == "white" ? "black" : "White"}
    }
    p {
      color: ${light == "white" ? "black" : "White"}
    }
    .ulTotal {
      color: ${light == "white" ? "black" : "White"}
    }
    .SearchFA {
      color: ${light == "white" ? "black" : "White"}
    }
     .sunFA {
      color: ${light == "white" ? "black" : "white"}
    }
     .buttonArt {
      color: ${light == "white" ? "black" : "White"}
    }
     .lineDiv {
      background-color: ${light == "white" ? "black" : "White"}
    }
     .bnavLight {
      background-color: ${light == "black" ? "white" : "black"};
      color: ${light == "white" ? "white" : "black"};
    }
    .hamburger {
      fill: ${light == "white" ? "black" : "white"}
    }
  `;

  //per aggiungere lo stile al tag <head>
  return (
    <div>
      <Helmet>
        <style>{style}</style>
      </Helmet>
      {children}
    </div>
  );
}

ThemeContainer.propTypes = {
  children: PropTypes.object,
};
