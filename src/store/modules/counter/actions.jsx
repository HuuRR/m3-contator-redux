import { AddCounter, SubCounter } from "./actionTypes";

export const addNumber = (payload) => ({ type: AddCounter, payload });

export const subNumber = (payload) => ({ type: SubCounter, payload });
