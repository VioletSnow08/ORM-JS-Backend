import md5 from "md5";

class passwordService {
    public static hashPassword(password : string) {
        return md5(password);
    }
    public static isValid(password : string) {
        return true;
        // return "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).*".match(password); // One capital letter, one lowercase letter, one number.
    }
}

export default passwordService;