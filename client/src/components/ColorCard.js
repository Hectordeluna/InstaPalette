import React, { useState } from 'react';
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col
  } from 'reactstrap/';
import ColorDisplay from "./ColorDisplay";
import { Box, Grid, Image, Text } from "@chakra-ui/core";
import ErrorCard from './ErrorCard';


const ColorCard = (props) => {

    const displayCard = () => {
        if (!props.palette || props.palette.length == 0) {
            return <ErrorCard iconName="lock" title="Oopsie Woopsie!" content="It looks like the user is private or doesn't have any photos."/>;
        }
        console.log(props.palette);
        return (
        <Grid style={{ border: "0px" }} templateColumns="repeat(3, 10fr)" gap={2}>
        {props.palette.map(color => (
                <Box style={{ border: "0px" }}><ColorDisplay color={color} height={150} width={150}/></Box>)
            )
        }</Grid>);
    };

    return (
        <Box borderWidth="1px" rounded="lg" className="bg-white rounded shadow-longer">
                <Box bg="gray.100" color="gray.600" borderColor="gray.400" p="3" d="flex" style={{ alignItems: "center" }}>
                    <Image 
                    objectFit="cover"
                    src={props.profilePhoto} 
                    size={["75px","80px","90px"]}
                    rounded="full"
                    className="shadow-sharp"
                    />
                    <Box>
                    <Box
                    color="gray.600"
                    fontWeight="bold"
                    letterSpacing="wide"
                    ml="2"
                    fontSize={["s","m","lg"]}
                    textTransform="capitalize"
                    >
                       {props.name}
                    </Box>
                    <Box
                    color="gray.400"
                    ml="2"
                    >
                        {props.posts} posts
                    </Box>
                    </Box>
                </Box>
                <Box p="3">
                    {displayCard()}
                </Box>
        </Box>
    );
}

export default ColorCard;
