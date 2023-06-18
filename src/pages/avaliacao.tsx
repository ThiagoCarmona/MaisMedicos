import { addSectTwo } from '../api/medicosAPI';
import styles from './avaliacao.module.css';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/User/UserContext';
import { useNavigate } from 'react-router-dom';
export const Avaliacao = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    if(!user.email) {
      navigate('/');
    }
  }, [user.email, navigate]);

  const [a, seta] = useState('' as string);
  const [a_text, seta_text] = useState('' as string);

  const [b, setb] = useState('' as string);
  const [b_text, setb_text] = useState('' as string);

  const [c, setc] = useState('' as string);
  const [c_text, setc_text] = useState('' as string);

  const [d, setd] = useState('' as string);
  const [d_text, setd_text] = useState('' as string);

  const [e, sete] = useState('' as string);
  const [e_text, sete_text] = useState('' as string);

  const [f, setf] = useState('' as string);
  const [f_text, setf_text] = useState('' as string);

  const [g, setg] = useState('' as string);
  const [g_text, setg_text] = useState('' as string);

  const [h, seth] = useState('' as string);
  const [h_text, seth_text] = useState('' as string);

  const [i, seti] = useState('' as string);
  const [i_text, seti_text] = useState('' as string);

  return (
    <div>
      <h1 className={styles.title}>AVALIAÇÃO DO PROGRAMA MÉDICOS PELO BRASIL</h1>
      <div className={styles.container}>
        <form className={styles.form} action='/'>
          <div className={styles.form_group}>
            <label htmlFor="email">Realiza a recepção dos médicos tutores e médicos bolsistas?</label>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <input type="radio" name="a" id="a_sim" value="Sim" required onChange={(e) => {seta(e.target.value)}}/>
                <label htmlFor="a_sim">Sim</label>
                <input type="radio" name="a" id="a_nao" value="Não" onChange={(e) => {seta(e.target.value)}}/>
                <label htmlFor="a_nao">Não</label>
              </div>
            </div>
            <div className={styles.obs_group} style={
              a !== '' ? {display: 'flex'} : {display: 'none'}
            }>
              <label htmlFor="a_text" className={styles.obs_label}>{
                a === 'sim' ? 'Descreva como realiza esta atividade:' : 'Justifique:'
              }</label>
              <textarea required name="a_text" id="a_text" rows={4} onChange={(e) => {seta_text(e.target.value)}}></textarea>
            </div>
          </div>


          <div className={styles.form_group}>
            <label htmlFor="email">Inseriu os médicos participantes nas Equipes de Saúde da Família compatíveis com a carga horária preconizada no Programa e nas UBS em locais de difícil acesso e/ou de alta vulnerabilidade?</label>
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
            <label htmlFor="email">Inscreveu o médico participante do Programa, recebido pelo município, no Sistema de Cadastro Nacional de Estabelecimentos de Saúde (SCNES) e o identificou na respectiva Equipe de Saúde da Família na qual atua?</label>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <input type="radio" name="c" id="c_sim" value="sim" required onChange={(e) => {setc(e.target.value)}}/>
                <label htmlFor="c_sim">Sim</label>
                <input type="radio" name="c" id="c_nao" value="nao" onChange={(e) => {setc(e.target.value)}}/>
                <label htmlFor="c_nao">Não</label>
              </div>
            </div>
            <div className={styles.obs_group} style={
              c === 'nao' ? {display: 'flex'} : {display: 'none'}
            }>
              <label htmlFor="c_text" className={styles.obs_label}>{
                c === 'sim' ? 'Descreva como realiza esta atividade' : 'Justifique'
              }</label>
              <textarea required name="c_text" id="c_text" rows={4} onChange={(e) => {setc_text(e.target.value)}}></textarea>
            </div>
          </div>


          <div className={styles.form_group}>
            <label htmlFor="email">Realiza o envio periódico das informações assistenciais registradas localmente no Sistema de Informação em Saúde para a Atenção Básica (SISAB)?</label>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <input type="radio" name="d" id="d_sim" value="sim" required onChange={(e) => {setd(e.target.value)}}/>
                <label htmlFor="d_sim">Sim</label>
                <input type="radio" name="d" id="d_nao" value="nao" onChange={(e) => {setd(e.target.value)}}/>
                <label htmlFor="d_nao">Não</label>
              </div>
            </div>
            <div className={styles.obs_group} style={
              d === 'nao' ? {display: 'flex'} : {display: 'none'}
            }>
              <label htmlFor="d_text" className={styles.obs_label}>{
                d === 'sim' ? 'Descreva como realiza esta atividade' : 'Justifique'
              }</label>
              <textarea required name="d_text" id="d_text" rows={4} onChange={(e) => {setd_text(e.target.value)}}></textarea>
            </div>
          </div>
            

          <div className={styles.form_group}>
            <label htmlFor="email">Contribui com o processo de planejamento e programação de atividades de tutoria presencial a serem ofertadas aos médicos bolsistas, de maneira pactuada com o Ministério da Saúde e com a Adaps?</label>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <input type="radio" name="e" id="e_sim" value="sim" required onChange={(ev) => {sete(ev.target.value)}}/>
                <label htmlFor="e_sim">Sim</label>
                <input type="radio" name="e" id="e_nao" value="nao" onChange={(ev) => {sete(ev.target.value)}}/>
                <label htmlFor="e_nao">Não</label>
              </div>
            </div>
            <div className={styles.obs_group} style={
              e !== '' ? {display: 'flex'} : {display: 'none'}
            }>
              <label htmlFor="e_text" className={styles.obs_label}>{
                e === 'sim' ? 'Descreva como realiza esta atividade' : 'Justifique'
              }</label>
              <textarea required name="e_text" id="e_text" rows={4} onChange={(e) => {sete_text(e.target.value)}}></textarea>
            </div>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="email">Apoia os médicos tutores e médicos bolsistas contratados pela Adaps nas regulares e periódicas visitas de tutoria?</label>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <input type="radio" name="f" id="f_sim" value="sim" required onChange={(e) => {setf(e.target.value)}}/>
                <label htmlFor="f_sim">Sim</label>
                <input type="radio" name="f" id="f_nao" value="nao" onChange={(e) => {setf(e.target.value)}}/>
                <label htmlFor="f_nao">Não</label>
              </div>
            </div>
            <div className={styles.obs_group} style={
              f !== '' ? {display: 'flex'} : {display: 'none'}
            }>
              <label htmlFor="f_text" className={styles.obs_label}>{
                f === 'sim' ? 'Descreva como realiza esta atividade' : 'Justifique'
              }</label>
              <textarea required name="f_text" id="f_text" rows={4} onChange={(e) => {setf_text(e.target.value)}}></textarea>
            </div>
          </div>



          <div className={styles.form_group}>
            <label htmlFor="email">Como exerce a fiscalização da execução da carga horária de 40 (quarenta) horas semanais pelos médicos participantes do Programa?</label>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <input type="radio" name="g" id="g_folha" value="Folha de frequência manual" required onChange={(e) => {setg(e.target.value)}}/>
                <label htmlFor="g_folha">Folha de frequência manual</label>
                <input type="radio" name="g" id="g_ponto" value="Ponto Eletrônico" onChange={(e) => {setg(e.target.value)}}/>
                <label htmlFor="g_ponto">Ponto Eletrônico</label>
                <input type="radio" name="g" id="g_nao" value="Não fiscaliza carga horária" onChange={(e) => {setg(e.target.value)}}/>
                <label htmlFor="g_nao">Não fiscaliza carga horária</label>
                <input type="radio" name="g" id="g_outro" value="Outro" onChange={(e) => {setg(e.target.value)}}/>
                <label htmlFor="g_outro">Outro</label>
              </div>
            </div>
            <div className={styles.obs_group} style={
              g === 'Outro' ? {display: 'flex'} : {display: 'none'}
            }>
              <label htmlFor="g_text" className={styles.obs_label}>{
                g === 'Outro' ? 'Caso a resposta tenha sido "Outro", descreva o tipo de fiscalização da carga horária:' : 'Justifique'
              }</label>
              <textarea required={g === 'Outro'? true : false} name="g_text" id="g_text" rows={4} onChange={(e) => {setg_text(e.target.value)}}></textarea>
            </div>
          </div>


          <div className={styles.form_group}>
            <label htmlFor="email">Paga a ajuda de custo mensal  no valor de R$ 1.100,00 (mil e cem reais), em pecúnia, ao médico bolsista lotado no município?</label>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <input type="radio" name="h" id="h_sim" value="sim" required onChange={(e) => {seth(e.target.value)}}/>
                <label htmlFor="h_sim">Sim</label>
                <input type="radio" name="h" id="h_nao" value="nao" onChange={(e) => {seth(e.target.value)}}/>
                <label htmlFor="h_nao">Não</label>
              </div>
            </div>
            <div className={styles.obs_group} style={
              h === 'nao' ? {display: 'flex'} : {display: 'none'}
            }>
              <label htmlFor="i_text" className={styles.obs_label}>{
                h === 'sim' ? 'Descreva como realiza esta atividade' : 'Justifique'
              }</label>
              <textarea required={h === 'nao'? true : false} name="h_text" id="h_text" rows={4} onChange={(e) => {seth_text(e.target.value)}}></textarea>
            </div>
          </div>


          <div className={styles.form_group}>
            <label htmlFor="email">Fornece condições adequadas de infraestrutura e ambiência para a atuação do médico participante (estrutura da unidade de saúde adequada, com segurança e higiene, fornecimento de equipamentos e insumos necessários e instalações sanitárias para o desempenho das atividades, e demais exigências e especificações estabelecidas na Política Nacional de Atenção Básica)</label>
            <div className={styles.radio_group}>
              <div className={styles.radio}>
                <input type="radio" name="i" id="i_sim" value="sim" required onChange={(e) => {seti(e.target.value)}}/>
                <label htmlFor="i_sim">Sim</label>
                <input type="radio" name="i" id="i_nao" value="nao" onChange={(e) => {seti(e.target.value)}}/>
                <label htmlFor="i_nao">Não</label>
              </div>
            </div>
            <div className={styles.obs_group} style={
              i === 'nao' ? {display: 'flex'} : {display: 'none'}
            }>
              <label htmlFor="i_text" className={styles.obs_label}>{
                i === 'sim' ? 'Descreva como realiza esta atividade' : 'Justifique'
              }</label>
              <textarea required={i === 'nao'? true : false} name="i_text" id="i_text" rows={4} onChange={(e) => {seti_text(e.target.value)}}></textarea>
            </div>
          </div>


          <button className={styles.submit_button} 
          type='submit'
          onClick={async () => {
            //ev.preventDefault();
            const result = await addSectTwo({
              a: a,
              a_text: a_text,
              b: b,
              b_text: b_text,
              c: c,
              c_text: c_text,
              d: d,
              d_text: d_text,
              e: e,
              e_text: e_text,
              f: f,
              f_text: f_text,
              g: g,
              g_text: g_text,
              h: h,
              h_text: h_text,
              i: i,
              i_text: i_text,
            }, user.email, user.uf, user.municipio);
            if(result == 'ok') {
              navigate('/adaps');
            }
          }}
          >Avançar</button>
        </form>
      </div>
    </div>
  )
}