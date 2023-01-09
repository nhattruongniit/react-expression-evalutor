import React from 'react';

export type IState = {
  number: string;
}

type IAppContext = IState & {
  currentStep: number;
  setForm: React.Dispatch<React.SetStateAction<any>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handeChangeForm: (e: any) => void;
};

export const AppContext = React.createContext<IAppContext>({} as IAppContext);

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [form, setForm] = React.useState({
    number: "1",
  });
  const [currentStep, setCurrentStep] = React.useState(1);

  function handeChangeForm(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prevState => ({ 
      ...prevState,
      [name]: value
    }));
  }

  return (
    <AppContext.Provider 
      value={{ 
        // states
        ...form, 
        currentStep,
        // actions
        setCurrentStep,
        setForm,
        handeChangeForm
      }}
      >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);