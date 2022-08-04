import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "4zwi61xv",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "skx550ZAHpzaAQ3F8rzQGm7u0r5c8VeyIoUqPQrYVBW2URWQOwwcwSXwceltx7jD5tpin531nuCTnXuPWz2tyJFgmB16L1SF2M3IdZEpIhHv54XXnYW487QIEPEdVyomseQodYfiDzhIhvgJL1TqmBkIl6uTXwSb0UpYCnEnUnNqw4R1GR0g",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
