import React, { useState } from "react";

import AuthWrapper from "@/src/components/widgets/AuthWrapper";
import FormUniversal from "../components/entities/forms/FormUniversal";
import { initialValuesUpdate, inputFieldDataUpdate, validationSchemaUpdate } from "../pagesData/update-password";

export interface IShowEye {
     password: boolean;
     repeatPassword: boolean;
}

const UpdatePassword = () => {
     const [activeEye, setActiveEye] = useState({ password: false, repeatPassword: false });

     const showPassword = (id: "password" | "repeatPassword") => {
          if (activeEye[id]) {
               setActiveEye((value) => ({ ...value, [id]: false }));
          } else {
               setActiveEye((value) => ({ ...value, [id]: true }));
          }
     };

     return (
          <AuthWrapper titleText={"Обновите пароль"}>
               <FormUniversal
<<<<<<< HEAD:src/pages/update-password.tsx
                    validationSchema={validationSchemaUpdate}
=======
                    onSubmit={() => console.log(1)}
                    validationSchema={validationSchemaChange}
>>>>>>> origin/dev:src/pages/change-password.tsx
                    classNameForm="changePassword"
                    buttonSubmitText="Обновить пароль"
                    initialValues={initialValuesUpdate}
                    inputFieldData={inputFieldDataUpdate}
                    onClick={showPassword}
                    activeEye={activeEye} onSubmit={function (): void | Promise<never> {
                         throw new Error("Function not implemented.");
                    }}               />
          </AuthWrapper>
     );
};

export default UpdatePassword;