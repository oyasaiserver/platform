import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareOrganizationProfileAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization_profile#organization_id DataCloudflareOrganizationProfileA#organization_id}
    */
    readonly organizationId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization_profile cloudflare_organization_profile}
*/
export declare class DataCloudflareOrganizationProfileA extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_organization_profile";
    /**
    * Generates CDKTF code for importing a DataCloudflareOrganizationProfileA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareOrganizationProfileA to import
    * @param importFromId The id of the existing DataCloudflareOrganizationProfileA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareOrganizationProfileA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/organization_profile cloudflare_organization_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareOrganizationProfileAConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareOrganizationProfileAConfig);
    get businessAddress(): any;
    get businessEmail(): any;
    get businessName(): any;
    get businessPhone(): any;
    get externalMetadata(): any;
    private _organizationId?;
    get organizationId(): string;
    set organizationId(value: string);
    get organizationIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
