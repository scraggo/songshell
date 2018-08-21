const todayDate = require('./todayDate');

const readmeTemplate = (songTitle, date) => {
  if (!date) {
    date = todayDate();
  }

  return `# ${songTitle}

## Initial Idea

${date}

## Influences & Description
`;
};

const lyricsTemplate = (songTitle) => {
  return `# ${songTitle} Lyrics
  `;
};

const musicTemplate = (songTitle) => {
  return `# ${songTitle} Music

Tempo:

120 bpm

Else:

see LyricTemplate.pdf
`;
};

const templateMap = {
  '_readme_': readmeTemplate,
  '_lyrics_': lyricsTemplate,
  '_music_': musicTemplate,
};

module.exports = templateMap;
