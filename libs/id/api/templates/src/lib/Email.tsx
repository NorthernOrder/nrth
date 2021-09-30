import React from 'react';
import { renderToString } from 'react-dom/server';
import { Html } from './Html';
import { Layout } from './Layout';

function Email() {
  return (
    <Layout title="Email Sent">
      <div className="flex flex-col items-center mt-2">
        <p>Sent an email to the address</p>
        <span className="italic">address</span>
        <p className="text-sm mt-4">You can now close this page</p>
      </div>
    </Layout>
  );
}

export function EmailPage() {
  const content = renderToString(<Email />);
  return Html({ title: 'Email Sent', content });
}
