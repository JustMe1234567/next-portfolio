import { platforms } from "@/data";
import { cn } from "@/lib/utils";

const Platforms = () => {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.01] py-8 sm:py-10">
      <div className="section-container">
        <p className="section-eyebrow mb-5 text-center sm:mb-6">Platforms</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={cn(
                "rounded-xl border p-4 sm:p-5 bg-gradient-to-br",
                platform.color,
                platform.border
              )}
            >
              <h3 className="text-base font-bold text-white sm:text-lg">
                {platform.name}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white-200 sm:text-sm">
                {platform.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
