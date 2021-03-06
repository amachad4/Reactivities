import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

const NavBar = () => {
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '1rem'}} />
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activites' />
                <Menu.Item>
                    <Button as={NavLink} to='createActivity' positive content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    );
}

export default NavBar;