import { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
//
//
//
export const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-06-25',
  token: import.meta.env.VITE_SANITY_ACCESS_TOKEN,
  useCdn: true,
});
//
//
const builder = imageUrlBuilder(client);
//
//
export const urlFor = (source) => builder.image(source);
