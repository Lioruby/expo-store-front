import * as React from 'react';

import { ExpoStoreFrontViewProps } from './ExpoStoreFront.types';

export default function ExpoStoreFrontView(props: ExpoStoreFrontViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
