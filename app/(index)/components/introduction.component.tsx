'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import {
  Button,
  Container,
  Column,
  Jumbotron,
  JumbotronButtonsGroup,
  Items,
  Row,
  TextItemWithSubtitle,
} from 'design-system';

import media from './../../../../assets/img/media.png';

const EmptyPageContent = () => {
  const router = useRouter();

  return (
    <Container>
      <Row>
        <Column
          offSet={['m-1', 'l-1', 'xl-2', 'max-2']}
          width={['sm-4', 'm-6', 'l-15', 'xl-13', 'max-12']}
        >
          <Jumbotron
            title="Next step: create your organization"
            media={
              <Image
                src={media}
                alt="media"
                sizes="100vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            }
          >
            <Items>
              <TextItemWithSubtitle
                subtitle="Create experience listings"
                text="Design and publish experience listings for virtual fitting of your products."
              />
              <TextItemWithSubtitle
                subtitle="Manage your inventory"
                text="Organize and filter your experience listings for maximum efficiency."
              />
              <TextItemWithSubtitle
                subtitle="Work in teams"
                text="Define roles and collaborate with your team members effortlessly."
              />
            </Items>
            <JumbotronButtonsGroup>
              <Button
                size="large"
                color='secondary'
                onClick={() => router.push('/organizations/create')}
              >
                Get Started!
              </Button>

              <Button
                size="large"
                color='secondary'
                type='text'
                onClick={() => router.push('/organizations/create')}
              >
                Use Cases
              </Button>
            </JumbotronButtonsGroup>
          </Jumbotron>
        </Column>
      </Row>
    </Container>
  );
};

export default EmptyPageContent;
