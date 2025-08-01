import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Satış Stratejisi (B2B & B2C)",
    description:
      "Geliri artırmak ve müşteri ilişkilerini güçlendirmek için satış süreçlerini tasarlıyor ve optimize ediyoruz.",
    icon: <ChartIcon />,
  },
  {
    title: "Sektör ve Pazar Analizi",
    description:
      "Fırsatları belirlemek, riskleri azaltmak ve pazar trendlerinin önünde kalmak için veri odaklı içgörüler sunuyoruz.",
    icon: <WalletIcon />,
  },
  {
    title: "Dijital Pazarlama",
    description:
      "Marka bilinirliğini artırmak ve büyümeyi hızlandırmak için etkili çevrim içi stratejiler geliştiriyoruz.",
    icon: <MagnifierIcon />,
  },
  {
    title: "İçerik Üretimi",
    description:
      "Hedef kitlenizle etkileşim kuran, değer odaklı ve ilgi çekici içerikler üretiyoruz.",
    icon: <MagnifierIcon />,
  },
  {
    title: "İthalat & İhracat",
    description:
      "Küresel ticaret operasyonları ve pazara giriş stratejileri konusunda danışmanlık sağlıyoruz.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Bilgi Teknolojileri",
    description:
      "Verimliliği artıran ve dijital dönüşümü mümkün kılan yenilikçi IT çözümleri sunuyoruz.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Servislerimiz</h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            İşletmenizin büyümesine yardımcı olmak için stratejik planlama ve
            pazar analizinden dijital pazarlama, içerik üretimi, küresel ticaret
            ve yenilikçi IT çözümlerine kadar özelleştirilmiş, sonuç odaklı
            çözümler sunuyoruz.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src="/services.png"
          style={{ borderRadius: "10px" }}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
