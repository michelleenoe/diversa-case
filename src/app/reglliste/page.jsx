import { baskerville } from "../fonts";
import DisclosureTabs from "@/components/DisclosureTabs";

export const metadata = {
  title: "Regl liste",
  description: "Her er en liste over alle AXE rules",
};

export default function RulesPage() {
  return (
    <>
      <section className="grid grid-cols-gridContent">
        <div className="py-16 col-start-3">
          <h1 className={`${baskerville.className} large-size pb-6 max-w-2xl`}>Komplet guide til WCAG: Forstå alle tilgængelighedsregler</h1>
          <article>
            <div className="pb-6 max-w-2xl">
              <p className="mb-4 small-size">Web Content Accessibility Guidelines, bedre kendt som WCAG, er standarder fastsat for at gøre internetindhold tilgængeligt for alle, inklusiv personer med forskellige typer af handicap. WCAG 2.0, som er den anden udgave af disse retningslinjer, er opdelt i tre tilgængelighedsniveauer: Level A, Level AA og Level AAA.</p>
              <p className="small-size">Overholdelse af WCAG 2.0 Level A og AA er ikke blot en juridisk forpligtelse i mange jurisdiktioner for at undgå diskrimination af handicappede; det er også et skridt mod at skabe en mere inkluderende og universelt tilgængelig weboplevelse.</p>
            </div>
          </article>
          <DisclosureTabs />
        </div>
      </section>
    </>
  );
}
