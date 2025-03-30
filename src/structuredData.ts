import {type Article, type Person, type WebSite, type WithContext} from 'schema-dts';
import type {CollectionEntry} from 'astro:content';
import {SITE_DESCRIPTION} from './consts';

export const blogWebsite: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: `${import.meta.env.SITE}/blog/`,
    name: 'Anthony Grimes Blog',
    description: 'Software engineering and opinion pieces',
    inLanguage: 'en_GB',
};

export const mainWebsite: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: import.meta.env.SITE,
    name: 'Anthony Grimes Personal Page',
    description: SITE_DESCRIPTION,
    inLanguage: 'en_GB',
};

export const personSchema: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anthony Grimes',
    url: 'https://anthonygrimes.dev',
    sameAs: [
        'https://github.com/anthonygrimes',
        'https://www.linkedin.com/in/anthony-grimes/',
    ],
    jobTitle: 'Lead Software Engineer',
    worksFor: {
        '@type': 'Organization',
        name: 'BR-DGE',
        url: 'https://br-dge.to',
    },
};

export function getArticleSchema(post: CollectionEntry<'blog'>) {
    const articleStructuredData: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.data.title,
        url: `${import.meta.env.SITE}/blog/${post.id}/`,
        description: post.data.description,
        datePublished: post.data.pubDate?.toUTCString(),
        publisher: {
            '@type': 'Person',
            name: 'Anthony Grimes',
            url: import.meta.env.SITE,
        },
        author: {
            '@type': 'Person',
            name: 'Anthony Grimes',
            url: import.meta.env.SITE,
        },
    };
    return articleStructuredData;
}