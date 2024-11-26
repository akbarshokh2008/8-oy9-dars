import { useEffect, useState } from "react";
import Chart from "./components/chart";
import Recharts from "./components/rechart";
import Tepalik from "./img/tepalik.png";
import Miyya from "./img/miyya.svg";
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
    <div>
      <div className="container mx-auto">
        {users.map((user, index) => (
          <div key={index} className="1-qism flex gap-4 mt-24 ">
            <div className="rasm ">
              <img src={user.imageUrl} alt={`${user.firstName} rasmi`} />
            </div>
            <div className="flex pt-6">
              <div className="mr-[400px]">
                <div className="pb-5">
                  <h3 className="text-4xl font-bold">{user.firstName}</h3>
                  <h3 className="text-4xl">{user.lastName}</h3>
                </div>
                <p className=" text-xl">
                  <span className="text-gray-700">Тугилган сана: </span>{" "}
                  {user.birthday}
                </p>
                <p className="text-xl">
                  <span className="text-gray-700">Тугилган жой: </span>
                  {user.address}
                </p>
                <div className="flex gap-3 pt-6">
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
                </div>
              </div>
              <div className="flex gap-3 flex-col">
                <div>
                  <p>Лавозими:</p>
                  <p className="w-[400px]">{user.position}</p>
                </div>
                <div>
                  <p>Номзод:</p>
                  <p className="w-[400px]"> {user.candidate}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto">
        <div className="bilim flex items-center mt-[100px]">
          <span className="block w-[14px] h-[45px] bg-blue-800 mr-3"></span>
          <h2 className="font-bold text-4xl w-[300px]">Билим тести</h2>
          <span className="h-1 bg-gray-300 w-full"></span>
        </div>
        <div className="">
          <Chart />
        </div>
        <div className="flex justify-center gap-10">
          <Recharts />
          <div>
            <div className="text flex gap-2">
              <img src={Miyya} alt="" />
              <p>
                <span className="font-bold">90 фоиз</span> иштирокчидан <br />{" "}
                яхширок натижа
              </p>
            </div>
            <img src={Tepalik} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
