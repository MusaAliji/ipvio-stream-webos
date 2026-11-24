import appinfo from '../../public/appinfo.json';

/**
 * Placeholder "hello" screen of the scaffold (T-001). Shows only the brand and
 * version, so no UI string is needed before the dictionaries arrive (T-007).
 * Replaced by the app shell (T-010).
 */
export function App() {
  return (
    <main class="hello">
      <img class="hello__logo" src={`./${appinfo.largeIcon}`} alt="" width={130} height={130} />
      <h1 class="hello__title">{appinfo.title}</h1>
      <p class="hello__version">{appinfo.version}</p>
    </main>
  );
}
