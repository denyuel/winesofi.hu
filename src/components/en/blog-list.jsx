import React from "react";
import { Link } from "gatsby";
import { PortableText } from "@portabletext/react";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogList = ({ nodes = []}) => (
  <div className="flex flex-col items-center">
    {nodes.map((node, index) => (
      <article
        className={`blog_post_card flex-col-reverse w-full ${
          index % 2 ? "blog-second" : "blog-first lg:flex-row-reverse"
        }`}
        key={node.id}
      >
        <div className="blog-article-child flex flex-1 items-center self-stretch py-4 lg:py-0 lg:pl-32 lg:-ml-28 rounded-b-2xl lg:rounded-none">
          <div className="px-8">
            <span className='bg-brown py-1 px-[10px] text-white rounded font-open font-semibold text-xs uppercase mr-2'>winery blog</span>
            <span className="text-gray-500">{node._createdAt}</span>
            <h2 className="mt-2 text-post_title font-bold font-cormorant_sc">
              {node.title}
            </h2>
            <hr className="w-8 mt-3 h-1 opacity-25"></hr>
            <div className="prose py-6 font-sans">
              <PortableText
                value={node._rawSummary}
                // components={/* optional object of custom components to use */}
              />
            </div>
            <Link className="button" to={`/post/${node.slug.current}`}>
              Read more
            </Link>
          </div>
        </div>

        <div className="flex items-center lg:container h-auto w-full lg:max-w-104 lg:max-h-104">
          <GatsbyImage
            image={node.mainImage?.asset?.gatsbyImageData}
            alt={node.title}
            className="rounded-t-2xl lg:rounded-full aspect-video w-full h-auto md:aspect-auto lg:aspect-square object-cover"
          />
        </div>
      </article>
    ))}
  </div>
);

export default BlogList;
