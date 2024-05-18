import React from 'react';
import SanityImage from 'gatsby-plugin-sanity-image';

const imageGallery = ({ value }) => {
  if (!value?.images?.length) return null;
  if (!value.images[0].asset) return null;

  return (
  <div className="not-prose columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
    {value.images.map((image) => (
      <div key={image?.asset?._id} className='h-min w-full'>
        <SanityImage {...image} width={600} className='w-auto h-auto mx-auto object-cover' alt='' />
      </div>))
    }
  </div>);
};

export default imageGallery;
