import React from 'react';
import { Button } from './components/Button';
import { Label } from './components/Label';
import { Text } from './components/Text';
import { Card } from './components/Card';
import { Dropdown } from './components/Dropdown';
import { RadioButton } from './components/RadioButton';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      
      <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>UI Component Garden</h1>

      {/* Typography & Labels */}
      <section style={{ margin: '20px 0' }}>
        <h2>Typography & Labels</h2>
        <Label text="Form Input Label:" htmlFor="sample-dropdown" />
        <Text content="This is a standard paragraph component demonstrating body text styling." size="medium" />
      </section>

      {/* Form Controls */}
      <section style={{ margin: '20px 0' }}>
        <h2>Form Controls</h2>
        <div style={{ marginBottom: '15px' }}>
          <Dropdown 
            options={[
              { label: 'Choose an option...', value: '' },
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' }
            ]} 
          />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <RadioButton label="Active Choice" name="options" value="1" checked={true} />
          <RadioButton label="Disabled Choice" name="options" value="2" disabled={true} />
        </div>
      </section>

      {/* Card Container */}
      <section style={{ margin: '20px 0' }}>
        <h2>Card Container</h2>
        <Card title="Interactive Card">
          <Text content="This card wraps child elements like our custom button component." />
          <Button text="Click Me" onClick={() => alert('Button clicked!')} />
        </Card>
      </section>

    </div>
  );
}

export default App;