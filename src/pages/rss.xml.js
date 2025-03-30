import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';
import {SITE_TITLE, SITE_DESCRIPTION} from '../consts';

export async function GET(context) {
    const posts = await getCollection('blog');
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        customData: `<language>en-GB</language>`,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            link: `/blog/${post.id}/`,
        })),
    });
}
