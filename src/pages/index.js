import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  BindContract,
  WalletConnect,
  DaoIsExist,
  fetchNextDaoId,
  fetchAllDaos,
  NetworkControl,
} from "@/helpers/UserHelper";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import Popup from "@/components/Popup";
import Web3 from "web3";
import {
  DAO_ADDRESS,
  DAO_JSON,
  FACTORY_JSON,
  CHAIN_ID,
  TOKEN_ADDRESS,
  TOP_DAO,
  SUB_DAOS,
  LINE_COUNT,
} from "../../constant";

export default function Home() {
  const [account, setAccount] = useState(null);
  const [alertMessage, setAlertMessage] = useState({ text: "", title: "" }); //this is used inside Popup component, to pass a message to the inside of the popup when an error occurs, or a transaction is successful, or in a case of warning
  const [popupTrigger, setPopupTrigger] = useState(false); //this is used inside Popup component, to trigger the popup to show up
  const [daoFactoryContract, setDaoFactoryContract] = useState(undefined); //to store the DAOFactory contract instance
  const [daos, setDaos] = useState([]); //to store all the DAOs created by the DAOFactory contract
  const [topDAOAddress, setTopDAOAddress] = useState(""); //to store the address of the top DAO
  const [isCorrect, setIsCorrect] = useState(false); //this is used to change between the tabs, we will set it when a user clicks on the buttons on the sidebar, in default it is set to 10, which is the view proposals tab
  const [isLoaded, setIsLoaded] = useState(false); //to check if the page is loaded, i.e. all the DAOs are fetched from the blockchain

  useEffect(() => {
    const init = async () => {
      try {
        const account = await WalletConnect();
        setAccount(account);

        const web3 = new Web3(window.ethereum);
        const daoFactoryContract = new web3.eth.Contract(
          FACTORY_JSON.abi,
          DAO_ADDRESS
        );

        const fetchedDaos = await fetchAllDaos(daoFactoryContract);
        setDaos(fetchedDaos);
      } catch (error) {
        console.error("Initialization error:", error);
        setAlertMessage({ title: "Error", text: error.message });
        setPopupTrigger(true);
      } finally {
        setIsLoaded(true);
      }
    };

    if (!isLoaded) {
      init();
    }
  }, [isLoaded]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setInp(e.target[0].value);
  };

  return (
    <div>
      <Head>
        <title>SU Govern</title>
        <meta name="description" content="A blockchain dao app" />
      </Head>
      <Header logged={account} />
      <div className="index-page">
        {!isLoaded ? (
          <Spinner></Spinner>
        ) : (
          <div>
            <div className={"top-dao"}>
              {daos.length > 0 && (
                <Card
                  className={styles.topDaoCard}
                  address={daos[0].daoAddress}
                />
              )}
            </div>
            <div className={"sub-dao"}>
              <SimpleGrid columns={LINE_COUNT} spacing={10}>
                {daos.slice(1).map((dao, index) => (
                  <Card key={dao.daoAddress} address={dao.daoAddress} />
                ))}
              </SimpleGrid>
            </div>
          </div>
        )}
      </div>
      <Popup trigger={popupTrigger} setTrigger={setPopupTrigger}>
        <h2 className="h2 text-black">{alertMessage.title}</h2>
        <p>{alertMessage.text}</p>
      </Popup>
    </div>
  );
}
