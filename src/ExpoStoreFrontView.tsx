import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoStoreFrontViewProps } from './ExpoStoreFront.types';

const NativeView: React.ComponentType<ExpoStoreFrontViewProps> =
  requireNativeViewManager('ExpoStoreFront');

export default function ExpoStoreFrontView(props: ExpoStoreFrontViewProps) {
  return <NativeView {...props} />;
}
