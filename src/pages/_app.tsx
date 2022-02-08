import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { Card, NavBar, Layout } from '../components';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
