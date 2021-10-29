module.exports = rawRequest => {
  const parsedRequest = rawRequest.split('\r\n');
  return parsedRequest[0].split(' ');
};
