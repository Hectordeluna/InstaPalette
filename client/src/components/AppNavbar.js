import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap/';
import { Box, Grid, Image, Text, Heading, Divider } from "@chakra-ui/core";
import { Link } from 'react-router-dom';

const AppNavbar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        {/* <Navbar className="p-3 mb-5 bg-white rounded" color="light" light expand="md" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }}>
          <NavbarBrand style={{ color: "#212121" }} href="/">InstaPalette</NavbarBrand>
        </Navbar> */}
        <Box mb="30px" border="10px" borderBottom="10px" d="flex" justifyContent="center" alignItems="center" bg="gray.100">
         <Link to="/">
            <Heading 
            color="gray.600" 
            mt="50px" 
            mb="50px" 
            fontWeight="bold"
            letterSpacing="2.8px"
            >COLORGRAMER</Heading>
          </Link>
        </Box>
        </div>
    );
}

export default AppNavbar;
