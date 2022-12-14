import * as yupGlobal from "yup";
import { REGEX } from "./constants";
import i18n from "i18next";

declare module "yup" {
  interface StringSchema {
    isPhone(): StringSchema;
    isPassword(): StringSchema;
  }
}

yupGlobal.addMethod(yupGlobal.string, "isPhone", function isPhone() {
  return this.matches(REGEX.PHONE, {
    message: i18n.t("validation.phoneNumber.invalid"),
    excludeEmptyString: true,
  });
});

yupGlobal.addMethod(yupGlobal.string, "isPassword", function isPassword() {
  return this.matches(REGEX.PASSWORD, {
    message: i18n.t("validation.password.invalid"),
    excludeEmptyString: true,
  });
});

export default yupGlobal;
