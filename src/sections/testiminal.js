/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Container, Heading, Text, Box, Image, Card } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import * as React from 'react';
// import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const data = [
    {
        id: 1,
        title: 'Modern look & trending design',
        description:
            'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        // avatar: Avatar1,
        name: 'Denny Hilguston',
        designation: '@denny.hil',
        review: 4,
    },
    {
        id: 2,
        title: 'Design Quality & performance',
        description:
            'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        // avatar: Avatar2,
        name: 'Denny Hilguston',
        designation: '@denny.hil',
        review: 5,
    },
    {
        id: 3,
        title: 'Layout and organized layers',
        description:
            'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        // avatar: Avatar3,
        name: 'Denny Hilguston',
        designation: '@denny.hil',
        review: 5,
    },
    {
        id: 4,
        title: 'Modern look & trending design',
        description:
            'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
        // avatar: Avatar4,
        name: 'Denny Hilguston',
        designation: '@denny.hil',
        review: 4,
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1619 },
        items: 4,
        slidesToSlide: 4, // optional, default to 1.
    },
    laptop: {
        breakpoint: { max: 1619, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

export default function TestimonialCard() {
    return (
        <section id="testimonial" sx={{ variant: 'section.testimonial' }}>
            <Container>
                <SectionHeader slogan="Yorumlar" title="Müsteri yorumlarını inceleyin" sx={{ margin: '50px 0 150px 0' }} />
                <Card
                    sx={{
                        maxWidth: 400,
                    }}
                >                
                    <Box p={3}>
                        <Heading variant="styles.h4">Heading</Heading>
                        <Text>Text</Text>
                    </Box>
                </Card>
            </Container>


        </section>
    );
}

const styles = {
    
};
