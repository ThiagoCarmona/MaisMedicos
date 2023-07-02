import { useEffect, useState, useContext } from "react";
import styles from "./segundaEtapa.module.css";
import { getMedicos, addAvaliacao } from "../api/medicosAPI";
import { Modal } from "@mui/material"
import { FiX } from "react-icons/fi";
import {Alert} from "@mui/material"
import { UserContext } from "../contexts/User/UserContext"
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask"
export const Home = () => {

  
  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    console.log(user)
    if(!user.municipio) {
      console.log("no municipio")
      //navigate('/');
    }
  }, [user, user.municipio]);
  

  const [medicosList, setMedicosList] = useState<{
    ativos: string[],
    inativos: string[],
  }>({ ativos: [], inativos: [] });

  const [modalOpen, setModalOpen] = useState(false);

  const [addMedicoNome, setAddMedicoNome] = useState('');
  const [addMedicoCPF, setAddMedicoCPF] = useState('');
  const [addMedicoStatus, setAddMedicoStatus] = useState('');
  const [medicosLoaded, setMedicosLoaded] = useState(false);

  const [alertMessage, setAlertMessage] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    const getMedicosList = async () => {
      const result = await getMedicos(user.municipio);
      setMedicosList(result);
      setMedicosLoaded(true);
    }
    getMedicosList();
  }, [user.uf, user.municipio]);

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const select = e.target;
    if (select.value !== 'disabled') {
      select.style.border = '1px solid #ccc';
    }
  }

  const submitHandler = async () => {
    //check card values
    const medicoCards = document.querySelectorAll(`.${styles.medico_card}`);

    const allValid = Array.from(medicoCards).every((card) => {
      const select = card.querySelector('select');
      return select?.value !== 'disabled';
    });

    medicoCards.forEach(async(card) => {
      const select = card.querySelector('select');
      if (select?.value === 'disabled') {
        select.style.border = '2px solid red';
      } else if (select?.value !== 'disabled') {
        //@ts-ignore
        select.style.border = '1px solid #ccc';
      }
    });


    const values = [...medicoCards].map((card) => {
      const nome: string = card.querySelector('h3')?.textContent || '';
      const avaliacao: string = card.querySelector('select')?.value || '';
      return { nome, avaliacao };
    });

    //agregate values and count values with same name
    const valuesAgregated: {
      "Muito satisfatorio"?: number,
      "Satisfatório"?: number,
      "Pouco satisfatório"?: number,
      "Insatisfatório"?: number,
      "Excelente"?: number,
    } = {};
    values.forEach((value) => {
      if (value.avaliacao in valuesAgregated) {
        //@ts-ignore
        valuesAgregated[value.avaliacao] += 1;
      } else {
        //@ts-ignore
        valuesAgregated[value.avaliacao] = 1;
      }
    });

    if(!user.email || !user.uf || !user.municipio) {
      setAlertMessage('Por favor, preencha a primeira etapa do formulário');
      setAlertOpen(true);
      return;
    }

    if(allValid) {
      const qtMedicos = medicosList.ativos.length + medicosList.inativos.length;
      await addAvaliacao(user.email, user.uf, user.municipio, qtMedicos, valuesAgregated.Excelente || 0, valuesAgregated['Muito satisfatorio'] || 0, valuesAgregated.Satisfatório || 0, valuesAgregated['Pouco satisfatório'] || 0, valuesAgregated.Insatisfatório || 0);

      navigate('/adaps');
    }else{
      setAlertMessage('Por favor, preencha todos os campos de avaliação');
      setAlertOpen(true);
    }

  }


  return (
    <div className={styles.home_container}>
      
      <h1>Avalie o desempenho dos médicos participantes do Programa Médicos pelo Brasil</h1>

      <div className={styles.add_medico_area} style={{
        display: medicosLoaded ? 'flex' : 'none'
      }}>
        <button type="button" name="nao_listado" onClick={() => {
          setModalOpen(true);
        }}>
            Incluir médico não listado
        </button>
      </div>

      <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        style={{
          display: 'flex',
          alignItems: "start",
          justifyContent: 'center',
        }}
      >
        <div className={styles.modal}>
          <div className={styles.close_modal} onClick={() => {
            setModalOpen(false);
          }}>
            <FiX size={40}/>
          </div>
          <h2>Adicionar médico</h2>
          <div className={styles.form_group}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" onChange={(e) => {
              setAddMedicoNome(e.target.value.toUpperCase());
            }}/>
          </div>
          <div className={styles.form_group}>
            <label htmlFor="CPF">CPF</label>
            <InputMask mask="999.999.999-99" type="text" id="CPF" onChange={(e) => {
              setAddMedicoCPF(e.target.value);
            }}/>
          </div>
          <div className={styles.form_group}>
          <div className={styles.form_group}>
            <label htmlFor="status">Status</label>
            <select name="status" id="status" onChange={(e) => {
              setAddMedicoStatus(e.target.value);
            }}>
              <option value="disabled" disabled selected>Selecione</option>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </select>
          </div>
          </div>
          <button type="submit" id="add" onClick={(e) => {
            e.preventDefault();
            if(addMedicoNome && addMedicoCPF && addMedicoStatus) {
              if(addMedicoStatus === 'ativo') {
                setMedicosList({
                  ...medicosList,
                  ativos: [...medicosList.ativos, addMedicoNome],
                });
              } else if(addMedicoStatus === 'inativo') {
                setMedicosList({
                  ...medicosList,
                  inativos: [...medicosList.inativos, addMedicoNome],
                });
              }
              setModalOpen(false);
              setAddMedicoCPF('');
              setAddMedicoNome('');
              setAddMedicoStatus('');
            }
          }}>Adicionar</button>
        </div>
      </Modal>
      

      <div className={styles.result_area} style={{
        display: medicosList.inativos.length + medicosList.ativos.length ? 'block' : 'none'
      }}>
        {medicosList.ativos.map((medico, i) => {
          return (
            <div className={styles.medico_card} key={i}>
              <div className={styles.medico_card_header}>
                <h2 className={`${styles.status} ${styles.ativo}`}>Ativo</h2>
                <h3>{medico}</h3>
              </div>
              <div className={styles.medico_card_body}>
                <select name="avaliacao" id="avaliacao" onChange={selectHandler}>
                  <option value="disabled" disabled selected>Selecione</option>
                  <option value="Excelente">Excelente</option>
                  <option value="Muito satisfatorio">Muito satisfatorio</option>
                  <option value="Satisfatório">Satisfatório</option>
                  <option value="Pouco satisfatório">Pouco satisfatório</option>
                  <option value="Insatisfatório">Insatisfatório</option>
                </select>
              </div>
            </div>
          )
        })}

        {medicosList.inativos.map((medico, i) => {
          return (
            <div className={styles.medico_card} key={i}>
              <div className={styles.medico_card_header}>
                <h2 className={`${styles.status} ${styles.desligado}`}>Desligado</h2>
                <h3>{medico}</h3>
              </div>
              <div className={styles.medico_card_body}>
                <select name="avaliacao" id="avaliacao" onChange={selectHandler}>
                  <option value="disabled" disabled selected>Selecione</option>
                  <option value="Excelente">Excelente</option>
                  <option value="Muito satisfatorio">Muito satisfatorio</option>
                  <option value="Satisfatório">Satisfatório</option>
                  <option value="Pouco satisfatório">Pouco satisfatório</option>
                  <option value="Insatisfatório">Insatisfatório</option>
                </select>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.submit_area}>

      <Modal
          open={alertOpen}
          aria-labelledby="modal-modal-title"
          style={{
            display: 'flex',
            alignItems: "start",
            justifyContent: 'center',
          }}
        >
          <div className={styles.modal}>
            <div className={styles.close_modal} onClick={() => {
              setAlertOpen(false);
            }}>
              <FiX size={40}/>
            </div>
            <Alert severity="error" style={{
              margin: 20,
            }}>{alertMessage}</Alert>
          </div>
        </Modal>

        <button type="submit" style={{
          display: medicosList.inativos.length + medicosList.ativos.length ? 'block' : 'none'
        }} onClick={submitHandler}>Avançar</button>
      </div>
    </div>
  );
}