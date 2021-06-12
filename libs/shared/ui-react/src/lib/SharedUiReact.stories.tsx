import React from 'react';
import { SharedUiReact, SharedUiReactProps } from './SharedUiReact';

export default {
  component: SharedUiReact,
  title: 'SharedUiReact',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedUiReactProps = {};

  return <SharedUiReact />;
};
