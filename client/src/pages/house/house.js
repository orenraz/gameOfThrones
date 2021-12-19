import React, { useContext } from 'react';
import { AppContext } from './../../context';
import {Container} from '../../styles';
import {Text} from "./styles";

const Home = () => {
    const { selectedHouse } = useContext(AppContext);

    return (
        <Container >
            <Text>{selectedHouse?.name}</Text>
        </Container>
    );
}

export default Home;
