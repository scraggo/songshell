# Songshell

CLI to create a directory with boilerplate music, lyrics, and readme files to get started with songwriting.

## Getting Started

This tool was created following this tutorial: [Creating a real-world CLI app with Node](https://timber.io/blog/creating-a-real-world-cli-app-with-node/).

Todo: Make global install available.

Usage:

- In your terminal, navigate to the directory you'd like to create your new song directory.

- `songshell -h` shows the help menu below:

```txt
    songshell [song title] [date created]

    ARGUMENTS:
    song title ......... title of song (required)
        (PacalCase preferred)
    date created ....... date of song creation (optional)
        (use quotes if spaces: "Aug 1, 1987")
    version ............ show package version
    help ............... show help menu for a command
```

- `songshell MyNewSong` or `songshell MyNewSong "Aug 1 2018"`* creates a directory structure like so:

```txt
MyNewSong/_music_MyNewSong.txt
         /_readme_MyNewSong.txt
         /_lyrics_MyNewSong.txt
```

\* If a date isn't specified, the current day is used.

Each file contains a little bit of boilerplate to help you organize your songwriting process. See [./utils/templates.js](utils/templates.js).

### Prerequisites

- Node
- npm

## Etc

This is a WIP. Please [contact me](https://scraggo.github.io/contact) if you have questions or would like to contribute.