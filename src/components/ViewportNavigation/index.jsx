import React from 'react';

import { Container, AutoRotate, Perspective } from './style';

export default function ViewportNavigation({ currentView, autoRotate, setAutoRotate }) {
  function viewportControl(newView) {
    console.log(`Log: ${newView}`);
  }

  return (
    <Container>
      <AutoRotate
        autoRotate={autoRotate}
        onClick={() => setAutoRotate(!autoRotate)}
      >
        ROTATION TOGGLE
      </AutoRotate>
      <Perspective currentView={currentView} onClick={() => viewportControl('PERSPECTIVE')}>PERSPECTIVE</Perspective>
      {/* <Front onClick={() => viewportControl('FRONT')}>FRONT</Front>
      <Side onClick={() => viewportControl('SIDE')}>SIDE</Side> */}
    </Container>
  );
}
