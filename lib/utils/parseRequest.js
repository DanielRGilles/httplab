module.exports = rawRequest => {
  const parsedRequest = rawRequest.split('\r\n');
  const [method, path] = parsedRequest[0].split(' ');
  const body = parsedRequest[parsedRequest.length - 1];
  return {
    method,
    path,
    body
  };
};
