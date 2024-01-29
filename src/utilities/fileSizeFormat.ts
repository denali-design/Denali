/**
 * Converts file size from bytes to a readable format.
 *
 * @param {number} bytes File size in bytes.
 * @returns {string} Readable file size string.
 */
export const fileSizeToReadableFormat = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} bytes`;
  else if (bytes < 1048576)
    // Less than 1 MB
    return `${Math.round((bytes / 1024) * 10) / 10} KB`;
  else if (bytes < 1073741824) {
    // Less than 1 GB
    const sizeInMB = Math.round((bytes / 1048576) * 10) / 10;
    return sizeInMB % 1 === 0 ? `${sizeInMB} MB` : `${sizeInMB.toFixed(1)} MB`;
  } else if (bytes < 1099511627776) {
    // Less than 1 TB
    const sizeInGB = Math.round((bytes / 1073741824) * 10) / 10;
    return sizeInGB % 1 === 0 ? `${sizeInGB} GB` : `${sizeInGB.toFixed(1)} GB`;
  } else {
    // TB and above
    const sizeInTB = Math.round((bytes / 1099511627776) * 10) / 10;
    return sizeInTB % 1 === 0 ? `${sizeInTB} TB` : `${sizeInTB.toFixed(1)} TB`;
  }
};
