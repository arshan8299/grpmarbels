import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'wdnwk2kv',
  dataset: 'production',
  apiVersion: '2024-03-26',
  useCdn: true,
  token:'skygMCxLRTYwn7VskLnv3wNjD4YAzSXOrtE7FlTvxXDvBsmMlmdLMJdLEFtqVoMKIrBEWJyZQNNhoCDSYG7ME79ooq6ANzF3RUaQx9H1ViFYJpvsJOxfyqbgNSUlHh9F9VHWbXcrFj3dH9bqPQOsgWnvVZggrhDQq4E6gVni5EqLjriN9aTD',
});




export const urlFor = (source) => imageUrlBuilder(client).image(source);