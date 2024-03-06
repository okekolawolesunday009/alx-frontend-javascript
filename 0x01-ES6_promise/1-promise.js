export default function getFulReportResponseFromAPI(success) {
  return new Promise((res, rej) => {
    if (success === true) {
      return res({ status: 200, body: 'Success' });
    }
    return rej(new Error('The fake API is not working currectly'));
  });
}
