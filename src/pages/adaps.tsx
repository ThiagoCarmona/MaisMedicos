import styles from './avaliacao.module.css';
import { useState } from 'react';

export const Adaps = () => {

  const [a, seta] = useState('' as string);

  const [b, setb] = useState('' as string);
  const [b_text, setb_text] = useState('' as string);

  const [c1, setc1] = useState('' as string);
  const [c2, setc2] = useState('' as string);
  const [c3, setc3] = useState('' as string);
  const [c4, setc4] = useState('' as string);

  const [d, setd] = useState('' as string);
  const [d_text, setd_text] = useState('' as string);

  const [e, sete] = useState('' as string);

  return (
    <div>
      <h1 className={styles.title}>AVALIAÇÃO ADAPS</h1>
      <div className={styles.container}>
        <form className={styles.form} action='/'>
          <div className={styles.form_group}>
            <label htmlFor="email">A Adaps tem orientado e informado os gestores Municipais sobre as etapas do processo seletivo, comunicando com antecedência a data de chegada dos profissionais?</label>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <input type="radio" name="a" id="a_sim" value="sim" required onChange={(e) => {seta(e.target.value)}}/>
                <label htmlFor="a_sim">Sim</label>
                <input type="radio" name="a" id="a_nao" value="nao" onChange={(e) => {seta(e.target.value)}}/>
                <label htmlFor="a_nao">Não</label>
              </div>
            </div>
          </div>


          <div className={styles.form_group}>
            <label htmlFor="email">A ADAPS tem disponibilizado apoio ao município nas ações que visam garantir o adequado acompanhamento e desempenho do médico participante na Atenção Primária à Saúde?</label>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <input type="radio" name="b" id="b_sim" value="sim" required onChange={(e) => {setb(e.target.value)}}/>
                <label htmlFor="b_sim">Sim</label>
                <input type="radio" name="b" id="b_nao" value="nao" onChange={(e) => {setb(e.target.value)}}/>
                <label htmlFor="b_nao">Não</label>
              </div>
            </div>
            <div className={styles.obs_group} style={
              b === 'nao' ? {display: 'flex'} : {display: 'none'}
            }>
              <label htmlFor="b_text" className={styles.obs_label}>{
                b === 'sim' ? 'Descreva como realiza esta atividade' : 'Justifique'
              }</label>
              <textarea required name="b_text" id="b_text" rows={4} onChange={(e) => {setb_text(e.target.value)}}></textarea>
            </div>
          </div>


          <div className={styles.form_group}>
            <label htmlFor="email">Como você avalia a Tutoria no Programa Médicos pelo Brasil em relação a:</label>
            <br/>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <label className={styles.group_label}>Deslocamento:</label>
                <br/>
                <input type="radio" name="c_1" id="c1_excelente" value="Excelente" required onChange={(e) => {setc1(e.target.value)}}/>
                <label htmlFor="c_exelente">Excelente</label>
                <input type="radio" name="c_1" id="c_muito_satisfatório" value="Muito satisfatório" onChange={(e) => {setc1(e.target.value)}}/>
                <label htmlFor="c_muito_satisfatório">Muito satisfatório</label>
                <input type="radio" name="c_1" id="c_satisfatório" value="Satisfatório" onChange={(e) => {setc1(e.target.value)}}/>
                <label htmlFor="c_satisfatório">Satisfatório</label>
                <input type="radio" name="c_1" id="c_pouco_satisfatório" value="Pouco satisfatório" onChange={(e) => {setc1(e.target.value)}}/>
                <label htmlFor="c_pouco_satisfatório">Pouco satisfatório</label>
                <input type="radio" name="c_1" id="c_insatisfatório" value="Insatisfatório" onChange={(e) => {setc1(e.target.value)}}/>
                <label htmlFor="c_insatisfatório">Insatisfatório</label>
              </div>
            </div>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <label className={styles.group_label}>Infraestrutura da UBS para realização da tutoria:</label>
                <br/>
                <input type="radio" name="c_2" id="c2_excelente" value="Excelente" required onChange={(e) => {setc2(e.target.value)}}/>
                <label htmlFor="c_exelente">Excelente</label>
                <input type="radio" name="c_2" id="c_muito_satisfatório" value="Muito satisfatório" onChange={(e) => {setc2(e.target.value)}}/>
                <label htmlFor="c_muito_satisfatório">Muito satisfatório</label>
                <input type="radio" name="c_2" id="c_satisfatório" value="Satisfatório" onChange={(e) => {setc2(e.target.value)}}/>
                <label htmlFor="c_satisfatório">Satisfatório</label>
                <input type="radio" name="c_2" id="c_pouco_satisfatório" value="Pouco satisfatório" onChange={(e) => {setc2(e.target.value)}}/>
                <label htmlFor="c_pouco_satisfatório">Pouco satisfatório</label>
                <input type="radio" name="c_2" id="c_insatisfatório" value="Insatisfatório" onChange={(e) => {setc2(e.target.value)}}/>
                <label htmlFor="c_insatisfatório">Insatisfatório</label>
              </div>
            </div>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <label className={styles.group_label}>Processo formativo da tutoria:</label>
                <br/>
                <input type="radio" name="c_3" id="c3_excelente" value="Excelente" required onChange={(e) => {setc3(e.target.value)}}/>
                <label htmlFor="c_exelente">Excelente</label>
                <input type="radio" name="c_3" id="c_muito_satisfatório" value="Muito satisfatório" onChange={(e) => {setc3(e.target.value)}}/>
                <label htmlFor="c_muito_satisfatório">Muito satisfatório</label>
                <input type="radio" name="c_3" id="c_satisfatório" value="Satisfatório" onChange={(e) => {setc3(e.target.value)}}/>
                <label htmlFor="c_satisfatório">Satisfatório</label>
                <input type="radio" name="c_3" id="c_pouco_satisfatório" value="Pouco satisfatório" onChange={(e) => {setc3(e.target.value)}}/>
                <label htmlFor="c_pouco_satisfatório">Pouco satisfatório</label>
                <input type="radio" name="c_3" id="c_insatisfatório" value="Insatisfatório" onChange={(e) => {setc3(e.target.value)}}/>
                <label htmlFor="c_insatisfatório">Insatisfatório</label>
              </div>
            </div>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <label className={styles.group_label}>Produtividade do médico bolsista no período da Tutoria:</label>
                <br/>
                <input type="radio" name="c_4" id="c4_excelente" value="Excelente" required onChange={(e) => {setc4(e.target.value)}}/>
                <label htmlFor="c_exelente">Excelente</label>
                <input type="radio" name="c_4" id="c_muito_satisfatório" value="Muito satisfatório" onChange={(e) => {setc4(e.target.value)}}/>
                <label htmlFor="c_muito_satisfatório">Muito satisfatório</label>
                <input type="radio" name="c_4" id="c_satisfatório" value="Satisfatório" onChange={(e) => {setc4(e.target.value)}}/>
                <label htmlFor="c_satisfatório">Satisfatório</label>
                <input type="radio" name="c_4" id="c_pouco_satisfatório" value="Pouco satisfatório" onChange={(e) => {setc4(e.target.value)}}/>
                <label htmlFor="c_pouco_satisfatório">Pouco satisfatório</label>
                <input type="radio" name="c_4" id="c_insatisfatório" value="Insatisfatório" onChange={(e) => {setc4(e.target.value)}}/>
                <label htmlFor="c_insatisfatório">Insatisfatório</label>
              </div>
            </div>

          </div>


          <div className={styles.form_group}>
            <label htmlFor="email">A ADAPS tem fiscalizado, de forma concomitante com o município, o cumprimento da execução pelo médico da carga horária de 40 (quarenta) horas semanais, no que se refere às atividades assistenciais?</label>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <input type="radio" name="d" id="d_sim" value="sim" required onChange={(e) => {setd(e.target.value)}}/>
                <label htmlFor="d_sim">Sim</label>
                <input type="radio" name="d" id="d_nao" value="nao" onChange={(e) => {setd(e.target.value)}}/>
                <label htmlFor="d_nao">Não</label>
                <input type="radio" name="d" id="d_nao_sei" value="não sei" onChange={(e) => {setd(e.target.value)}}/>
                <label htmlFor="d_nao_sei">Não sei</label>
              </div>
            </div>
            <div className={styles.obs_group} style={
              d !== "" ? {display: 'flex'} : {display: 'none'}
            }>
              <label htmlFor="d_text" className={styles.obs_label}>Justifique sua resposta</label>
              <textarea required name="d_text" id="d_text" rows={4} onChange={(e) => {setd_text(e.target.value)}}></textarea>
            </div>
          </div>
            

          <div className={styles.form_group}>
            <label htmlFor="email">Como você avalia o envolvimento e disponibilidade da ADAPS, no apoio e fiscalização das ações do PMpB no seu município?</label>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <input type="radio" name="e" id="e_excelente" value="Excelente" required onChange={(ev) => {sete(ev.target.value)}}/>
                <label htmlFor="e_excelente">Excelente</label>
                <input type="radio" name="e" id="e_muito_satisfatório" value="Muito satisfatório" onChange={(ev) => {sete(ev.target.value)}}/>
                <label htmlFor="e_muito_satisfatório">Muito satisfatório</label>
                <input type="radio" name="e" id="e_satisfatório" value="Satisfatório" onChange={(ev) => {sete(ev.target.value)}}/>
                <label htmlFor="e_satisfatório">Satisfatório</label>
                <input type="radio" name="e" id="e_pouco_satisfatório" value="Pouco satisfatório" onChange={(ev) => {sete(ev.target.value)}}/>
                <label htmlFor="e_pouco_satisfatório">Pouco satisfatório</label>
                <input type="radio" name="e" id="e_insatisfatório" value="Insatisfatório" onChange={(ev) => {sete(ev.target.value)}}/>
                <label htmlFor="e_insatisfatório">Insatisfatório</label>
              </div>
            </div>
          </div>


          <button className={styles.submit_button} 
          onClick={() => {
            //ev.preventDefault();
            console.log(a, b, b_text, c1, c2, c3, c4, d, d_text, e);
          }}
          >Concluir</button>
        </form>
      </div>
    </div>
  )
}