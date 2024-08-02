import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoStoreFront.web.ts
// and on native platforms to ExpoStoreFront.ts
import ExpoStoreFrontModule from './ExpoStoreFrontModule';
import ExpoStoreFrontView from './ExpoStoreFrontView';
import { ChangeEventPayload, ExpoStoreFrontViewProps } from './ExpoStoreFront.types';

// Get the native constant value.
export const PI = ExpoStoreFrontModule.PI;

export function hello(): string {
  return ExpoStoreFrontModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoStoreFrontModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoStoreFrontModule ?? NativeModulesProxy.ExpoStoreFront);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoStoreFrontView, ExpoStoreFrontViewProps, ChangeEventPayload };
