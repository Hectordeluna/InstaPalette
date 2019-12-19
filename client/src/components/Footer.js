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
import { Box, Grid, Image, Text, Icon, Divider } from "@chakra-ui/core";
import { Link } from 'react-router-dom';

const Footer = (props) => {

    return (
        <Box d="flex" justifyContent="center" alignItems="center" className="bg-white rounded">
            <Text color="gray.400" letterSpacing="1.4px">
                COLORGRAMER.HEROKUAPP.COM
            </Text>
        </Box>
    );
}

export default Footer;
