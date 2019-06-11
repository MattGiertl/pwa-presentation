import React from 'react';

import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Layout,
  Fill,
  ListItem,
  List,
  Slide,
  Text,
  Image,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';
import 'prism-themes/themes/prism-darcula.css';

/* Images */

// Service worker diagram
import sw1 from './assets/sw1.png';
import sw2request from './assets/sw2request.png';
import sw3response from './assets/sw3response.png';
import sw4serviceWorker from './assets/sw4serviceWorker.png';
import sw5serviceWorkerRequest from './assets/sw5serviceWorkerRequest.png';
import sw6serviceWorkerResponse from './assets/sw6serviceWorkerResponse.png';
import sw7cache from './assets/sw7cache.png';
import sw8cacheRequest from './assets/sw8cacheRequest.png';
import sw9cacheLookup from './assets/sw9cacheLookup.png';
import sw10cacheRetrieve from './assets/sw10cacheRetrieve.png';
import sw11cacheResponse from './assets/sw11cacheResponse.png';
import sw12cacheResponseOffline from './assets/sw12cacheResponseOffline.png';

require('normalize.css');

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
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3}>What is PWA?</Heading>
          <Appear>
            <Text size={4} margin="30px 0 0" textColor="secondary">
              Native user experiences on the web
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3}>Why should you care?</Heading>
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
          <Heading size={3}>PWA to the rescue!</Heading>
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
          <Heading size={3}>Speed & reliability</Heading>
          <List>
            <Appear>
              <ListItem>Caching resources for fast load times</ListItem>
            </Appear>
            <Appear>
              <ListItem>Offline capabilities</ListItem>
            </Appear>
            <Appear>
              <ListItem>Background sync</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3}>Engagement</Heading>
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
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3}>Speed & reliability</Heading>
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw1} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw2request} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw3response} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw1} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw4serviceWorker} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw5serviceWorkerRequest} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw6serviceWorkerResponse} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw4serviceWorker} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw7cache} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw8cacheRequest} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw9cacheLookup} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw10cacheRetrieve} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw11cacheResponse} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Image src={sw12cacheResponseOffline} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3}>
            Wait&hellip; why not use browser cache instead?
          </Heading>
          <List>
            <Appear>
              <ListItem>No offline support</ListItem>
            </Appear>
            <Appear>
              <ListItem>Limited customization</ListItem>
            </Appear>
            <Appear>
              <ListItem>Server configuration needed</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3}>Service worker</Heading>
          <List>
            <Appear>
              <ListItem>Acts as a programmable network proxy</ListItem>
            </Appear>
            <Appear>
              <ListItem>Runs in the background</ListItem>
            </Appear>
            <Appear>
              <ListItem>Cannot access DOM directly</ListItem>
            </Appear>
            <Appear>
              <ListItem>Framework agnostic</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3}>What do we need?</Heading>
          <List>
            <Appear>
              <ListItem>
                HTTPS{' '}
                <Appear>
                  <span> (unless on localhost)</span>
                </Appear>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>A supported browser</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} margin="0 0 40px 0">
            Browser support
          </Heading>
          <Layout>
            <Fill>
              <Heading size={4}>Desktop</Heading>
              <List>
                <Appear>
                  <ListItem>All except IE</ListItem>
                </Appear>
              </List>
            </Fill>
            <Fill>
              <Heading size={4}>Mobile</Heading>
              <List>
                <Appear>
                  <ListItem>All major browsers</ListItem>
                </Appear>
                <Appear>
                  <ListItem>iOS Safari >= 11.3</ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3}>Service worker lifecycle</Heading>
          <List>
            <Appear>
              <ListItem>Registration</ListItem>
            </Appear>
            <Appear>
              <ListItem>Installation</ListItem>
            </Appear>
            <Appear>
              <ListItem>Activation</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} margin="20px 0">
            Registration
          </Heading>
          <List>
            <Appear>
              <ListItem>Check for browser support</ListItem>
            </Appear>
            <Appear>
              <ListItem>Wait until page is loaded</ListItem>
            </Appear>
            <Appear>
              <ListItem>Specify a path to service worker script</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} margin="20px 0">
            Registration
          </Heading>
          <CodePane
            textSize="24px"
            lang="js"
            theme="external"
            source={require('./assets/serviceWorkerRegistration.js.example')}
          />
          <Text italic textSize="30px" margin="20px">
            app.js
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} margin="20px 0">
            Installation
          </Heading>
          <List>
            <Appear>
              <ListItem>Good time to cache static assets (app shell)</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} margin="20px 0">
            Installation
          </Heading>
          <CodePane
            textSize="24px"
            lang="js"
            theme="external"
            source={require('./assets/serviceWorkerInstallation.js.example')}
          />
          <Text italic textSize="30px" margin="20px">
            service-worker.js
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} margin="20px 0">
            Installation
          </Heading>
          <CodePane
            textSize="24px"
            lang="js"
            theme="external"
            source={require('./assets/serviceWorkerInstallation2.js.example')}
          />
          <Text italic textSize="30px" margin="20px">
            service-worker.js
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} margin="20px 0">
            Activation
          </Heading>
          <List>
            <Appear>
              <ListItem>Static assets have been cached</ListItem>
            </Appear>
            <Appear>
              <ListItem>Ready to take control after refresh</ListItem>
            </Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
