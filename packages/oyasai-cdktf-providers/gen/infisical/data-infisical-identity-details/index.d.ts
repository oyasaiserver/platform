import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataInfisicalIdentityDetailsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataInfisicalIdentityDetailsOrganization {
}
export declare function dataInfisicalIdentityDetailsOrganizationToTerraform(struct?: DataInfisicalIdentityDetailsOrganization): any;
export declare function dataInfisicalIdentityDetailsOrganizationToHclTerraform(struct?: DataInfisicalIdentityDetailsOrganization): any;
export declare class DataInfisicalIdentityDetailsOrganizationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataInfisicalIdentityDetailsOrganization | undefined;
    set internalValue(value: DataInfisicalIdentityDetailsOrganization | undefined);
    get id(): any;
    get name(): any;
    get slug(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/identity_details infisical_identity_details}
*/
export declare class DataInfisicalIdentityDetails extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "infisical_identity_details";
    /**
    * Generates CDKTF code for importing a DataInfisicalIdentityDetails resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalIdentityDetails to import
    * @param importFromId The id of the existing DataInfisicalIdentityDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/identity_details#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalIdentityDetails to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/identity_details infisical_identity_details} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalIdentityDetailsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataInfisicalIdentityDetailsConfig);
    private _organization;
    get organization(): DataInfisicalIdentityDetailsOrganizationOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
