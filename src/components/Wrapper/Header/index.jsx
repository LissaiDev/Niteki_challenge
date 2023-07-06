import { DownOutlined, PhoneOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import items from "../../../utils/items";
const Header = () => {
  return (
    <div className="bg-main p-1 text-white">
      <div className="container mx-auto flex justify-center md:justify-between">
        <div className="md:flex items-center hidden">
          <p>+258 84*******</p>
          <PhoneOutlined />
        </div>
        <p className="text-center">Cut off 50% Percent on Selected Product | Buy now</p>
        <div className="md:flex hidden">
          <Dropdown
            menu={{
              items,
            }}
            className="cursor-pointer"
          >
            <span>
              <Space>
                Language
                <DownOutlined />
              </Space>
            </span>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
