import * as T from './type-helpers';
import { action } from './action';

it.skip('skip', () => undefined);

describe('with symbol', () => {
  const ACTION = Symbol(1);
  const withSymbol = () => action(ACTION as any);
  // @dts-jest:pass:snap
  withSymbol(); // => { type: ACTION }
});

describe('with type only', () => {
  const withTypeOnly = () => action('ACTION');
  // @dts-jest:pass:snap
  withTypeOnly(); // => { type: 'ACTION' }
});

describe('with payload', () => {
  const withPayload = (message: string) => action('ACTION', message);
  // @dts-jest:pass:snap
  withPayload('Hello!'); // => { type: 'ACTION',payload: 'Hello!' }
});

describe('with optional payload', () => {
  const withOptionalPayload = (message?: string) => action('ACTION', message);
  // @dts-jest:pass:snap
  withOptionalPayload(); // => { type: 'ACTION' }
  // @dts-jest:pass:snap
  withOptionalPayload('Hello!'); // => { type: 'ACTION', payload: 'Hello!' }
});

describe('with meta', () => {
  const withMeta = (scope: string) => action('ACTION', undefined, scope);
  // @dts-jest:pass:snap
  withMeta('info'); // => { type: 'ACTION', meta: 'info' }
});

describe('with optional meta', () => {
  const withOptionalMeta = (scope?: string) =>
    action('ACTION', undefined, scope);
  // @dts-jest:pass:snap
  withOptionalMeta(); // => { type: 'ACTION' }
  // @dts-jest:pass:snap
  withOptionalMeta('info'); // => { type: 'ACTION', meta: 'info' }
});

describe('with payload and meta', () => {
  const withPayloadAndMeta = (message: string, scope: string) =>
    action('ACTION', message, scope);
  // @dts-jest:pass:snap
  withPayloadAndMeta('Hello!', 'info'); // => { type: 'ACTION', payload: 'Hello!', meta: 'info' }
});

describe('with optional payload and meta', () => {
  const withOptionalPayloadAndMeta = (scope: string, message?: string) =>
    action('ACTION', message, scope);
  // @dts-jest:pass:snap
  withOptionalPayloadAndMeta('info'); // => { type: 'ACTION', meta: 'info' }
  // @dts-jest:pass:snap
  withOptionalPayloadAndMeta('info', 'Hello!'); // => { type: 'ACTION', payload: 'Hello!', meta: 'info' }
});

describe('with payload and optional meta', () => {
  const withPayloadAndOptionalMeta = (message: string, scope?: string) =>
    action('ACTION', message, scope);
  // @dts-jest:pass:snap
  withPayloadAndOptionalMeta('Hello!'); // => { type: 'ACTION', payload: 'Hello!' }
  // @dts-jest:pass:snap
  withPayloadAndOptionalMeta('Hello!', 'info'); // => { type: 'ACTION', payload: 'Hello!', meta: 'info' }
});

describe('with optional payload and optional meta', () => {
  const withOptionalPayloadAndOptionalMeta = (
    message?: string,
    scope?: string
  ) => action('ACTION', message, scope);
  // @dts-jest:pass:snap
  withOptionalPayloadAndOptionalMeta(); // => { type: 'ACTION' }
  // @dts-jest:pass:snap
  withOptionalPayloadAndOptionalMeta('Hello!'); // => { type: 'ACTION', payload: 'Hello!' }
  // @dts-jest:pass:snap
  withOptionalPayloadAndOptionalMeta('Hello!', 'info'); // => { type: 'ACTION', payload: 'Hello!', meta: 'info' }
});
