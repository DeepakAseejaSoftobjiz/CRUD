import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getCarAsync, AddCarAsync, DeleteCarAsync } from './CarSlice';
import { Container, Flex, Box } from '@chakra-ui/react';
import { FormControl, Input, Button } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

export function Car() {
  const dispatch = useAppDispatch();
  const [Car, setCar] = useState<ICar>({});
  const CarState = useAppSelector((state) => state.Car);

  const handleInput = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      id: string,
      value: string
    };
    setCar({ ...Car, [target.id]: target.value })
  }

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(AddCarAsync(Car))
  }

  const handleDeleteClick = (Car: ICar) => {
    dispatch(DeleteCarAsync(car.id))
  }

  useEffect(() => { dispatch(getCarAsync()) }, [])

  return (
    <Container maxW='container.lg' color="white">
      <Flex>

        <FormControl w="50vw" mx="auto" mt="3rem" p="1rem" border="3px solid white">
          <Input required id='title' type='text' placeholder='Car Brand' w="100%" h="1.8rem" my=".3rem" onInput={handleInput} />
          <Input required id='price' type='number' placeholder=' price' w="100%" h="1.8rem" my=".3rem" onInput={handleInput} />
          <Input required id='description' type='text' placeholder='Model' w="100%" h="1.8rem" my=".3rem" onInput={handleInput} />
          <Button type="submit" size="md" bg='teal' border="0" w="100%" h="1.8rem" my=".3rem" cursor="pointer" onClick={handleClick}>Button</Button>
        </FormControl>

        <Box w="80vw" mx="auto" mt="3rem">
          <Table variant='striped' colorScheme='whatsapp' w="100%">
            <Thead>
              <Tr style={{ textTransform: "uppercase" }}>
                <Th>title</Th>
                <Th>price</Th>
                <Th>description</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {CarState.product && CarState.product.map((Car) => {
                return (
                  <Tr bg="teal" key={Math.random()}>
                    <Td>{Car.title}</Td>
                    <Td>{Car.price}</Td>
                    <Td>{Car.description}</Td>
                    <Td p="0">
                      <Button bg='red' border="0" w="100%" h="1.8rem" cursor="pointer" onClick={() => handleDeleteClick(Car)}>Delete</Button>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </Box>
      </Flex >
    </Container >
  );
}

interface ICar {
  id?: string;
  title?: string;
  price?: number;
  description?: string;
}