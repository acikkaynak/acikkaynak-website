import React from 'react';

import { Container } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';
import UnderConstruction from '../../shared/elements/underConstruction';

function ForCorporations() {
    return (
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="Kurumlar İçin" subtitle="Kurumlar İçin Açık Kaynak Rehberi" />

            <UnderConstruction />
        </Container>
    );
}

export {
    ForCorporations as default,
};
