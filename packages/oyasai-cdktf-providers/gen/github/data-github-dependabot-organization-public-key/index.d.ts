import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGithubDependabotOrganizationPublicKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/dependabot_organization_public_key#id DataGithubDependabotOrganizationPublicKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/dependabot_organization_public_key github_dependabot_organization_public_key}
*/
export declare class DataGithubDependabotOrganizationPublicKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "github_dependabot_organization_public_key";
    /**
    * Generates CDKTF code for importing a DataGithubDependabotOrganizationPublicKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubDependabotOrganizationPublicKey to import
    * @param importFromId The id of the existing DataGithubDependabotOrganizationPublicKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/dependabot_organization_public_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubDependabotOrganizationPublicKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/dependabot_organization_public_key github_dependabot_organization_public_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubDependabotOrganizationPublicKeyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataGithubDependabotOrganizationPublicKeyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get key(): any;
    get keyId(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
