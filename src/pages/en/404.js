import React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../../components/seo';
import Layout from '../../components/en/layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <div>
        <div className="bg-narrow-hero w-full min-h-28 bg-cover"></div>
        <div className="container mx-auto px-4">
          <h1 className="title text-4xl my-8">The page you are looking for could not be found.</h1>
          <div className="h-px w-10 opacity-20 bg-button_black mr-auto my-4"></div>
          <div className="prose max-w-none bold-text my-8">
            Please check the URL you entered or return to <Link to="/en/">home</Link>.
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="Page cannot be found" pathname="/en/404" />;
