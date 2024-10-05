const parseEnv = () => {
    const targetEnvVariableRegexp = /^(RSS_).*$/gm;
    const rssEnvVariables = Object.entries(process.env)
      .filter(([variableName, ]) => targetEnvVariableRegexp.test(variableName))
      .map(([variableName, variableValue]) => `${variableName}=${variableValue}`)
      .join('; ');

    console.log(rssEnvVariables);
};

parseEnv();