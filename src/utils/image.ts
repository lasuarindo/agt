const extensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tif', 'tiff', 'webp', 'svg', 'heif', 'heic', 'ico', 'apng', 'jxr', 'nef', 'cr2', 'raf', 'orf', 'rw2' ];


export function preloadImage(name: string) {
  const preload = (index: number = 0): Promise<string> => {
    if (index >= extensions.length) {
      return Promise.reject(new Error(`Semua ekstensi gagal dimuat untuk: ${name}`));
    }
    
    const ext = extensions[index];
    const imageUrl = `${name}.${ext}`;
    
    const image = new Image();
    image.src = imageUrl;
    
     return new Promise((resolve, reject) => {
      image.onload = () => {
        resolve(imageUrl);
      }
      
      image.onerror = () => {
        preload(index + 1)
          .then(resolve)
          .catch(reject);
      };
    });
  }
  
  return preload();
}

export function logodev(logo: string) {
  const token = import.meta.env.VITE_API_LOGO_DEV
  
  return `https://img.logo.dev/${logo}?token=${token}`
}