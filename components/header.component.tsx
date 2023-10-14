import {
  Header,
  HelpFilledIcon,
  Link,
  LinksZone,
  Logotype,
  TitleZone,
  UtilitiesZone,
  UtilityItem,
  Menu as Dropdown,
  MenuItem,
  Typography,
  AccountZone,
  IconButton,
  MenuIcon,
  useLayout,
  Button,
  MenuZone,
  MenuGlobal,
} from 'design-system';

import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useDropdown } from 'hooks/use-dropdown';

const HeaderComponent = () => {
  const router = useRouter();
  const { data, status } = useSession();

  const helpMenu = useDropdown();
  const accountMenu = useDropdown();

  const { toggleSidebar, hasSidebar } = useLayout();

  return (
    <Header>
      <TitleZone>
        {hasSidebar && (
          <IconButton
            icon={<MenuIcon size="medium" />}
            size="medium"
            shape="circle"
            color="default"
            onClick={() => toggleSidebar()}
          />
        )}
        <Logotype
          name="Bot"
          size="medium"
          onClick={() => router.push('/')}
        />
      </TitleZone>

      <MenuZone>
        <MenuGlobal href="/skills" onClick={(e) => console.log('Menu one')}>
          Skills registry
        </MenuGlobal>
        <MenuGlobal href="https://github.com/bot-ua/whitepaper/blob/main/WHITEPAPER.pdf">
          White paper
        </MenuGlobal>
      </MenuZone>
      
      <LinksZone>
        <Link href="#" title="Docs" color='secondary' cs={{ underline: false }}>
          Docs
        </Link>
        <Link href="#" title="Support" color='secondary' cs={{ underline: false }}>
          Support
        </Link>
      </LinksZone>

      <UtilitiesZone search={false}>
        <UtilityItem title="Help">
          <IconButton
            aria-controls={helpMenu.open ? 'help-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={helpMenu.open ? 'true' : undefined}
            onClick={helpMenu.handleOpenMenuClick}
            icon={<HelpFilledIcon size="medium" />}
            size="medium"
            shape="circle"
            color="default"
          />

          <Dropdown
            id="help-menu"
            anchorEl={helpMenu.anchorEl}
            open={helpMenu.open}
            onClose={helpMenu.handleCloseMenuClick}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            maxItems={5}
          >
            <MenuItem onClick={helpMenu.handleCloseMenuClick}>
              <Typography variant="body1" group="body">
                Support
              </Typography>
            </MenuItem>
            <MenuItem onClick={helpMenu.handleCloseMenuClick}>
              <Typography variant="body1" group="body">
                Tutorials
              </Typography>
            </MenuItem>
            <MenuItem onClick={helpMenu.handleCloseMenuClick}>
              <Typography variant="body1" group="body">
                Send feedback
              </Typography>
            </MenuItem>
          </Dropdown>
        </UtilityItem>
      </UtilitiesZone>

      <AccountZone>
        <Button type="filled" size='large' color="secondary" onClick={() => signIn()}>
          Sign In
        </Button>
        {/* <div>
          {windowsWidth < breakpoints.l ? (
            <Avatar
              type="icon"
              icon={
                <Image
                  src={avatar}
                  alt="media"
                  width={40}
                  height={40}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              }
              shape="circle"
              aria-controls={
                accountMenu.open ? 'account-dropdown-menu' : undefined
              }
              aria-haspopup="true"
              aria-expanded={accountMenu.open ? 'true' : undefined}
              onClick={accountMenu.handleOpenMenuClick}
            />
          ) : (
            <Account
              companyLogo={
                <Image
                  src={tryon}
                  alt="media"
                  width={80}
                  height={40}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              }
              userPhoto={
                <Image
                  src={avatar}
                  alt="media"
                  width={40}
                  height={40}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              }
              aria-controls={
                Boolean(accountMenu) === true
                  ? 'account-dropdown-menu'
                  : undefined
              }
              aria-haspopup="true"
              aria-expanded={Boolean(accountMenu) === true ? 'true' : undefined}
              onClick={accountMenu.handleOpenMenuClick}
            />
          )}
          <MenuAccount
            avatar={{
              type: 'icon',
              content: (
                <Image
                  src={avatar}
                  alt="media"
                  width={64}
                  height={64}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              ),
            }}
            menuAccount={accountMenu.anchorEl}
            handleClose={accountMenu.handleCloseMenuClick}
          />
        </div> */}
      </AccountZone>
    </Header>
  );
};

export default HeaderComponent;
