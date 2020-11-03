import React from 'react';
import Head from 'next/head';
import { LoginPage } from '@frontegg/react-auth';
const isSSR = typeof window === 'undefined';

function Login() {
  return <div>
    <Head>
      <title>Login</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {!isSSR && <LoginPage />}
  </div>;
}

export default Login;
