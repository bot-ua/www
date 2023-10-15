"use client";

import { Column, Container, Row } from "design-system";

export default function Layout({ children }: { children: React.ReactNode }) {
return (
    <Container>
        <Row>
            <Column
                offSet={['m-1', 'l-1', 'xl-2', 'max-2']}
                width={['sm-4', 'm-6', 'l-15', 'xl-13', 'max-12']}
            >
                {children}
            </Column>
        </Row>
    </Container>
)
}