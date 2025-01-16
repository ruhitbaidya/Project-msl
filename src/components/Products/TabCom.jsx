import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Tab.css";
import DisProduct from "./DisProduct";
const TabCom = () => {
  return (
    <div className="text-white">
      <Tabs>
        <TabList className="flex justify-center items-center gap-[25px]">
          <Tab>All</Tab>
          <Tab>Switch & Socket</Tab>
          <Tab>Power Track</Tab>
          <Tab>Bluetooth Smart Light (TUYA)</Tab>
          <Tab>Smart Devices (TUYA)</Tab>
          <Tab>Powerhub Pro</Tab>
        </TabList>
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
