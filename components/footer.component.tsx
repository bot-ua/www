import { Footer, breakpoints, useWindowDimensions } from 'design-system';

const FooterComponent = () => {
  const { width: windowsWidth } = useWindowDimensions();

  const baseLinks = [
    { href: `https://bot.ua/terms`, title: 'Open Source' },
    { href: 'https://bot.ua/developers', title: 'Developers' },
    { href: 'https://github.com/orgs/bot-ua/projects/1', title: 'Roadmap' },
  ];

  const links = windowsWidth <= breakpoints.m ? baseLinks : [
    { href: `https://bot.ua/terms`, title: 'Legals' },
    ...baseLinks, 
    { href: 'https://status.bot.ua', title: 'Status' }
  ];
  
  return (
    <div className="footer-container">
      <Footer
        links={links}
        copyright="Bot"
        showDivider={false}
      />
    </div>
  );
};

export default FooterComponent;
