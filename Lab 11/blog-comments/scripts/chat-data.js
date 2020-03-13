const formId = "1FAIpQLSdHSdDiuV-eRoJF-nlLA9lPDXhgmMUZUHOyL4BKO-WWzqC2xQ";
const name = "entry.1203983796";
const message = "entry.1148351669";
const urlPOST = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

let sheetId = "1I_D1hLJaPhMAE22GThJM4HmSIk5rtEtf_u8gh3Sjk-A";
const key = "AIzaSyDivA4TrP-gHTN7uZOy0ZRcbAQrUvjHsJM";
const sheet = encodeURIComponent("Form Responses 1");
const urlGET = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheet}?key=${key}`;
