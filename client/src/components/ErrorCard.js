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
import { Box, Grid, Image, Text, Icon } from "@chakra-ui/core";

const ErrorCard = (props) => {

    return (
        <Box d="flex" w={["200","400px","475px"]} className="bg-white rounded">
            <Box w="100%" style={{ margin: "75px 20px 75px 20px" }} justifyContent="center" alignItems="center">
                <Icon style={{ textShadow: "1px 1px 1px #ccc" }} name={props.iconName} size="75px" w="100%" color="gray.300"/>
                <Text 
                mt="10"
                color="gray.900" 
                fontWeight="bold"
                letterSpacing="wide"
                textAlign="center"
                fontSize="lg">
                    {props.title}
                </Text>
                <Text 
                style={{ margin: "0 auto" }}
                w="200px"
                color="gray.600" 
                fontWeight="light"
                letterSpacing="wide"
                textAlign="center"
                fontSize="lg">
                    {props.content}
                </Text>
            </Box>
        </Box>
    );
}

export default ErrorCard;
