import { useRef } from "react";
import { useLocation, Link } from "react-router-dom";

const GoBack = () => {
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");

  return <Link to={backLink.current}>Go back</Link>;
};

export default GoBack;
