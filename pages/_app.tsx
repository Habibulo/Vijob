import type { AppProps } from 'next/app';
import React from 'react';
import { appWithTranslation } from 'next-i18next';
// import { ApolloProvider } from '@apollo/client';
import '../styles/globals.css'; 
import { JobProvider } from '@/context/JobContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
	// const client = useApollo(pageProps.initialApolloState);
  // if u want to fetch the data using apollo from backend. uncomment the line 
    <JobProvider>
			{/* <ApolloProvider client={client}> */}
      <Component {...pageProps} />
			{/* </ApolloProvider> */}
    </JobProvider>
  );
}

export default appWithTranslation(MyApp);
