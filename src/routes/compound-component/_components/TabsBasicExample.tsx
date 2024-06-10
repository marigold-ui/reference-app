import { Tabs } from './TabsBasic';

// Content
// ---------------
const Description = () => (
  <div>
    <strong>DJ Wobblemeister's Wobble Extravaganza</strong>
    <p className="m-0">
      Join us for an unforgettable night with DJ Wobblemeister, the maestro of
      wobble beats and king of quirky dance moves. Expect an evening filled with
      thumping bass, wobbly rhythms, and an unparalleled light show. It's going
      to be a wobbly good time!
    </p>
  </div>
);

const Locations = () => (
  <ul className="m-0">
    <li>Wobbleville - June 20th</li>
    <li>Bass City - June 25th</li>
    <li>Quirkytown - July 1st</li>
    <li>Beatsburgh - July 5th</li>
  </ul>
);

const Merchandise = () => (
  <div>
    <p className="mt-0">
      Grab your exclusive DJ Wobblemeister merchandise at the concert!
    </p>
    <ul>
      <li>Wobble Hats - $25</li>
      <li>Quirky T-Shirts - $30</li>
      <li>Bass Boosted Hoodies - $50</li>
      <li>Glow-in-the-dark Wobble Wristbands - $10</li>
    </ul>
  </div>
);

const App = () => (
  // add height so the example does not jump
  <div className="h-[340px]">
    <Tabs
      tabs={[
        { title: 'Description', content: <Description /> },
        { title: 'Locations', content: <Locations /> },
        { title: 'Merchandise', content: <Merchandise /> },
      ]}
    />
  </div>
);

export default App;
