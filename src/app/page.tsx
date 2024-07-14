import BookGallery from "@/components/BookGallery";
import LinkButton from "@/components/LinkButton";
import RecipesAccordion from "@/components/RecipesAccordion";

export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-10 lg:h-full flex flex-col-reverse bg-gray-100">
      <aside className="col-span-4 flex flex-col lg:h-screen lg:sticky lg:top-0 scroll pr-1">
        <BookGallery />
      </aside>
      <main className="col-span-6 flex flex-col gap-y-10 py-28 items-center px-10 bg-white rounded-2xl mb-3 mt-3 mr-3">
        <div className="max-w-[70ch] flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-6xl ">Po wegańsku. Na słodko.</h1>
            <p className="font-sans text-sm">
              Książka jest kierowana do wszystkich. Wegan czy nie wegan. To nie
              jest istotne. Chcę, abyście z moich przepisów czerpali inspirację
              do lepszego traktowania swojego ciała, a może nawet spędzili
              trochę czasu i poczytali o weganizmie.
            </p>
          </div>
          <LinkButton
            label="Kupuję - 49 zł"
            href="https://buy.stripe.com/test_aEU9DC8zLfR4aw85kk"
          />

          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl">
              Znajdziesz tu 41 przepisów, które osłodzą Ci życie
            </h3>
            <RecipesAccordion />
          </div>
        </div>
      </main>
    </div>
  );
}
