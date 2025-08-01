import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "İlk toplantı ve teklif ücretli mi?",
    answer: "Hayır — ilk toplantımız ve teklifimiz tamamen ücretsizdir.",
    value: "item-1",
  },
  {
    question: "Yalnızca web sitenizde listelenen hizmetleri mi sağlıyorsunuz?",
    answer:
      "Hayır — kendi bünyemizdeki teknik ekibimiz ve geniş outsource ağımız sayesinde, ihtiyaçlarınıza özel danışmanlık hizmetleri geliştirebiliyoruz.",
    value: "item-2",
  },
  {
    question: "Birleşik Krallık dışında hizmet veriyor musunuz?",
    answer:
      "Evet — ancak Birleşik Krallık dışındaki müşterilerimiz hizmetlerimizden yalnızca online olarak yararlanabilir.",
    value: "item-3",
  },
  {
    question:
      "Tek seferlik proje bazlı mı çalışıyorsunuz yoksa uzun süreli sözleşmeler de yapıyor musunuz?",
    answer:
      "Her ikisini de yapıyoruz — hem tek seferlik projeler hem de uzun vadeli iş birlikleri için esnek seçenekler sunuyoruz.",
    value: "item-4",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Sık Sorulan Sorular
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
