import fsPromises from 'fs/promises';
import path from 'path';
import fm from 'front-matter';

export interface PodcastCategory {
  name: string;
  subcategories: string[];
}

export interface PodcastItem {
  title: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  audio: string;
  id: number;
  episodeLength: number;
  seasonNumber: number;
}

const PODCAST_CHANNEL_CONFIG = {
  author: 'Your name here',
  email: 'youemail@domain.com',
  podcastTitle: 'My Podcast',
  description: 'Nothing special',
  podcastWebsiteUrl: 'https://mywebsite.com',
  podcastType: 'episodic' as 'episodic' | 'serial',
  language: 'en-us',
  categories: [
    {
      name: 'Music',
      subcategories: [ 'Music History' ]
    }
  ] as PodcastCategory[],
}

export default (async () => {
  const postFiles = await fsPromises.readdir(
    path.resolve(__dirname, '../content/podcasts'),
  );

  const feedItems: PodcastItem[] = [];

  await Promise.all(
    postFiles.map(async (file, i) => {
      const fileAtPath = path.resolve(
        __dirname,
        '../content/podcasts/' + file,
      );

      const fileData = await fsPromises.readFile(fileAtPath, {
        encoding: 'utf-8',
      });

      const frontmatter = fm(fileData).attributes as PodcastItem;

      feedItems.push({
        title: frontmatter.title,
        id: i,
        audio: `${PODCAST_CHANNEL_CONFIG.podcastWebsiteUrl}/${frontmatter.audio.replace(
          '/public',
          '',
        )}`,
        description: frontmatter.description,
        content: frontmatter.content,
        date: frontmatter.date,
        image: `${PODCAST_CHANNEL_CONFIG.podcastWebsiteUrl}/${frontmatter.image}`,
        episodeLength: frontmatter.episodeLength,
        seasonNumber: frontmatter.seasonNumber,
      });
    }),
  );

  const xmlItem = (item: PodcastItem, index: number) => {
    return `<item>
        <title>${item.title}</title>
        <category domain="">${PODCAST_CHANNEL_CONFIG.author}</category>
        <author>${PODCAST_CHANNEL_CONFIG.email} (${PODCAST_CHANNEL_CONFIG.author})</author>
        <link>${item.audio}</link>
        <guid>${item.audio}</guid>
        <itunes:image>${item.image}</itunes:image>
        <description>${item.description}</description>
        <pubDate>${item.date}</pubDate>
        <enclosure
          url="${item.audio}"
          length="${item.episodeLength}"
          type="audio/mpeg"
        />
        <itunes:episode>${index + 1}</itunes:episode>
        <itunes:season>${item.seasonNumber}</itunes:season>
      </item>`;
  };

  const xmlDocData = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
      <title>${PODCAST_CHANNEL_CONFIG.podcastTitle}</title>
      <link>${PODCAST_CHANNEL_CONFIG.podcastWebsiteUrl}/feeds/podcast.rss</link>
      <author>${PODCAST_CHANNEL_CONFIG.email} (${PODCAST_CHANNEL_CONFIG.author})</author>
      <itunes:owner>
        <itunes:name>${PODCAST_CHANNEL_CONFIG.author}</itunes:name>
        <itunes:email>${PODCAST_CHANNEL_CONFIG.email}</itunes:email>
      </itunes:owner>
      <description>${PODCAST_CHANNEL_CONFIG.description}</description>
      <itunes:image href="${PODCAST_CHANNEL_CONFIG.podcastWebsiteUrl}/images/pod-channel-art-3000x3000.png" />
      ${
        PODCAST_CHANNEL_CONFIG.categories.map(cat => {
          return `
          <itunes:category text="${cat.name}">
            ${cat.subcategories.map(subCat => {
              return `<itunes:category text="${subCat}" />`;
            }).join('')}
          </itunes:category>
          `;
        }).join('')
      }
      <itunes:type>${PODCAST_CHANNEL_CONFIG.podcastType}</itunes:type>
      <itunes:author>${PODCAST_CHANNEL_CONFIG.author}</itunes:author>
      <language>${PODCAST_CHANNEL_CONFIG.language}</language>
      <copyright>Copyright ${new Date().getFullYear()} ${PODCAST_CHANNEL_CONFIG.author}.</copyright>
      ${feedItems.map((item, index) => xmlItem(item, index)).join('')}
    </channel>
  </rss>`;

  await fsPromises.mkdir(path.resolve(__dirname, '../dist/feeds'), {
    recursive: true,
  });

  await fsPromises.writeFile(
    path.resolve(__dirname, '../dist/feeds/podcast.rss'),
    xmlDocData,
  );

  await fsPromises.writeFile(
    path.resolve(__dirname, '../dist/feeds/podcast-apple.rss'),
    xmlDocData,
  );
})();
