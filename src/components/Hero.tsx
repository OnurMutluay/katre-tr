

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">Bilgiyi Etkiye Dönüştürüyoruz</h1>{" "}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Stratejik düşünceyi uygulanabilir çözümlerle birleştirerek
          işletmelerin büyümesine yardımcı oluyoruz. Satış stratejisinden
          dijital pazarlamaya, pazar analizinden içerik üretimine, ithalat &
          ihracattan yenilikçi bilgi teknolojileri çözümlerine kadar vizyonunuzu
          ölçülebilir bir başarıya dönüştürüyoruz.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4"></div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <img src="/hero.png" style={{ borderRadius: 10 }} />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
