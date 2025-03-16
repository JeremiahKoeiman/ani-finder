export const base64toBlob = (base64: string, contentType: string, sliceSize = 512): Blob => {
  // decode base64 string
  const byteCharacters = atob(base64);
  const byteArrays = [];

  // create bytes for every characters point based on the slice size
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    // create typed array byte values
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
};
