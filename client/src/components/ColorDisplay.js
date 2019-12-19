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
import { Box, Grid, Image, Text } from "@chakra-ui/core";

const ColorDisplay = (props) => {

    return (
        <Box
        className="bg-white rounded" 
        >
            <Box width={[props.width * 0.6, props.width * 0.75, props.width]} height={[props.height * 0.6, props.height * 0.75, props.height]} style={{ backgroundColor: props.color }}
        
            >
            </Box>
            {/* <div style={{ color: "#4A4A4A", fontWeight: "bold", paddingLeft: "5px"}}>
                Color
            </div> */}
            <Box color="gray.800" width={[props.width * 0.6, props.width * 0.75, props.width]} style={{ fontWeight: "400", paddingLeft: "0px", paddingTop: "2px"}}>
                {props.color}
            </Box>
        </Box>
    );
}

export default ColorDisplay;
