import { Provider } from 'react-redux';
import { store } from '@/store';
import '../styles/index.css';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
