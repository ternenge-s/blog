require('dotenv').config();
const sanityClient = require('@sanity/client');

import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-06-25', // use current UTC date - see "specifying API version"!
  token: process.env.ACCESS_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export function UrlFor(source) {
  return builder.image(source);
}

export const Projects = client.fetch(`*[_type=='projects']`);
export const HeroContent = client.fetch(`*[_type=='heroContent']`);
export const Techs = client.fetch(`*[_type=='techs']`);
export const About = client.fetch(`*[_type=='about']`);