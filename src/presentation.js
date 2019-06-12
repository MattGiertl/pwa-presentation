import React from 'react';

import {
  Appear,
  Code,
  CodePane,
  Deck,
  Heading,
  ListItem,
  Link,
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

import newVersionAvailablePopup from './assets/newVersionAvailablePopup.jpg';
import updatingServiceWorker from './assets/updatingServiceWorker.jpg';

import lighthouseTab from './assets/lighthouse-tab.png';
import lighthouseResults from './assets/lighthouse-results.png';
import lighthouseFailed from './assets/lighthouse-failed.png';

import manifestTab from './assets/manifest-tab.png';
import serviceworkersTab from './assets/serviceworkers-tab.png';
import storageTab from './assets/storage-tab.png';
import androidInstallation from './assets/android-installation.gif';
import iosInstallation from './assets/ios-installation.gif';

import pwaLogo from './assets/pwa-logo.png';
import pwaAppIcon from './assets/pwa-icon.png';
import appShell from './assets/app-shell.jpg';

require('normalize.css');
require('./override.css');

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
  renderListItem = text => (
    <Appear>
      <ListItem padding="0 0 10px 0">{text}</ListItem>
    </Appear>
  );

  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide transition={['zoom']}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Progressive Web Applications
          </Heading>
          <Text margin="30px 0 0" textColor="tertiary">
            Martin Kapal & Matúš Giertl
          </Text>
        </Slide>

        <Slide>
          <Heading size={3}>What is PWA?</Heading>
          <Appear>
            <Text size={4} margin="30px 0 0">
              Native user experiences on the web
            </Text>
          </Appear>
        </Slide>

        <Slide>
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
              <ListItem>Native apps deployed to an App Store</ListItem>
            </Appear>
            <Appear>
              <ListItem>Going native may not be a viable solution</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3}>PWA to the rescue!</Heading>
          <Appear>
            <Text size={4} margin="30px 0 0">
              Speed
            </Text>
          </Appear>
          <Appear>
            <Text size={4} margin="30px 0 0">
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

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            Registration
          </Heading>
          <CodePane
            textSize="24px"
            lang="js"
            theme="external"
            source={require('./assets/serviceWorkerRegistration.js.example')}
          />
          <Code textSize="30px" margin="20px">
            app.js
          </Code>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="40px 0">
            Registration
          </Heading>
          <Text size={4} margin="40px 0">
            With Create React App
          </Text>
          <CodePane
            textSize="24px"
            lang="js"
            theme="external"
            source={`serviceWorker.register();`}
          />
        </Slide>

        <Slide transition={['fade']}>
          <Code textSize="60px">service-worker.js</Code>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            Installation
          </Heading>
          <Text margin="20px 0">Good time to cache static assets</Text>
          <CodePane
            textSize="24px"
            lang="js"
            theme="external"
            source={require('./assets/serviceWorkerInstallation.js.example')}
          />
          <Code textSize="30px" margin="20px">
            service-worker.js
          </Code>
        </Slide>

        <Slide transition={['fade']}>
          <Image src={appShell} />
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            Activation
          </Heading>
          <List>
            <Appear>
              <ListItem>Service worker will activate after refresh</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Can use <Code>clients.claim();</Code> to activate immediately
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Good place to remove cached assets from previous versions
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            Serve cached data
          </Heading>
          <Appear>
            <div>
              <Text margin="20px 0">
                Cache-first strategy – good for static assets
              </Text>
              <CodePane
                textSize="24px"
                lang="js"
                theme="external"
                source={require('./assets/serviceWorkerFetchCacheFirst.js.example')}
              />
              <Code textSize="30px" margin="20px">
                service-worker.js
              </Code>
            </div>
          </Appear>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            Service worker file
          </Heading>
          <CodePane
            textSize="24px"
            lang="js"
            theme="external"
            source={require('./assets/serviceWorkerListeners.js.example')}
          />
          <Code textSize="30px" margin="20px">
            service-worker.js
          </Code>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            What about caching dynamic data?
          </Heading>
          <List>
            {this.renderListItem("Service worker")}
            {this.renderListItem(<>Redux Persist<Appear><span> – with additional offline detection & error handling</span></Appear></>)}
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} margin="20px 0">
            How to handle app updates?
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Make sure <Code>service-worker.js</Code> is not cached or
                renamed!
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Update the file with new static assets
                <Appear>
                  <span>
                    <br />
                    ...or let the framework do it for you
                  </span>
                </Appear>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            React integration
          </Heading>
          <List>
            <Appear>
              <ListItem>Create React App uses Workbox</ListItem>
            </Appear>
            <Appear>
              <ListItem>Precache manifest generated automatically</ListItem>
            </Appear>
            <Appear>
              <ListItem>Static asset caching by default</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3}>Updating the app in the browser</Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} margin="20px 0">
            When does the browser check for updates?
          </Heading>
          <List>
            {this.renderListItem("On page reload")}
            {this.renderListItem("When you close and reopen the app")}
            {this.renderListItem("User goes to a different page – does not work in SPA, workaround needed")}
            {this.renderListItem("Every 24 hours")}
          </List>
          <Appear><div><Text margin="50px 0">Make sure your service worker is NOT cached!</Text></div></Appear>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} margin="20px 0">
            What happens next...
          </Heading>
          <List>
            {this.renderListItem('New worker enters the “waiting” state')}
            {this.renderListItem("Refreshing the page is not enough!")}
            {this.renderListItem("Old app must be closed to activate the new worker")}
            {this.renderListItem("Solution: App refresh popup")}
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Image src={newVersionAvailablePopup} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Image src={updatingServiceWorker} />
          <Link href="https://deanhume.com/displaying-a-new-version-available-progressive-web-app/">
            https://deanhume.com/displaying-a-new-version-available-progressive-web-app/
          </Link>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={2}>Let's ENGAGE</Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} margin="20px 0">
            Web App Manifest
          </Heading>
          <List>
            {this.renderListItem('Simple JSON file')}
            {this.renderListItem('Controls the app appearance after launch')}
            {this.renderListItem('Contains basic information about the app')}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            A typical manifest looks like...
          </Heading>
          <Appear>
            <CodePane
              textSize="20px"
              lang="js"
              theme="external"
              source={require('./assets/manifest.json.example')}
            />
          </Appear>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            Not everything is as awesome though
          </Heading>
          <List>
            {this.renderListItem('Incompatible with iOS (for now)')}
            {this.renderListItem('You need to use iOS-specific meta tags')}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            iOS meta tags
          </Heading>
          <Appear>
            <CodePane
              textSize="17px"
              lang="html"
              theme="external"
              source={require('./assets/ios-tags.html.example')}
            />
          </Appear>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            App installation
          </Heading>
          <List>
            {this.renderListItem(
              'Add to Home Screen banner makes it easy to install the app',
            )}
            {this.renderListItem('Informs the user of our PWAs existence!')}
            {this.renderListItem("No App Store needed (if you don't want to)")}
            {this.renderListItem(
              'You need to meet certain conditions for the banner to appear',
            )}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3}>Conditions</Heading>
          <List>
            {this.renderListItem('The Web App is not already installed (duh)')}
            {this.renderListItem(
              'App manifest is present, with icons, start URL and name',
            )}
            {this.renderListItem('The app is served over HTTPS')}
            {this.renderListItem('Successful Service Worker registration')}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} margin="0 0 20px 0">
            App install banner in ACTION
          </Heading>
          <Appear>
            <Image src={androidInstallation} />
          </Appear>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3}>What about iOS?</Heading>
          <Appear>
            <Text>Well...</Text>
          </Appear>
          <List>
            {this.renderListItem('Not supported (yet!)')}
            {this.renderListItem('The banner needs to be implemented manually')}
            {this.renderListItem('The app needs to be installed manually')}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="0 0 50px 0">
            iOS installation process
          </Heading>
          <Image src={iosInstallation} />
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="0 0 50px 0">
            Your turn!
          </Heading>
          <Text margin="0 0 50px 0">Install the PRESENTATION itself ;)</Text>
          <Image src={pwaAppIcon} />
          <Link textSize="50px" href="https://pwa-in-practice.web.app">
            pwa-in-practice.web.app
          </Link>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3}>Testing and tooling</Heading>
          <List>
            {this.renderListItem('Cypress, Selenium for automation')}
            {this.renderListItem('Lighthouse')}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3}>Lighthouse</Heading>
          <List>
            {this.renderListItem(
              'Automated auditing tool for improving the quality of web pages',
            )}
            {this.renderListItem('Accessible via Chrome Dev Tools')}
            {this.renderListItem('Supported on any kind of web pages')}
            {this.renderListItem('Includes many different types of audits')}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3}>Lighthouse audit types</Heading>
          <List>
            {this.renderListItem('Mobile/Desktop responsiveness')}
            {this.renderListItem('Performance')}
            {this.renderListItem('PWA checklist')}
            {this.renderListItem('Best Practices')}
            {this.renderListItem('Accessibility')}
            {this.renderListItem('SEO')}
            {this.renderListItem('Network Simulation')}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4}>Lighthouse – initial setup</Heading>
          <Image src={lighthouseTab} />
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4}>Audit Results</Heading>
          <Image src={lighthouseResults} />
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4}>Audit Results</Heading>
          <List>
            {this.renderListItem(
              'Provides detailed information about each section',
            )}
            {this.renderListItem(
              'Shows you the exact spot where you can improve your app',
            )}
            <Appear>
              <Image src={lighthouseFailed} />
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={3}>Chrome Dev Tools</Heading>
          <List>
            {this.renderListItem('Your best friend for PWAs')}
            {this.renderListItem(
              'Offers insight into critical areas of your app',
            )}
            {this.renderListItem('Application tab in Chrome :)')}
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>Manifest section</Heading>
          <Image src={manifestTab} />
        </Slide>

        <Slide>
          <Heading size={4}>Service Workers section</Heading>
          <Image src={serviceworkersTab} />
        </Slide>

        <Slide>
          <Heading size={4}>Storage Tab</Heading>
          <Image src={storageTab} />
        </Slide>

        <Slide>
          <Heading size={3}>Reaching the users</Heading>
          <List>
            {this.renderListItem('Keep it web only')}
            {this.renderListItem('Deploy it to an App Store!')}
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>App Store deployment</Heading>
          <List>
            {this.renderListItem('Play Store integration since 2018')}
            {this.renderListItem('No iOS support')}
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>Play Store criteria</Heading>
          <List>
            {this.renderListItem('Passing the current PWA criteria')}
            {this.renderListItem('Performance score of 80/100 from Lighthouse')}
            {this.renderListItem('All current Play Store rules')}
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>So it's a hybrid app, right?</Heading>
          <List>
            {this.renderListItem("Nope, there's no APK file")}
            {this.renderListItem('TWA')}
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>
            So... which approach should I use for my app?
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3}>DEPENDS...</Heading>
        </Slide>

        <Slide>
          <Heading size={4}>Going PWA</Heading>
          <List>
            {this.renderListItem('Easy to implement (really)')}
            {this.renderListItem('Framework agnostic')}
            {this.renderListItem('Google and Microsoft are pushing it forward')}
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>(NOT) going PWA</Heading>
          <List>
            {this.renderListItem('Limited native SDK functionality')}
            {this.renderListItem('Not suited for games')}
            {this.renderListItem(
              'Not suited for apps that deal with heavy computation',
            )}
            {this.renderListItem('Bad iOS support (until now, kinda)')}
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>iOS limitations</Heading>
          <List>
            {this.renderListItem('No push notifications')}
            {this.renderListItem('No background sync')}
            {this.renderListItem('No orientation lock')}
            {this.renderListItem('(< iOS 12.2) app sessions not persisted')}
            {this.renderListItem('(< iOS 12.2) no navigation gestures')}
          </List>
        </Slide>

        <Slide>
          <Heading>Thanks!</Heading>
          <Image src={pwaLogo} />
        </Slide>
      </Deck>
    );
  }
}
