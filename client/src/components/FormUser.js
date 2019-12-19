import React, { useState, useEffect } from 'react';
import {
    Container,
    Form,
    FormGroup,
    Label,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Spinner,
    Fade,
    Alert
  } from 'reactstrap/';
import ColorCard from "./ColorCard";
import ErrorCard from "./ErrorCard";
import Hooks from "./../services/hooks";
import paletteService from "./../services/paletteService";
import { Box, Grid, Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/core";

const FormUser = (props) => {

    const [value, setInput] = useState("");
    const [name, setName] = useState("");
    const [palette, setPalette] = useState({ colors: [], profilePhoto: "", posts: 0 });
    const [search, setSearch] = useState("");
    const [error, setError] = useState({ error: false, message: "" });

    const save = e => {
        setInput(e.target.value);
        console.log(value);
    };

    const onSave = async (e) => {
        setSearch(true);
        e.preventDefault();
    }

    useEffect(() => {
        const fetchData = async () => {
            if (value != "") {
                const result = await paletteService.getPalette(value);

                if (result.length == 0) {
                    setError({error: true, message: "Make sure the user is public and has photos! uWu"});
                } else {
                    console.log(result);
                    setPalette(result);
                }

                setSearch(false);
            } else {
                setSearch(false);
            }
        };

        if (search) {
            setPalette([]);
            setName(value);
            fetchData();
        }
    }, [search]);

    const displayLoading = () => {
        if (!search) {
            return null;
        }
        return <Spinner color="primary" size="lg"/>;
    };

    const displayInitial = () => {
        if (name !== "") {
            return null;
        }

        return <ErrorCard iconName="search" title="Get your Palette!" content="Get your Color Palette with your Instagram username!" />;
    }

    return (
        <div>
            <Container>
                <Row style={{display: 'flex', justifyContent: 'center'}}>
                    <Col md="6" sm="12">
                        <Form onSubmit={e => onSave(e)} style={{ position: "relative", top: "-50px", zIndex: "10" }}>
                                <InputGroup>
                                <InputLeftElement children={<Icon name="search" color="gray.300" />} />
                                <Input 
                                className="shadow-sharp"
                                variant="flushed" 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder="Username..." 
                                background="#FFFFFF"
                                borderRadius="5px"
                                lineHeight="1.5"
                                border="none"
                                onChange={e => setInput(e.target.value)}
                                style={{ WebkitAppearance: "none" }}
                                />
                                </InputGroup>
                        </Form>
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', paddingBottom: "30px"}}>
                    { displayLoading() }
                    { displayInitial() }
                    <Fade in={!search} timeout={700}>
                        {palette.profilePhoto && (<ColorCard name={name} palette={palette.colors} profilePhoto={palette.profilePhoto} posts={palette.posts}/>)}
                    </Fade>
                </Row>            
            </Container>
        </div>
    );
}

export default FormUser;
