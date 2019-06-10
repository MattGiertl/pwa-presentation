import React from 'react';

import {
  Appear,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Fill,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

// Images
// import pwaLighthouse from './assets/pwa-lighthouse.png';

require('normalize.css');
require('./code-theme.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#8E8E8E',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Progressive Web Applications v3
          </Heading>
          <Heading size={6} lineHeight={1} textColor="secondary">
            In Practice
          </Heading>
          <Text margin="30px 0 0" textColor="tertiary">
            Martin Kapal & Matúš Giertl
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            What is PWA?
          </Heading>
          <Appear>
            <Text size={4} margin="30px 0 0" textColor="secondary">
              Native user experiences on the web
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            Why should you care?
          </Heading>
          <List>
            <Appear>
              <ListItem>People leave a site if it takes long to load</ListItem>
            </Appear>
            <Appear>
              <ListItem>Users have slow connection / offline</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Cross-platform mobile development can be frustrating
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Native apps go through App Store</ListItem>
            </Appear>
            <Appear>
              <ListItem>Going native may not a viable solution</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="secondary">
            PWA to the rescue!
          </Heading>
          <Appear>
            <Text size={4} margin="30px 0 0" textColor="secondary">
              Speed
            </Text>
          </Appear>
          <Appear>
            <Text size={4} margin="30px 0 0" textColor="secondary">
              Reliability
            </Text>
          </Appear>
          <Appear>
            <Text size={4} margin="30px 0 0" textColor="secondary">
              Engagement
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="secondary">
            Speed & reliability
          </Heading>
          <List>
            <Appear>
              <ListItem>Caching resources for fast load times</ListItem>
            </Appear>
            <Appear>
              <ListItem>Offline capabilities</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="secondary">
            Engagement
          </Heading>
          <List>
            <Appear>
              <ListItem>Installable on the homescreen</ListItem>
            </Appear>
            <Appear>
              <ListItem>Feels like a native app</ListItem>
            </Appear>
            <Appear>
              <ListItem>Push notifications</ListItem>
            </Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
