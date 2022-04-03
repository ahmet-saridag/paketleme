/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import ballon from 'assets/images/features/surprise.png';
import beads from 'assets/images/features/beads.png';
import packaging from 'assets/images/features/packaging.png';
import screw from 'assets/images/features/screw.png';
import chocolateBox from 'assets/images/features/chocolate-box.png';
import socks from 'assets/images/features/socks.png';
import shoe from 'assets/images/features/shoe.png';
import gloves from 'assets/images/features/gloves.png';
import shampoo from 'assets/images/features/shampoo.png';
import cottonSwabs from 'assets/images/features/cotton-swabs.png';
import slippers from 'assets/images/features/slippers.png';
import takeAway from 'assets/images/features/take-away.png';
import ring from 'assets/images/features/ring.png';
import attachment from 'assets/images/features/attachment.png';
import presentBox from 'assets/images/features/present-box.png';
import ink from 'assets/images/features/ink.png';

const data = [
  {
    id: 1,
    icon: ballon,
    path: '#basvuru',
    title: 'BALON PAKETLEME',
    description: `Günümüzde artış gösteren parti ve organizasyon şirketleri müşterilerine en hızlı ve kaliteli hizmet sunmak için evlere paketleme işi verirler. Amaçları sadece üretim yapıp ve hızlı bir şekilde paketlemelerini yapmak için böyle bir iş noktası yaratmışlardır. Fiyat ve detaylar şu şekildedir: paketler 50 100 ve 200'lü paketler şeklindedir. Balonları bu paketlere kontrol ederek koyarsanız işlem bitmiş olur. Fiyatları ise 50 tane olan paket 1,50 krş , 100 tane olan paket 2,50 krş 200 tane olan paket ise 4,50 krş. Size gönderilen ürünlerin güveni sizin üstünüzedir.`,
  },
  {
    id: 2,
    icon: beads,
    path: '#basvuru',
    title: 'BONCUK PAKETLEME',
    description: `Çengelli boncuk paketleme işlerinin en başında gelen sebebi son zamanlarda artış gösteren butik mağazalarının artmasıdır. Firmalar paketleme işleri ayrı bir fabrika ve yüksek sermaye istemesinden dolayı paketleme işlerini evlere verirler. Bu sayede hem ülkemizde olan işşizlik oranın azalması ve sermayenin düşürülmesini sağlamışlardır. Size gönderilen ürünlerinin koruması ve güveni sizin sorumluğunuza aittir.`,
  },
  {
    id: 3,
    icon: packaging,
    path: '#basvuru',
    title: 'SABUN PAKETLEME',
    description: `Ülkemizde ve yurt dışına gönderimi sağlanan kokulu ve bakımda etkili olan sabun üretim fabrikaları artış göstermiştir. Bunların en başında gelen Alaçatı sabunlarına talep artmıştır. Sabun ve kişisel bakım ürünlerinin paketlemesi zaman ve sermaye gerektirir. Sabun fabrikaları sebeblerden dolayı paketleme işini evlere verirler bunun sayesinde işşizlik oranı azalmıştır. Fiyatlandırması paketlediğiniz her sabun için 1,50 krş alıyorsunuz. Bu paketleme işini yapanların aylık geliri 4000 tl - 4500 tl arasında değişiklik gösterir isteğe göre sigorta yapıyoruz.`,
  },
  {
    id: 4,
    icon: screw,
    path: '#basvuru',
    title: 'VİDA PAKETLEME',
    description: `Artış gösteren sanayileşme ile beraber malzemeye olan ihtiyaçta artmıştır. Paketlemesi yapılıcak vidalar akıllı ve normal vida olarak ikiye ayrılır. Bu vida paketleme işi digerlerine göre biraz daha dikkatli olunması gereken bir paketleme işidir. Size verilen vidalarla birlikte korunmanızı sağlıcak tehsisatta verilicektir. Fiyatlar şu şekildedir: 150 300 450 tane şeklindedir. 150 tane paket için 5 TL 300 tane için 9,50 krş 450 tane olan için 12,50 krş ödeme alırsınız.`,
  },
  {
    id: 5,
    icon: chocolateBox,
    path: '#basvuru',
    title: 'NİKAH ŞEKERİ PAKETLEME',
    description: `Nikah şekeri paketlemesi biraz daha kolay ve keyifli bir paketleme işidir. Düğün organizasyon şirketleri düğünlerde dağıtımı yapılıcak şekerlerin paketlemesini evlere vererek zamandan ve sermayeden kara geçmiştirler. Nikah şekeri paketleme işi biraz daha özen gösterilmesi gereken bir iştir. Fiyatlandırması ise tane başı 1,50 krş'tur`,
  },
  {
    id: 6,
    icon: attachment,
    path: '#basvuru',
    title: 'TOKA PAKETLEME',
    description: `Toka paketleme işi bayanlara yönelik olan butik sektörürün vazgeçilmez ve en çok talep gören ürünüdür. Bu paketleme işinde paketlemesini yapıcağınız toka çeşitleri yetişkin ve çocuk olarak ikiye ayrılır. Fiyatlandırması paket başı 1,75 krş`,
  },
  {
    id: 7,
    icon: socks,
    path: '#basvuru',
    title: 'ÇORAP PAKETLEME',
    description: `Çorap fabrikaları yaptıkları çorap ürünlerinin paketlemesini evlere iş olarak verirler. Paketlemesi yapılıcak çorap çeşitleri Kadın - Erkek - Çocuk çorapları olarak değişir. Paketlemeleri 10'lu ve 5'li olarak yapılır. 5'li paket için 2,50 krş 10'lu paket için 5,50 krş`,
  },
  {
    id: 8,
    icon: shoe,
    path: '#basvuru',
    title: 'GALOŞ PAKETLEME',
    description: `Son zamanlarda artan klinik ve hastaneler ile birlikte galoş tüketimi oldukça artmıştır. Galoş paketleme zahmetsiz ve kolay yapılan bir paketleme işidir. Galoş paketleme çiftli olarak paketlenir ve her paket başına 1,75 krş alırsınız aylık ortalama 4000TL - 4500TL arasında kazanç sağlanır. Galoş paketleme yaparken hijyen kurallarına uymak en başta gelen kuraldır.`,
  },
  {
    id: 9,
    icon: gloves,
    path: '#basvuru',
    title: 'ELDİVEN PAKETLEME',
    description: `Gerek sağlık gerek ise temizlik sektöründe artış gösteren eldiven kullanımı üretimide beraberinde artırmıştır. Firmalar yapımı kolay olan bu eldivenleri evlere paketleme işi olarak verirler. Burdaki amaç sermaye düşüklüğü ve işsizlik oranını azaltmaktır. Paketlenen  50'li paketlerde paket başı aldığınız ücret 2,50 krş'dur. Aylık ortalama kazanç 4000TL - 4500TL arasındadır. Sizde elidven paketleme başvurusunu sitemizden yapabilirsiniz.`,
  },
  {
    id: 10,
    icon: shampoo,
    path: '#basvuru',
    title: 'OTEL ŞAMPUANI PAKETLEME',
    description: `Size gönderdiğimiz büyük şampuanları göndereceğimiz baskılı olan kutulara doldurduğunuz takdirde tane başı 1.50Krş alacağınız bu işte ayda kazancınız 4000 TL - 4500 TL arasında değişkenlik gösterir. Sizde bu iş dalına başvurmak istiyorsanız sitemizden başvurunuzu yapabilirsiniz.`,
  },
  {
    id: 11,
    icon: cottonSwabs,
    path: '#basvuru',
    title: 'KULAK ÇÖPÜ PAKETLEME',
    description: `Otellerde kulanılan tek kullanımlık olan kulak çöplerini size gönderdiğimiz paketlerle paketlemesini yaptıktan sonra paketleme başı 2.50 Krş alıcaksınız. Aylık geliriniz 4000 TL - 4500 TL arasında değişkenlik  gösteren bu  iş dalına sitemizden başvuru yapabilirsiniz`,
  },
  {
    id: 12,
    icon: slippers,
    path: '#basvuru',
    title: 'OTEL TERLİĞİ PAKETLEME',
    description: `Size gönderdiğimiz ikili olan terlikleri size beraberinde gönderiğimiz paketlerle paketlemesini yaparsanız tane başı 5.65 Krş alıcaksınız. Ayda 4000 TL - 4500TL arasında değişkenlik gösteren bu iş dalına sitemizden başvuru yapabilirsiniz.`,
  },
  {
    id: 13,
    icon: takeAway,
    path: '#basvuru',
    title: 'ÇATAL AMBALAJI PAKETLEME',
    description: `HEDEF PAKETLEME olarak büyük yemek firmaları ile yaptığımız anlaşma doğrlutunsunda evde çatal ve bıçak paketleme işini evlere vermeye başladık. Ayda yapacağınız paketlemeye göre 4000 TL - 4500 TL arasında değişkenlik gösteren bu gelirli işe başvuru yapmak için aşağıda bulunan butona tıklayarak başvurunuzu yapabilirsiniz.`,
  },

  {
    id: 14,
    icon: ring,
    path: '#basvuru',
    title: 'YÜZÜK KUTUSU PAKETLEME',
    description: `HEDEF PAKETLEME olarak büyük mücevher ve değerli takı malzemeleri firmaları ile yaptığımız anlaşma doğrultusunda evlere yüzük paketleme işi verilme kararı alınmıştır. Kutu başına 7.85 Krş alacağınız ve aylık gelirinizin 4000 TL - 4500TL arasında olan bu paketleme işine sitemizden başvuru yapabilirsiniz`,
  },
  {
    id: 15,
    icon: presentBox,
    path: '#basvuru',
    title: 'HEDİYE PAKETİ PAKETLEME',
    description: `Hediye paketleme işi çalışmakta olduğumuz firmaların istekleri üzerine başlatığımız bir evde paketleme işidir. yapacağınız paketleme başına 3.36 Krş alacağınız ve aylık gelirinizin 4000 TL - 4500TL arasında değişkenlik gösteren bu işe başvuru yapmak istiyorsanız sitemizden başvuru yapabilirsiniz.`,
  },
  {
    id: 16,
    icon: ink,
    path: '#basvuru',
    title: 'KAVANOZ BOYAMA',
    description: `KavAnoz boyama işi biraz el becerisi ve özen isteyen bir iş dalıdır. Size gönderdiğimiz kavonozları gönderdiğimiz boyalar ile boyamasını yaptıktan sonra kavonozo başına 10.25 TL alacağınız bu iş dalına sitemizden başvuru yapabilirsiniz.`,
  },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Sizin için ideal olan çözüm"
          title="Evde paketlemenin kapsadığı alanlar"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: '100%',
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
