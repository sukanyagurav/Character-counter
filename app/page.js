import CharacterCount from '@/components/CharacterCount';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1000px] mx-auto  px-4 py-8 w-full">
        <section>
          <h1 className="text-5xl text-center font-extrabold mb-6">
            Analyze your text in real-time.
          </h1>
          <CharacterCount/>
        </section>
      </main>
      <footer className="text-orange-500 p-8 text-center text-lg">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io/profile/sukanyagurav"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://www.frontendmentor.io/profile/sukanyagurav">SG</a>.
      </footer>
    </>
  );
}
