import { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { SelectorType } from '../types';

const defaultSelectListener = (data: string) => {
  console.log('onSelect', data);
};

const Complete = ({ lib, onSelect = defaultSelectListener }: any) => {
  // const [value, setValue] = useState('');
  console.log('Complete render', lib);
  const [options, setOptions] = useState([]);
  const onSearch = (searchText: string) => {
    const keys: any = Object.keys(lib)
      .filter((s) => s.includes(searchText))
      .map((value) => ({ value }));
    setOptions(keys);
  };

  return (
    <AutoComplete
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      onSearch={onSearch}
      onSelect={onSelect}
      style={{
        width: 250,
      }}
      options={options}
    />
  );
};

export default Complete;
