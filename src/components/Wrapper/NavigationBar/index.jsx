import { ShoppingCartOutlined } from "@ant-design/icons";
import navigationList from "../../../utils/navigationList";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  const items = navigationList;
  return (
    <nav className="container mx-auto px-3 flex justify-between items-center py-1">
      <Link
        to={"/"}
        className="first-letter:font-mandy first-letter:text-5xl first-letter:text-main text-2xl"
      >
        Niteki
      </Link>
      <ul className="md:flex space-x-10 hidden">
        {navigationList.map((item) => (
          <li key={item.key}>
            {item.children ? (
              <Dropdown menu={{ items: item.children }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    {item.label}
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ul>
      <a href="#">
      <Space>
            <ShoppingCartOutlined />
            <span>Cart</span>
          </Space>
      </a>
      <Dropdown
        className="cursor-pointer md:hidden"
        menu={{
          items,
        }}
      >
        <span onClick={(e) => e.preventDefault()}>
          <Space>
            <MenuOutlined />
          </Space>
        </span>
      </Dropdown>
    </nav>
  );
};

export default NavigationBar;
