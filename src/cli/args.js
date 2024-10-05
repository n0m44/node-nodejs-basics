const parseArgs = () => {
    const parseArgsRegexp = /(--)\S*(\s)\S*/g;
    const toPrint = Array.from(process.argv.join(' ').matchAll(parseArgsRegexp))
      .map(((execArray) => execArray[0].split(' ').join(' is ')))
      .join(', ');

    console.log(toPrint);
};

parseArgs();