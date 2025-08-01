import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Bize Ulaşın",
    description: "Web sitemiz, e-posta veya telefon aracılığıyla bize ulaşın.",
  },
  {
    icon: <MapIcon />,
    title: "İşinizi Anlatın",
    description:
      "İşletmenizin geçmişini ve almak istediğiniz hizmetleri bizimle paylaşın.",
  },
  {
    icon: <PlaneIcon />,
    title: "Teklif & Toplantı",
    description:
      "Size özel bir teklif hazırlayıp detayları görüşmek üzere bir toplantı planlıyoruz.",
  },
  {
    icon: <GiftIcon />,
    title: "Resmi Sözleşme",
    description:
      "Tüm detaylarda anlaştıktan sonra iş birliğimizi resmi bir sözleşme ile başlatıyoruz.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Nasıl Çalışıyoruz? – Adım Adım Rehber
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground"></p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
