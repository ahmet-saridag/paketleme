/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import Post from 'components/cards/post';

import mission from 'assets/images/blog/mission.jpg';
 import vision from 'assets/images/blog/vision.jpg';
 import about from 'assets/images/blog/about.png';
//  import abouts from 'assets/images/blog/abouts.jpg';

import news2 from 'assets/images/blog/2.png';
import news3 from 'assets/images/blog/3.png';
import news4 from 'assets/images/blog/4.png';

const data = [
  {
    id: 1,
    image: mission,
    title: 'Misyonumuz',
    desc:
      ` Hedef organizasyon ve paketleme olarak çalıştığımız 9 firma ile ilk amacımız
      Türkiye'de gelirsiz kişi bırakmamak istiyoruz. Evde iş yaparak asgari ücret üstünde kazanabilirsiniz.
      Şunu belirtmek isteriz ki başvurular sabıka kaydına ve gelir düzeyine göre kabul ediyoruz. 
      Yapılan başvuruları uzman ekibimiz ile detaylı bir şekilde incelemesini yaptıktan sonra ekip 
      arkadaşlarımız tarafından sizlere geri dönüş sağlanıyor.Başvurunun son aşaması teyit aşaması oluyor. 
      Daha sonrasında bizimle paylaştığınız adres teyit edilerek ilk paketleme ürünleriniz tarafınıza teslim ediliyor.
      Biz firma olarak devletin herhangi bir kurumu ile bağlantılı değiliz. 
      Bağımsız fabrikalara ve organizasyon şirketlerine çalışma arkadaşları yönlendirmesi yaparak gelir elde ediyoruz. 
      Firmamız ve çalışanlarımız sizlerden kapora veya ücret isteme yetkisi yoktur.
      Türkiye'nin kaporasız hizmet veren şirketi olarak gurur duyarız.
    `
    ,
  },
  {
    id: 2,
    image: about,
    title:
      'Hakkımızda',
    desc: `HEDEF ORGANİZASYON Ve Paketleme olarak ülkemizde geliri olmayan kişi bırakmıyoruz.
      Yıllardır 81 ile verdiğimiz evde paketleme , evde aşçılık , temizli elemanı işleri sayesinde birçok kişiyi
      hayal ettiği gelire ve işe kavuşturduk. 
      Çalıştığımız firmalar sayesinde Türkiye'nin güvenilir en büyük organizasyon şirketi olmaktan gurur duyuyoruz.

      Sizde güvenilir bir firma ile hayal ettiğiniz işe kavuşmak istiyorsanız doğru yerdesiniz 
      HEDEF ORGANİZASYON Ve Paketleme olarak güvenilir firmalarla deneyimli ve profesyonel çalışanlarımız ile hizmetinizdeyiz.
    `,
  },
  {
    id: 3,
    image: vision,
    title: 'Vizyonumuz',
    desc: `Firmalarımızın ve şirketimizin gücü ile ülkemizde gelirsiz aile ve kişi bırakmamak. 
    Şirketimiz en başta gelen özeliği güven ve kalitesidir. 
    Çalışanlarımızın uzmanlığı ve deneyimleri sayesinde hizmetteyiz.`,
  },
  {
    id: 4,
    image: about,
    title: 'Evde Paketleme İşi Nedir ?',
    desc: `Evde paketlenmesini yapacağınız iş malzemelerinizi anlaşmalı olduğumuz
    kargo şirketi evinize bırakıp ürünlerini paketlemesi bittiğinde evinizden teslim alır
    Siz verdiğimiz ürünlerin sorumluluğu ve güvencesi size aittir.
    Size verdiğimiz ürünlerin paketlemesi bittiğinde bize net bir resim geçkip
    attığınız taktirde ödenmeniz size ait olan ödeme adresine yatırılır ve kargocumuz tarafından teslim alınır
    Sizde evde paketleme yaparak yüksek gelir elde etmek istiyorsanız. 
    Aşağıda bulunan butona tıklayıp bizimle iletişime geçebilirsiniz.
    `,
  },
];

const masonryOptions = {
  originTop: false,
};

const Blog = () => {
  return (
    <section id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Hakkımızda"
          title="Bizi yakından tanıyın"
        />
        <Masonry sx={styles.masonry} options={masonryOptions}>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [6, null, null, null, 2, 10, 14],
    pb: [2, null, null, null, 6, 10, 14],
  },
  masonry: {
    maxWidth: 1250,
    mx: [-3, null, null, null, 'auto'],
  },
};
