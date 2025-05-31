interface XmlData {
  '@'?: {
    [key: string]: string;
  };
}

export function getNamespace(data: XmlData, uri: string): string {
  let ns: string | undefined;

  if (data['@']) {
    Object.keys(data['@']).some(key => {
      if (!/^xmlns:/.test(key)) return false;
      if (data['@']![key] !== uri) {
        return false;
      }

      ns = key.replace(/^xmlns:/, '');
      return true;
    });
  }

  return ns ? ns + ':' : '';
} 