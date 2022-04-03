import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import Clients from 'sections/clients';
import Blog from 'sections/blog';
import Recourse from "sections/recourse"

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Evde paketleme"
          description="Evde paketleme hizmeti"
        />
        <Banner />
        <UltimateFeatures />
        <Clients />
        <Blog />
        <Recourse />
      </Layout>
    </ThemeProvider>
  );
}
