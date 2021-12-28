import React from 'react';
import { renderToString } from 'react-dom/server';
import { Button } from './components/Button';
import { Divider } from './components/Divider';
import { Html } from './Html';
import { Layout } from './Layout';

const Login = ({ uid }: { uid: string }) => (
  <Layout title="Login With">
    <div className="mt-4 h-9">
      <Button style="bg-[#5865F2] overflow-none">
        <div className="mt-[1px] h-9">
          <img
            src="/Discord-Logo.svg"
            alt="discord logo"
            width="300"
            height="30"
            className="inline w-[300px] h-[30px]"
          />
        </div>
      </Button>
    </div>
    <div className="flex flex-row gap-2">
      <Divider color="border-white w-full mt-4" />
      <span>or</span>
      <Divider color="border-white w-full mt-4" />
    </div>
    <div>
      <form
        action={`/auth/interaction/${uid}/login`}
        method="post"
        className="flex flex-col gap-2"
      >
        <label htmlFor="email" className="block text-center font-bold w-full">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="rounded w-full h-9 dark:bg-[#555] text-center"
          placeholder="Email"
        />
        <Button type="submit">Send Link</Button>
      </form>
    </div>
  </Layout>
);

export function LoginPage(uid: string) {
  const content = renderToString(<Login uid={uid} />);
  return Html({ title: 'Login', content });
}
