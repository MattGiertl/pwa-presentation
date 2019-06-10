import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

// Images
import pwaLighthouse from './assets/pwa-lighthouse.png';

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
            Progressive Web Applications
          </Heading>
          <Heading size={6} lineHeight={1} textColor="secondary">
            In Practice
          </Heading>
          <Text margin="30px 0 0" textColor="tertiary">
            Martin Kapal & Matúš Giertl
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Image src={pwaLighthouse} margin="0px auto 40px" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <Appear>
              <ListItem>Item 1</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 2</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 3</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 4</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>


            <Cite>Author</Cite>
          </BlockQuote>

        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <CodePane
            textSize={20}
            lang="js"
            theme="external"
            source={require('./assets/serviceWorker.js.example')}
          />
        </Slide>
      </Deck>
    );
  }
}
