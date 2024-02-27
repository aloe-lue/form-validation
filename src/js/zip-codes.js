const zipCodes = {
  switzerland: {
    pattern: '^(CH-)?\\d{4}$',
    formatGuide:
      'Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950',
  },
  france: {
    pattern: '^(F-)?\\d{5}$',
    formatGuide:
      'France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012',
  },
  germany: {
    pattern: '^(D-)?\\d{5}$',
    formatGuide:
      'Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345',
  },
  netherlands: {
    pattern: '^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$',
    formatGuide:
      'Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS',
  },
};

export default zipCodes;
