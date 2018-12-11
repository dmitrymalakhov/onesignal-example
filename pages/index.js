import React, { Component } from 'react';
import Head from 'next/head'

export default class App extends Component {
  componentDidMount() {
    var OneSignal = window.OneSignal || [];
    OneSignal.push(function() {
      OneSignal.init({
        allowLocalhostAsSecureOrigin: true,
        appId: "1e54993c-e3e3-4a78-9b5c-f48353a797e1",
      })
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="manifest" href="/manifest.json" />
          <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async="" />
        </Head>
        <p>Hello world!</p>
      </div>
    );
  }
}