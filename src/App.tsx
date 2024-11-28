import { useEffect, useState } from "react";
import Chart from "./components/chart";
import Recharts from "./components/rechart";
import RadarChart from "./components/radar";
import Tepalik from "./img/tepalik.png";
import QrKod from "./img/qrKod.png";
import Miyya from "./img/miyya.svg";
import Sun from "./img/sun.svg";
import Moon from "./img/moon.svg";
import Norma from "./img/norma.png";
import CircularCharts from "./components/doiraChart";
type userType = {
  firstName: string;
  lastName: string;
  birthday: string;
  address: string;
  height: string;
  weight: string;
  index: number;
  position: string;
  candidate: string;
  imageUrl: string;
};

function App() {
  const [users, setUsers] = useState<userType[]>([]);
  const [mode, setMode] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://trello.vimlc.uz/get-personal-info")
      .then((response) => response.json())
      .then((data: userType) => {
        setUsers([data]);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://trello.vimlc.uz/knowlodge")
      .then((response) => response.json())
      .then((data) => {
        console.log(32, data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={`${mode ? "dark" : ""}`}>
      <div className="fixed right-7 top-7">
        {mode ? (
          <button
            className="bg-slate-200 rounded-full p-1"
            onClick={() => {
              setMode(false);
            }}
          >
            <img src={Sun} alt="" width={70} />
          </button>
        ) : (
          <button
            className="bg-slate-200 rounded-full p-1"
            onClick={() => {
              setMode(true);
            }}
          >
            <img src={Moon} alt="" width={70} />
          </button>
        )}
      </div>
      <div className=" bg-white dark:bg-[#1C1C1E]">
        <div className="container mx-auto">
          {users.map((user, index) => (
            <div
              key={index}
              className="1-qism flex gap-4 pt-24 dark:shadow-2xl pb-5 dark:bg-[#222224]"
            >
              <div className="rasm ">
                <img src={user.imageUrl} alt={`${user.firstName} rasmi`} />
              </div>
              <div className="flex pt-6">
                <div className="mr-[400px]">
                  <div className="pb-5 dark:text-slate-200">
                    <h3 className="text-4xl font-bold">{user.firstName}</h3>
                    <h3 className="text-4xl">{user.lastName}</h3>
                  </div>
                  <p className="text-xl dark:text-slate-300">
                    <span className="text-gray-700  dark:text-white">
                      Тугилган сана:{" "}
                    </span>{" "}
                    {user.birthday}
                  </p>
                  <p className="text-xl dark:text-slate-300">
                    <span className="text-gray-700 dark:text-white">
                      Тугилган жой:{" "}
                    </span>
                    {user.address}
                  </p>
                  <div className="flex gap-3 pt-6 dark:text-white">
                    <div className="buyi flex flex-col gap-1">
                      <p>Буйи:</p>
                      <p className="font-bold">{user.height}</p>
                    </div>
                    <div className="vazn flex flex-col gap-1">
                      <p>Вазни:</p>
                      <p className="font-bold">{user.weight}</p>
                    </div>
                    <div className="vazn flex flex-col gap-1">
                      <p>Индекс: </p>
                      <p className="font-bold">{user.index}</p>
                    </div>
                    <img src={Norma} alt="" />
                  </div>
                </div>
                <div className="flex gap-3 flex-col dark:text-white">
                  <div>
                    <p className="font-bold text-xl">Лавозими:</p>
                    <p className="w-[400px] text-xl">{user.position}</p>
                  </div>
                  <div>
                    <p className="font-bold text-xl">Номзод:</p>
                    <p className="w-[400px] text-xl"> {user.candidate}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container mx-auto dark:bg-[#222224] ">
          <div className="bilim flex items-center mt-[100px]">
            <span className="block w-[14px] h-[45px] bg-blue-800 mr-3"></span>
            <h2 className="font-bold text-4xl w-[300px] dark:text-white">
              Билим тести
            </h2>
            <span className="h-1 bg-gray-300 w-full"></span>
          </div>
          <div className="flex items-center pb-6 pt-12 dark:shadow-2xl">
            <div>
              <Chart />
            </div>
            <div className="flex justify-center ">
              <div>
                <Recharts />
                <div className="flex flex-col">
                  <p className="text-center text-2xl font-medium text-blue-700">
                    78%
                  </p>
                  <div className="flex items-center gap-4 w-[490px]">
                    <p className="text-right text-xl font-medium mt-1">78%</p>
                    <div className="w-full bg-gray-200 rounded-full h-12">
                      <div className="bg-[#138e05] h-12 rounded-full w-[78%]">
                        <p className="text-white text-3xl text-center pt-1 font-bold">
                          Умумий натижа
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text flex gap-2">
                  <img src={Miyya} alt="" />
                  <p className="dark:text-white">
                    <span className="font-bold">90 фоиз</span> иштирокчидан{" "}
                    <br /> яхширок натижа
                  </p>
                </div>
                <img src={Tepalik} alt="" width={400} height={600} />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex items-center mt-[100px] dark:text-white">
            <span className="block w-[14px] h-[45px] bg-blue-800 mr-3"></span>
            <h2 className="font-bold text-4xl w-[900px]">
              Шахсий ва касбий хусусиятлар
            </h2>
            <span className="h-1 bg-gray-300 w-full"></span>
          </div>
          <div className="flex justify-between dark:text-white">
            <div className="1-qism flex flex-col gap-5 mt-10">
              <div className="1-chart flex flex-col">
                <p className="text-xl">Максадга интилувчанлик</p>
                <div className="flex items-center gap-4 w-[490px]">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full w-[90%]"></div>
                  </div>
                  <p className="text-right text-xl font-medium mt-1">90%</p>
                </div>
              </div>
              <div className="2-chart flex flex-col">
                <p className="text-xl">Эмоционал интеллект</p>
                <div className="flex items-center gap-4 w-[490px]">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full w-[95%]"></div>
                  </div>
                  <p className="text-right text-xl font-medium mt-1">95%</p>
                </div>
              </div>
              <div className="3-chart flex flex-col">
                <p className="text-xl">Креативлик</p>
                <div className="flex items-center gap-4 w-[490px]">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full w-[75%]"></div>
                  </div>
                  <p className="text-right text-xl font-medium mt-1">75%</p>
                </div>
              </div>
              <div className="4-chart flex flex-col">
                <p className="text-xl">Ходимларга йуналганлик</p>
                <div className="flex items-center gap-4 w-[490px]">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full w-[86%]"></div>
                  </div>
                  <p className="text-right text-xl font-medium mt-1">86%</p>
                </div>
              </div>
            </div>
            <div className="2-qism ">
              <RadarChart />
            </div>
            <div className="3-qism flex flex-col gap-5 mt-10">
              <div className="1-chart flex flex-col">
                <p className="text-xl">Топширикларга йуналганлик</p>
                <div className="flex items-center gap-4 w-[490px]">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full w-[95%]"></div>
                  </div>
                  <p className="text-right text-xl font-medium mt-1">95%</p>
                </div>
              </div>
              <div className="2-chart flex flex-col">
                <p className="text-xl">Фаол ижтимоий муносабатлар</p>
                <div className="flex items-center gap-4 w-[490px]">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full w-[75%]"></div>
                  </div>
                  <p className="text-right text-xl font-medium mt-1">75%</p>
                </div>
              </div>
              <div className="3-chart flex flex-col">
                <p className="text-xl">Уз устида ишлаш</p>
                <div className="flex items-center gap-4 w-[490px]">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full w-[86%]"></div>
                  </div>
                  <p className="text-right text-xl font-medium mt-1">86%</p>
                </div>
              </div>
              <div className="4-chart flex flex-col">
                <p className="text-xl">Муаммоли вазиятга йуналганлик</p>
                <div className="flex items-center gap-4 w-[490px]">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full w-[86%]"></div>
                  </div>
                  <p className="text-right text-xl font-medium mt-1">86%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="psixalogiya flex items-center mt-[100px]">
            <span className="block w-[14px] h-[45px] bg-blue-800 mr-3"></span>
            <h2 className="font-bold text-4xl w-[700px] dark:text-white">
              Психологик диагностика{" "}
            </h2>
            <span className="h-1 bg-gray-300 w-full"></span>
          </div>
          <div className="text flex justify-between mt-5 dark:text-white">
            <p className="max-w-[640px] text-xl leading-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries,{" "}
            </p>
            <p className="max-w-[640px] text-xl leading-7">
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
            </p>
          </div>
          <div className="charts flex items-center mt-[100px]">
            <span className="block w-[14px] h-[45px] bg-blue-800 mr-3"></span>
            <h2 className="font-bold text-4xl w-[1300px] dark:text-white">
              Компетенцияларнинг намоён булиши{" "}
            </h2>
            <span className="h-1 bg-gray-300 w-full"></span>
          </div>
          <div className="strategiya flex justify-around items-center">
            <div className="w-[1000px]">
              <CircularCharts />
            </div>
            <div>
              <img src={QrKod} alt="" />
            </div>
          </div>
          <div className="muallif">
            <p className="text-xl text-center mt-24 dark:text-white">
              Argos.uz 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
