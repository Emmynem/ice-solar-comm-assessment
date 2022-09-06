const NAME_REGEX = /^([a-zA-Z]{2,25})$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
const PHONE_REGEX = /^([- +()0-9]{6,15})$/;
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,25}$/;
const LAT_REGEX = /^[+-]?(([1-8]?[0-9])(\.[0-9]{1,6})?|90(\.0{1,6})?)$/;
const LONG_REGEX = /^[+-]?((([1-9]?[0-9]|1[0-7][0-9])(\.[0-9]{1,6})?)|180(\.0{1,6})?)$/;
const baseValidationText = "Validation Error - ";
const defaultUserId = 2;

export const config = {
    token: "token",
    username: "username",
    NAME_REGEX,
    EMAIL_REGEX,
    PHONE_REGEX,
    PASSWORD_REGEX,
    LAT_REGEX,
    LONG_REGEX,
    baseValidationText,
    defaultUserId
};