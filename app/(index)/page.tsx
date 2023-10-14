'use client';

import React from 'react';
import PageLayout from './components/page.component';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles from './page.module.css';

import {
    Button,
    Container,
    Column,
    Jumbotron,
    JumbotronButtonsGroup,
    Items,
    Row,
    Typography,
} from 'design-system';

import media from '../../public/favicon.png';
const Page = () => {
    const router = useRouter();
    return (
        <PageLayout>
            <Container>
                <Row>
                    <Column
                        offSet={['m-1', 'l-1', 'xl-2', 'max-2']}
                        width={['sm-4', 'm-6', 'l-15', 'xl-13', 'max-12']}
                    >
                        <Jumbotron
                            title="Bot"
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
                                <Typography group="body" variant="subtitle1">
                                    Tailor AI for your personal productivity
                                </Typography>
                                <Typography group="body" variant="body1">
                                    Explore personalized automation with Bot, your AI-powered ally that evolves with your tasks and goals. Immerse yourself in a world where technology intuitively adapts to your work patterns, automates routine tasks, and securely streamlines your path to enhanced productivity and innovation.
                                </Typography>
                            </Items>
                            <JumbotronButtonsGroup>
                                <Button
                                    size="large"
                                    color='secondary'
                                    onClick={() => router.push('/get-started')}
                                >
                                    Get Started
                                </Button>

                                <Button
                                    size="large"
                                    color='secondary'
                                    type='text'
                                    onClick={() => router.push('/use-cases')}
                                >
                                    Use Cases
                                </Button>
                            </JumbotronButtonsGroup>
                        </Jumbotron>
                        <div>
                            <Typography group="body" variant="body2" style={{ opacity: 0.5, display: 'inline' }}>
                                Have an idea for a skill or automation?
                            </Typography>
                            &nbsp;
                            <Typography group="body" variant="body2" style={{ opacity: 0.5, fontWeight: 'bold', display: 'inline' }}>
                                <a style={{ color: 'inherit', textDecoration: 'none' }} href='https://discord.com/channels/1149151031964483584/1149151031964483587' target='_blank'>Join the community</a>
                            </Typography>
                        </div>
                    </Column>
                </Row>
            </Container>
        </PageLayout>
    );
};

export default Page;
