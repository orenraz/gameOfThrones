import * as S from './styles';
import Logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const RightNav = (props) => {
    return (
        <>
            <S.Ul open={props.open}>
                <S.LogoUl src={Logo} />
                <NavLink
                    to='/home'
                    activeStyle={{
                        fontWeight: 'bold',
                        color: '#0DADEA',
                    }}
                >
                    <S.Li>Home</S.Li>
                </NavLink>
                <NavLink
                    to='/houses'
                    activeStyle={{
                        fontWeight: 'bold',
                        color: '#0DADEA',
                    }}
                >
                    <S.Li>Houses</S.Li>
                </NavLink>
                <NavLink
                    to='/characters'
                    activeStyle={{
                        fontWeight: 'bold',
                        color: '#0DADEA',
                    }}
                >
                    <S.Li>Characters</S.Li>
                </NavLink>
            </S.Ul>
        </>
    );
}

export default RightNav;
