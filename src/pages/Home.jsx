import Layout from '../components/layout/Layout'
import Section from '../components/section/Section'

const Home = () => {
    const education = [
        `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus repudiandae quibusdam provident fugiat ab vel unde quae velit magnam. Ab ex quod commodi, maiores nesciunt illo ea hic ducimus!`,
        `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus repudiandae quibusdam provident fugiat ab vel unde quae velit magnam. Ab ex quod commodi, maiores nesciunt illo ea hic ducimus!`,
        `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus repudiandae quibusdam provident fugiat ab vel unde quae velit magnam. Ab ex quod commodi, maiores nesciunt illo ea hic ducimus!`
    ]

    const experience = [
        '10 years experience in JavaScript',
        '15 years experience in Python',
        '12 years experience in HTML/CSS',
    ]
    return (
        <Layout>
            <Section title='Education' texts={education} />
            <Section title='Experience' texts={experience} />
        </Layout>
    )
}

export default Home