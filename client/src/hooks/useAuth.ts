import { useState, ChangeEvent, FormEvent } from 'react';

import useFetch from './useFetch';
import useToggleModal from './useToggleModal';

import { Methods } from '../ts/types';
import { Values } from '../components/Header/Auth/ts/interfaces';

import { ModalTypes, FetchType } from '../ts/types';

const useAuth = (type: ModalTypes, initialState: Values, schema: any) => {
    const [value, setValues] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    
    const { response, sendRequest } = useFetch(FetchType.AUTH);

    const { loading, data, error } = response;

    const { toggleModal } = useToggleModal();

    const handleModal = () => {
        toggleModal(type);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const val = e.target.value;

        setValues({ ...value, [name]: val });
    }

    const handleValidation = async (schema: any, values : Values) => {
        let errList = <Values>{};

        try {
            await schema.validate(values, { abortEarly: false });

            return { errList: false };
        } catch (err) {
            err.inner.forEach(({ path, message }: any) => {
                errList[path as keyof Values] = message;
            });
            
            return { errList };
        }
    };

    const handleFocus = (e: any) => {
        const name = e.target.name;

        if(errors[name as keyof Values]) {
            setErrors({ ...errors, [name]: '' });
        } 
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>, path: string, method: Methods, fetchType: FetchType) => {
        e.preventDefault();
        const { errList } = await handleValidation(schema, value);

        if(errList) {
            setErrors({ ...errors, ...errList as {} });
        } else {
            sendRequest({ path, method, value });
        }
    }

    return { 
        value, 
        errors, 
        handleChange, 
        handleFocus, 
        handleSubmit,
        handleModal,
        fetchedState: { loading, data }
    };
}

export default useAuth;


























// const nameRegEx = /^[a-zA-Z ]+$/;
//         const phoneRegEx = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;

//         const valKeys: string[] = Object.keys(values);
//         let errorsLocal: any = {};

//         valKeys.forEach((key: string) => {
//             if(type === 'register') {
//                 const valuesKey = values[key as keyof Values];

//                 switch(true) {
//                     case (!valuesKey):
//                         errorsLocal[key] = '???????????? ???????? ???????????????????? ??????????????????';
//                     case (key === 'name' && !nameRegEx.test(values.name)):
//                         errorsLocal[key] = '???????????????? ??????';
//                     case (key === 'phone' && !phoneRegEx.test(values.phone)):
//                         errorsLocal[key] = '???????????????? ?????????? ????????????????';
//                     case (key === 'name' && values.name.length < 5):
//                         errorsLocal[key] = '???????????????????? ?????????????? 5 ????????????????';
//                     case (key === 'password' && values.password.length < 7):
//                         errorsLocal[key] = '???????????????????? ?????????????? 7 ????????????????';
//                     case (key === 'repPassword' && valuesKey !== values['password']):
//                         errorsLocal[key] = '???????????? ???? ??????????????????';
//                     default:
//                         break;
//                 }
//             } else {
//                 switch(true) {
//                     case (!values[key as keyof Values]):
//                         errorsLocal[key] = '???????????? ???????? ???????????????????? ??????????????????';
//                     case (key === 'name' && !nameRegEx.test(values.name)):
//                         errorsLocal[key] = '???????????????? ??????';
//                     case (key === 'password' && values.password.length < 7):
//                         errorsLocal[key] = '???????????????????? ?????????????? 7 ????????????????';
//                     default:
//                         break;
//                 }
//             }

//             setErrors({ ...errors, ...errorsLocal });
//         });