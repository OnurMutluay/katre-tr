

export const About = () => {
  return (
    <section id="about" className="container py-32 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12 px-8">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">Hakkımızda</h2>
              <p className="text-xl text-muted-foreground mt-4">
                Şubat 2019’da kurulan Katre Consultancy, özellikle Birleşik
                Krallık’ta faaliyet gösteren Türk işletmelerine odaklanarak,
                rekabetçi pazarlarda yol almalarına ve sürdürülebilir büyüme
                sağlamalarına yardımcı olmaktadır. Derin sektör bilgimizi ve
                sonuç odaklı yaklaşımımızı bir araya getirerek, ihtiyaçlarınıza
                özel çözümler sunuyoruz:
              </p>
              <ul
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "30px",
                  flexDirection: "column",
                }}
              >
                <li>
                  Satış Stratejisi (B2B & B2C) – Geliri artırmak ve müşteri
                  ilişkilerini güçlendirmek için satış süreçlerini tasarlıyor ve
                  optimize ediyoruz.
                </li>
                <li>
                  Sektör ve Pazar Analizi – Fırsatları belirlemek, riskleri
                  azaltmak ve pazar trendlerinin önünde kalmak için veri odaklı
                  içgörüler sunuyoruz.
                </li>
                <li>
                  Dijital Pazarlama – Marka bilinirliğini artırmak ve büyümeyi
                  hızlandırmak için etkili çevrim içi stratejiler
                  geliştiriyoruz.
                </li>
                <li>
                  İçerik Üretimi – Hedef kitlenizle etkileşim kuran, değer
                  odaklı ve ilgi çekici içerikler üretiyoruz.
                </li>
                <li>
                  İthalat & İhracat – Küresel ticaret operasyonları ve pazara
                  giriş stratejileri konusunda danışmanlık sağlıyoruz.
                </li>
                <li>
                  Bilgi Teknolojileri – Verimliliği artıran ve dijital dönüşümü
                  mümkün kılan yenilikçi IT çözümleri sunuyoruz.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
