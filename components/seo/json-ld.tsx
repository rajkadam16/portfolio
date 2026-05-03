export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Raj Shankar Kadam",
        jobTitle: "Software Developer | Full-Stack Engineer",
        url: "https://rajkadam.dev",
        sameAs: [
            "https://github.com/rajkadam16",
            "https://linkedin.com/in/raj-kadam03",
            "https://leetcode.com/u/rajkadam16",
            "https://www.instagram.com/rajkadamm16/",
            "https://x.com/raj_kadam_03",
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Mumbai",
            addressCountry: "India",
        },
        alumniOf: [
            {
                "@type": "EducationalOrganization",
                name: "Mumbai University",
            },
            {
                "@type": "EducationalOrganization",
                name: "Guru Nanak Khalsa College",
            },
        ],
        knowsAbout: [
            "PHP",
            "Python",
            "JavaScript",
            "TypeScript",
            "React",
            "Angular",
            "WordPress",
            "MongoDB",
            "Full-Stack Development",
            "Web Development",
            "SEO Optimization",
            "Machine Learning",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
