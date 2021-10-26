import styled from 'styled-components';
import * as v from '../../constants/variables';

import { ModalHeader, Input, Button } from '../includes/Modal/style';

const AdminPanel = styled.section`
    height: 100%;
    width: 100%;
    position: relative;
`;

const Message = styled.div`
    height: 50px;
    position: absolute;
    top: 0;
    right: 20px;
    background-color: ${v.regularDark};
    border-radius: 5px;
    box-shadow: 0px 0px 4px 0px rgba(102, 102, 102, 0.9);
    padding: 0 15px;
    display: flex;
    align-items: center;
    svg {
        margin-right: 5px;
    }
`;

const Select = styled.div`
    height: 35px;
    width: 90%;
    color: ${v.regularLight};
    background-color: ${v.regularDark};
    font-size: 15px;
    box-sizing: border-box;
    padding-left: 5px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 20px;
    box-shadow: ${v.inpShadow};
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    svg {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
        height: 23px !important;
        z-index: 100;
    }
    span {
        text-transform: capitalize;
    }
`;

const Options = styled.div`
    width: 90%;
    background-color: ${v.regularDark};
    position: absolute;
    top: 105%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 300;
    border-radius: 5px;
    .option {
        height: 35px;
        width: 100%;
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, .5);
        cursor: pointer;
        span {
            font-size: 15px;
            box-sizing: border-box;
            padding-left: 5px;
        }
    }
    .option:hover > span {
        color: #e6e6e6;
    }
`;

export { 
    AdminPanel,
    Message,
    ModalHeader,
    Input,
    Select,
    Options,
    Button
}