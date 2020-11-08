import { useState } from "react";
import { TYPE_HEADER } from './constant';
import { channelActionSubject } from '../ChannelList/observables';
import { FilterList } from '../../api';

type FormConfig<TValues> = {
  initialValues: TValues;
  onSubmit: (values: TValues) => Promise<void>;
};

function useFilter <TValues>({ initialValues, onSubmit }: FormConfig<TValues>) {
  const [values, setValues] = useState<any>(initialValues);

  const handleChange = (scope: string, value: string[], isCleared?: boolean) => {
    if (isCleared) {
      setValues({
        [TYPE_HEADER.CATEGORIES]: [],
        [TYPE_HEADER.LANGUAGE]: [],
        [TYPE_HEADER.RESOLUTION]: [],
      });
    } else {
      setValues({ ...values, [scope]: value });
    }
  };

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    onSubmit(values);
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
};


const useFilterHandler = (onClose: () => void, filterList: FilterList) => {
  const context = useFilter({
    initialValues: filterList ?? {
      [TYPE_HEADER.CATEGORIES]: [],
      [TYPE_HEADER.LANGUAGE]: [],
      [TYPE_HEADER.RESOLUTION]: [],
    },
    onSubmit: async (values) => {
      channelActionSubject.next({ filterList: values });
      onClose();
    }
  });

  return context;
};

export default useFilterHandler;