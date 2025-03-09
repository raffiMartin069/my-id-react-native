import {COURSE as ENV_COURSE, NAME as ENV_NAME, ID_NO} from "@env";

if (!ENV_NAME || !ENV_COURSE || !ID_NO) {
    throw new Error("Please provide a valid name, course and id number");
}

export const NAME = ENV_NAME;
export const COURSE = ENV_COURSE;
export const ID_NUMBER = ID_NO;