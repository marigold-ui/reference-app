import { MarigoldProvider } from '@marigold/components';
import theme from '@marigold/theme-core';

import { Tabs } from './Tabs';
import { Goto } from './Tabs/Goto';

const App = () => (
  <MarigoldProvider theme={theme} className="h-[400px]">
    <Tabs defaultActiveTab="description">
      <Tabs.List>
        <Tabs.Item id="description">Description</Tabs.Item>
        <Tabs.Item id="locations">Locations</Tabs.Item>
        <Tabs.Item id="merchandise">Merchandise</Tabs.Item>
      </Tabs.List>
      <Tabs.Panel id="description">
        <div className="prose">
          <strong>DJ Wobblemeister's Wobble Extravaganza</strong>
          <p className="m-0">
            Join us for an unforgettable night with DJ Wobblemeister, the
            maestro of wobble beats and king of quirky dance moves. Expect an
            evening filled with thumping bass, wobbly rhythms, and an
            unparalleled light show. It's going to be a wobbly good time!
          </p>
          <p>
            Curious about the event details? Find out
            <Goto to="locations">when and where</Goto> DJ Wobblemeister will be
            turning up the wobble! Make sure to check out our exclusive
            <Goto to="merchandise">merchandise</Goto>. Only available during the
            tour!
          </p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel id="locations">
        <div className="prose">
          <ul className="m-0">
            <li>Wobbleville - June 20th</li>
            <li>Bass City - June 25th</li>
            <li>Quirkytown - July 1st</li>
            <li>Beatsburgh - July 5th</li>
          </ul>
          <p>
            <Goto to="description">Back to the description</Goto>
          </p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel id="merchandise">
        <div className="prose">
          <p className="mt-0">
            Grab your exclusive DJ Wobblemeister merchandise at the concert!
          </p>
          <ul>
            <li>Wobble Hats - $25</li>
            <li>Quirky T-Shirts - $30</li>
            <li>Bass Boosted Hoodies - $50</li>
            <li>Glow-in-the-dark Wobble Wristbands - $10</li>
          </ul>
          <p>
            <Goto to="description">Back to the description</Goto>
          </p>
        </div>
      </Tabs.Panel>
    </Tabs>
  </MarigoldProvider>
);

export default App;
