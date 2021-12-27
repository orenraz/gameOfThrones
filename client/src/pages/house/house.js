import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from './../../context';
import {Container} from '../../styles';
import {Text} from "./styles";

const BASE_URL = 'http://localhost:6868';
const getHouse = id => fetch(`${BASE_URL}/api/houses/${id}`).then(response => response.json());

const House = () => {
    const { selectedHouse, setSelectedHouse } = useContext(AppContext);
    const { id } = useParams();

    useEffect(() => {
        if (!selectedHouse?.id) {
            getHouse(id).then(setSelectedHouse);
        }

    }, [id, selectedHouse, setSelectedHouse]);

    return (
        <Container >
            <Text> {selectedHouse?.name}</Text>
        </Container>
    );
}

export default House;
