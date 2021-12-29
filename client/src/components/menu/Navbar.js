import * as S from './styles';

import Logo from '../../assets/logo.png';
import Burger from './Burger';

const Navbar = () => {
  return (
    <>
      <S.Nav>
        <S.Logo src={Logo} alt='Lusha live' />
      </S.Nav>
      <Burger />
    </>
  );
};

export default Navbar;
