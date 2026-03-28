const imagesRow1 = [
  { url: 'https://i.pinimg.com/736x/d7/00/03/d70003b95d7f45561ed73b8fa8bb2877.jpg' },
  { url: 'https://i.pinimg.com/736x/25/0e/8c/250e8cbbb2d656cabbf0207e71d76999.jpg' },
  { url: 'https://i.pinimg.com/736x/09/c3/2e/09c32e13d12f781476a85781acd6e4c2.jpg' },
  { url: 'https://i.pinimg.com/736x/8a/af/b6/8aafb65e3c557ec9e8990a7ebcdf1d3f.jpg' },
  { url: 'https://i.pinimg.com/736x/26/31/25/26312531a462d358799680e30ee3afbd.jpg' },
  { url: 'https://i.pinimg.com/736x/5e/9d/c1/5e9dc109e59249742bed308035e8dad4.jpg' },
];

const imagesRow2 = [
  { url: 'https://i.pinimg.com/736x/7a/ab/3d/7aab3d910ac3a507b8b4510bf73c0130.jpg' },
  { url: 'https://i.pinimg.com/736x/84/47/03/844703b27c3118e0e3a266d34ef3c922.jpg' },
  { url: 'https://i.pinimg.com/736x/92/73/40/92734050ae39ac37d92c6e18573809c0.jpg' },
  { url: 'https://i.pinimg.com/736x/29/b9/0d/29b90d0e1134e95771ac5d738dd5f092.jpg' },
  { url: 'https://i.pinimg.com/736x/04/54/a3/0454a3db77ea9667509908f2110e8bb3.jpg' },
  { url: 'https://i.pinimg.com/736x/fc/34/3e/fc343e603e7ae4a6195ae7b62dcdd4df.jpg' },
];

export default function GalleryMarquee() {
  const track1 = [...imagesRow1, ...imagesRow1];
  const track2 = [...imagesRow2, ...imagesRow2];

  return (
    <div className="gallery-marquee-container">
      {/* Top Track: Moves Left */}
      <div className="gallery-track track-left">
        {track1.map((img, i) => (
          <div className="gallery-item" key={i}>
            <div className="gallery-inner">
              <img src={img.url} alt={`Gallery moment ${i}`} className="gallery-img" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Track: Moves Right */}
      <div className="gallery-track track-right">
        {track2.map((img, i) => (
          <div className="gallery-item" key={i}>
            <div className="gallery-inner">
              <img src={img.url} alt={`Gallery moment ${i}`} className="gallery-img" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
