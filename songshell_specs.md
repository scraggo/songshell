# Songshell Specifications

## Should allow for cli arguments

`songshell <song name> <date created>`

n, name: song name (required)

d, date: date created (optional)

if no created date, use current day and say "Songshell created on `today's date`"

## Should create 3 files

```txt
_readme_<song name>.txt
_lyrics_<song name>.txt
_music_<song name>.txt
```

## _readme should contain this text

```txt
# <Song name>

## Initial Idea

date || "Songshell created on `today's date`"

## Influences & Description

...
```

## _lyrics should contain this text

```txt
# <Song Name> Lyrics
```

## _music should contain this text

```txt
# <Song Name> Music

Tempo:

see LyricTemplate.pdf
```

## User checkin

"This will create directory "...". Continue?"
