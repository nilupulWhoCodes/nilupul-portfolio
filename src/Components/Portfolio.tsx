import Header from "./Header";

export default function Portfolio() {
  const headerLinks = {
    'Home': 'home',
    'About': 'about-me',
    'Skills': 'skills',
    'Projects': 'projects',
    'Achievements': 'achievements',
    'Contact': 'contact',
    
  };

  return (
    <Header headerLinks={headerLinks} />
  );
}
