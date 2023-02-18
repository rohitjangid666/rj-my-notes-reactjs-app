import { useContext } from 'react';
import { TitleContext } from '../context/TitleContext';

const Header = () => {
  const { title } = useContext(TitleContext);

  return (
    <>
      <div className='header'>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Header;
