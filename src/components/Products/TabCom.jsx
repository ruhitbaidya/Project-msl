import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Tab.css";
import DisProduct from "./DisProduct";

const TabCom = () => {
  return (
    <div className="text-white">
      <Tabs>
        <TabList className="flex flex-wrap justify-center items-center gap-[25px] sm:flex-row sm:gap-[25px] sm:w-auto w-full">
          <Tab className="text-center py-2 px-4 sm:px-6 sm:py-3 hover:bg-gray-700 rounded">
            All
          </Tab>
          <Tab className="text-center py-2 px-4 sm:px-6 sm:py-3  rounded">
            Switch & Socket
          </Tab>
          <Tab className="text-center py-2 px-4 sm:px-6 sm:py-3 rounded">
            Power Track
          </Tab>
          <Tab className="text-center py-2 px-4 sm:px-6 sm:py-3  rounded">
            Bluetooth Smart Light (TUYA)
          </Tab>
          <Tab className="text-center py-2 px-4 sm:px-6 sm:py-3  rounded">
            Smart Devices (TUYA)
          </Tab>
          <Tab className="text-center py-2 px-4 sm:px-6 sm:py-3  rounded">
            Powerhub Pro
          </Tab>
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
