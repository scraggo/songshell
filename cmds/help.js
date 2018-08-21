const menus = {
  main: `    USAGE:
    songshell [song title] [date created]

    ARGUMENTS:
    song title ......... title of song (required)
        (PacalCase preferred)
    date created ....... date of song creation (optional)
        (use quotes if spaces: "Aug 1, 1987")
    version ............ show package version
    help ............... show help menu for a command`
};

module.exports = (args) => {
  // const subCmd = args._[0] === 'help' ?
  //   args._[1] :
  //   args._[0];

  // console.log(menus[subCmd] || menus.main);
  console.log(menus.main);
};
