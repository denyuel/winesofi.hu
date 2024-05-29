import React from 'react';
import SanityImage from 'gatsby-plugin-sanity-image';

const imageGallery = ({ value }) => {
  if (!value?.images?.length) return null;
  if (!value.images[0].asset) return null;

  return (
    <div className="flex overflow-x-auto overflow-y-hidden gap-2 h-full">
      {value.images.map((image) => (
        <div key={image?.asset?._id} className="flex-shrink-0 h-full w-full sm:w-1/2 lg:w-1/3">
          <SanityImage
            {...image}
            className="w-full h-full object-cover aspect-square m-0"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default imageGallery;
