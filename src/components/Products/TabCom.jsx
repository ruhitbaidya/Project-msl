import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Tab.css";
import DisProduct from "./DisProduct";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { useState } from "react";
const TabCom = () => {
  const [togle, setTogle] = useState(true);
  return (
    <div className="text-white">
      <Tabs>
        <div className="md:hidden lg:hidden text-center bg-[#ff8d28] py-[8px] flex justify-center items-center rounded-lg mb-[10px]">
          <button onClick={() => setTogle(!togle)} className="text-[30px]">
            <RiMenuUnfold2Fill />
          </button>
        </div>
        <div
          className={`${togle ? "hidden" : "flex"} flex md:hidden lg:hidden`}
        >
          <TabList className="flex flex-col md:flex-row justify-center items-center gap-[25px] w-full">
            <Tab onClick={() => setTogle(!togle)}>All</Tab>
            <Tab onClick={() => setTogle(!togle)}>Switch & Socket</Tab>
            <Tab onClick={() => setTogle(!togle)}>Power Track</Tab>
            <Tab onClick={() => setTogle(!togle)}>
              Bluetooth Smart Light (TUYA)
            </Tab>
            <Tab onClick={() => setTogle(!togle)}>Smart Devices (TUYA)</Tab>
            <Tab onClick={() => setTogle(!togle)}>Powerhub Pro</Tab>
          </TabList>
        </div>
        <div className="hidden md:flex lg:flex">
          <TabList className="flex flex-col md:flex-row justify-center items-center gap-[25px] w-full">
            <Tab onClick={() => setTogle(!togle)}>All</Tab>
            <Tab onClick={() => setTogle(!togle)}>Switch & Socket</Tab>
            <Tab onClick={() => setTogle(!togle)}>Power Track</Tab>
            <Tab onClick={() => setTogle(!togle)}>
              Bluetooth Smart Light (TUYA)
            </Tab>
            <Tab onClick={() => setTogle(!togle)}>Smart Devices (TUYA)</Tab>
            <Tab onClick={() => setTogle(!togle)}>Powerhub Pro</Tab>
          </TabList>
        </div>
        <TabPanel>
          <DisProduct />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCom;
