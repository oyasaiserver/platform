import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationSecurityManagerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_security_manager#id OrganizationSecurityManager#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The slug of the team to manage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_security_manager#team_slug OrganizationSecurityManager#team_slug}
    */
    readonly teamSlug: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_security_manager github_organization_security_manager}
*/
export declare class OrganizationSecurityManager extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_organization_security_manager";
    /**
    * Generates CDKTF code for importing a OrganizationSecurityManager resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationSecurityManager to import
    * @param importFromId The id of the existing OrganizationSecurityManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_security_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationSecurityManager to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_security_manager github_organization_security_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationSecurityManagerConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationSecurityManagerConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _teamSlug?;
    get teamSlug(): string;
    set teamSlug(value: string);
    get teamSlugInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
