import Head from 'next/head';

export default function QuizHead({ ogImageUrl, ogTitle }){
    return (
        <Head>
            <title>{ogTitle}</title>
            <meta property="og:title" content="Imersão React v2 - Tives Quiz - Stiverson Machado" key="title" />
            <meta property="og:description" content="Imersão React v2 da Alura, utlizando Next.JS com Styled Components para criação de um Quiz sobre a minha pessoa e deploy na Vercel." />
            <meta property="og:image" content={ogImageUrl} />
        </Head>
    );
}