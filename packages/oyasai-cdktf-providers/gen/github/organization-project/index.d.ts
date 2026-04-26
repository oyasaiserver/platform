import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * The body of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_project#body OrganizationProject#body}
    */
    readonly body?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_project#id OrganizationProject#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The name of the project.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_project#name OrganizationProject#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_project github_organization_project}
*/
export declare class OrganizationProject extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_organization_project";
    /**
    * Generates CDKTF code for importing a OrganizationProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationProject to import
    * @param importFromId The id of the existing OrganizationProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationProject to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_project github_organization_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationProjectConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationProjectConfig);
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string;
    get etag(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get url(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
