import { SectionTitle, WhyUsCard } from '../../components'
import s from './main-why-us.module.css'
import axios from 'axios'

const axiosResponse = await axios.get('http://localhost:3000/api/porque-a-vivo');
const whyUs = axiosResponse.data;

export const MainWhyUsSection = () => {
  return (
    <section className={s.mainWhyUsSection}>
      <div className={s.container}>
        <div className={s.heading}>
          <SectionTitle isCentered>Por que escolher a Vivo?</SectionTitle>

          <p className={s.description}>
            Somos uma empresa completa, com serviços de celular, banda larga de
            ultravelocidade, TV por assinatura e serviços digitais, com mais de
            100 milhões de clientes por todo o Brasil.
          </p>
        </div>

        <ul className={s.cards}>
          {whyUs.map((item) => (
            <WhyUsCard
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
