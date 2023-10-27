import { useNavigate } from "react-router-dom";

import "../../styles/home.sass";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/personagens");
  };
  return (
    <div className="main" style={{ backgroundImage: `url('rickAndMorty.jpg')` }}>
      <p className="animated-word" onClick={handleButtonClick}>
        Rick and Morty
      </p>
    </div>
  );
};

export default Home;
