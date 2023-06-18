import { useEffect, useState, useContext } from "react";
import styles from "./home.module.css";
import { getUfs, getCities, getMedicos, addAvaliacao, checkEmail } from "../api/medicosAPI";
import { Modal } from "@mui/material"
import { FiX } from "react-icons/fi";
import {Alert} from "@mui/material"
import { UserContext } from "../contexts/User/UserContext"
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask"
export const Home = () => {

  const user = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [UF, setUF] = useState('');
  const [city, setCity] = useState('');

  const [UFsList, setUFsList] = useState<string[]>([]);
  const [citiesList, setCitiesList] = useState<{
    local: any;
    codIbge: any;
  }[]>([]);
  const [medicosList, setMedicosList] = useState<{
    ativos: string[],
    inativos: string[],
  }>({ ativos: [], inativos: [] });

  const [modalOpen, setModalOpen] = useState(false);

  const [addMedicoNome, setAddMedicoNome] = useState('');
  const [addMedicoCPF, setAddMedicoCPF] = useState('');
  const [addMedicoStatus, setAddMedicoStatus] = useState('');

  const [alertMessage, setAlertMessage] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    getUfs().then((res) => {
      setUFsList(res);
    });
  }, []);

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

    if(!email) {
      setAlertMessage('Por favor, preencha o campo email');
      setAlertOpen(true);
      return;
    }




    if(allValid) {
      if(await checkEmail(email)) {
        setAlertMessage('Este email já enviou uma avaliação, se desejar alterar a pesquisa, entre em contato com o administrador. andre.luiz@saude.gov.br');
        setAlertOpen(true);
        return;
      }
      const qtMedicos = medicosList.ativos.length + medicosList.inativos.length;
      console.log(qtMedicos)
      const result = await addAvaliacao(email, UF, city, qtMedicos, valuesAgregated.Excelente || 0, valuesAgregated['Muito satisfatorio'] || 0, valuesAgregated.Satisfatório || 0, valuesAgregated['Pouco satisfatório'] || 0, valuesAgregated.Insatisfatório || 0)
      user.saveEmail(email);
      user.saveUf(UF);
      user.saveMunicipio(city);
      console.log(result)
      navigate('/avaliacao');
    }else{
      setAlertMessage('Por favor, preencha todos os campos de avaliação');
      setAlertOpen(true);
    }

  }

  const handleUFChange = (e: any) => {
    setCitiesList([]);
    setUF(e.target.value);
    getCities(e.target.value).then((res) => {
      setCitiesList(res);
    });
    setMedicosList({
      ativos: [],
      inativos: [],
    });
  }

  const handleCityChange = (e: any) => {
    setMedicosList({
      ativos: [],
      inativos: [],
    });
    setCity(e.target.value);
    getMedicos(e.target.value).then((res) => {
      setMedicosList(res);
    });
  }


  return (
    <div className={styles.home_container}>
      <div className={styles.selection_area}>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <div className={styles.form_group}>
          <label htmlFor="UF">UF</label>
          <select name="UF" id="UF" onChange={handleUFChange}>
            <option value="disabled" disabled selected>Selecione</option>
            {UFsList.map((uf, i) => {
              return (
                <option value={uf} key={i}>{uf}</option>
              )
            })}
          </select>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="city">Município</label>
          <select name="city" id="city" onChange={handleCityChange}>
            <option value="disabled" disabled selected>Selecione</option>
            {citiesList.map((city, i) => {
              return (
                <option value={city.codIbge} key={i}>{city.local}</option>
              )
            })}
          </select>
        </div>
      </div>

      <div className={styles.add_medico_area} style={{
        display: city ? 'flex' : 'none'
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
                <select name="avaliacao" id="avaliacao">
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
                <select name="avaliacao" id="avaliacao">
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
        }} onClick={submitHandler}>Enviar</button>
      </div>
    </div>
  );
}