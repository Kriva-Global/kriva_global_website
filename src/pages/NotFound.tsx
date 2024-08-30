import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sorry! page not found.</h1>
      <div>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          Go back to home
        </button>
      </div>
    </div>
  );
};
export default NotFound;
