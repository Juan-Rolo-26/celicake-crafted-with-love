const MarqueeSection = () => {
  const items = Array.from({ length: 10 }, () => "CeliCake");

  return (
    <section className="relative overflow-hidden border-y border-cream-dark/40 bg-blush/60 py-3">
      <div className="marquee-track flex w-max">
        {[0, 1].map((group) => (
          <div
            key={`marquee-group-${group}`}
            className="flex shrink-0 items-center gap-10 px-6 whitespace-nowrap"
            aria-hidden={group === 1}
          >
            {items.map((item, index) => (
              <span
                key={`${group}-${index}`}
                className="font-logo text-2xl sm:text-3xl text-secondary/70 tracking-[0.08em]"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
