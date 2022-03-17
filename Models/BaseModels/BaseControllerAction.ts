class BaseControllerAction {
    public Name: string;
    public ControllerName: string;
    public BaseUrl: string;
    public Function?: any;

    constructor(Name: string, BaseUrl: string, ControllerName: string) {
        this.Name = Name;
        this.BaseUrl = BaseUrl;
        this.ControllerName = ControllerName;
    }
}

export default BaseControllerAction;